import { __assign, __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, concatMap, filter, groupBy, map, mergeMap, switchMap, withLatestFrom, } from 'rxjs/operators';
import { CheckoutActions } from '../../../checkout/store/actions/index';
import { OCC_CART_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { getCartIdByUserId } from '../../utils/utils';
import { CartActions } from '../actions/index';
import { getCartHasPendingProcessesSelectorFactory } from '../selectors/multi-cart.selector';
var CartEffects = /** @class */ (function () {
    function CartEffects(actions$, cartConnector, store) {
        var _this = this;
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.store = store;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.loadCart$ = this.actions$.pipe(ofType(CartActions.LOAD_CART), map(function (action) { return action.payload; }), groupBy(function (payload) { return payload.cartId; }), mergeMap(function (group$) {
            return group$.pipe(switchMap(function (payload) {
                return of(payload).pipe(withLatestFrom(_this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
            }), filter(function (_a) {
                var _b = __read(_a, 2), _ = _b[0], hasPendingProcesses = _b[1];
                return !hasPendingProcesses;
            }), map(function (_a) {
                var _b = __read(_a, 1), payload = _b[0];
                return payload;
            }), switchMap(function (payload) {
                return _this.cartConnector.load(payload.userId, payload.cartId).pipe(mergeMap(function (cart) {
                    var actions = [];
                    if (cart) {
                        actions.push(new CartActions.LoadCartSuccess(__assign(__assign({}, payload), { cart: cart, cartId: getCartIdByUserId(cart, payload.userId) })));
                        if (payload.cartId === OCC_CART_ID_CURRENT) {
                            // Removing cart from entity object under `current` key as it is no longer needed.
                            // Current cart is loaded under it's code entity.
                            actions.push(new CartActions.RemoveCart({ cartId: OCC_CART_ID_CURRENT }));
                        }
                    }
                    else {
                        actions = [
                            new CartActions.LoadCartFail(__assign(__assign({}, payload), { error: {} })),
                        ];
                    }
                    return actions;
                }), catchError(function (error) {
                    var _a;
                    if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                        var couponExpiredErrors = error.error.errors.filter(function (err) { return err.reason === 'invalid'; });
                        if (couponExpiredErrors.length > 0) {
                            // clear coupons actions just wanted to reload cart again
                            // no need to do it in refresh or keep that action
                            // however removing this action will be a breaking change
                            // remove that action in 2.0 release
                            // @deprecated since 1.4
                            return from([
                                new CartActions.LoadCart(__assign({}, payload)),
                                new CartActions.ClearExpiredCoupons({}),
                            ]);
                        }
                        var cartNotFoundErrors = error.error.errors.filter(function (err) { return err.reason === 'notFound' || 'UnknownResourceError'; });
                        if (cartNotFoundErrors.length > 0 &&
                            payload.extraData &&
                            payload.extraData.active) {
                            // Clear cart is responsible for removing cart in `cart` store feature.
                            // Remove cart does the same thing, but in `multi-cart` store feature.
                            return of(new CartActions.RemoveCart({ cartId: payload.cartId }));
                        }
                    }
                    return of(new CartActions.LoadCartFail(__assign(__assign({}, payload), { error: makeErrorSerializable(error) })));
                }));
            }));
        }), withdrawOn(this.contextChange$));
        this.createCart$ = this.actions$.pipe(ofType(CartActions.CREATE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap(function (cart) {
                var conditionalActions = [];
                if (payload.oldCartId) {
                    conditionalActions.push(new CartActions.MergeCartSuccess({
                        extraData: payload.extraData,
                        userId: payload.userId,
                        tempCartId: payload.tempCartId,
                        cartId: getCartIdByUserId(cart, payload.userId),
                        oldCartId: payload.oldCartId,
                    }));
                }
                return __spread([
                    new CartActions.CreateCartSuccess(__assign(__assign({}, payload), { cart: cart, cartId: getCartIdByUserId(cart, payload.userId) })),
                    new CartActions.SetTempCart({
                        cart: cart,
                        tempCartId: payload.tempCartId,
                    })
                ], conditionalActions);
            }), catchError(function (error) {
                return of(new CartActions.CreateCartFail(__assign(__assign({}, payload), { error: makeErrorSerializable(error) })));
            }));
        }), withdrawOn(this.contextChange$));
        this.mergeCart$ = this.actions$.pipe(ofType(CartActions.MERGE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap(function (currentCart) {
                return [
                    new CartActions.CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                        extraData: payload.extraData,
                        tempCartId: payload.tempCartId,
                    }),
                ];
            }));
        }), withdrawOn(this.contextChange$));
        this.refresh$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS, CartActions.CART_ADD_VOUCHER_SUCCESS), map(function (action) { return action.payload; }), concatMap(function (payload) {
            return from([
                new CartActions.CartProcessesDecrement(payload.cartId),
                new CartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]);
        }));
        this.refreshWithoutProcesses$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_VOUCHER_SUCCESS), map(function (action) { return action.payload; }), map(function (payload) {
            return new CartActions.LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        }));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), mergeMap(function () {
            return [new CartActions.ResetCartDetails()];
        }));
        this.addEmail$ = this.actions$.pipe(ofType(CartActions.ADD_EMAIL_TO_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector
                .addEmail(payload.userId, payload.cartId, payload.email)
                .pipe(mergeMap(function () {
                return [
                    new CartActions.AddEmailToCartSuccess(__assign({}, payload)),
                    new CartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ];
            }), catchError(function (error) {
                return from([
                    new CartActions.AddEmailToCartFail(__assign(__assign({}, payload), { error: makeErrorSerializable(error) })),
                    new CartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ]);
            }));
        }), withdrawOn(this.contextChange$));
        this.deleteCart$ = this.actions$.pipe(ofType(CartActions.DELETE_CART), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.cartConnector.delete(payload.userId, payload.cartId).pipe(map(function () {
                return new CartActions.DeleteCartSuccess(__assign({}, payload));
            }), catchError(function (error) {
                return from([
                    new CartActions.DeleteCartFail(__assign(__assign({}, payload), { error: makeErrorSerializable(error) })),
                    // Error might happen in higher backend layer and cart could still be removed.
                    // When load fail with NotFound error then RemoveCart action will kick in and clear that cart in our state.
                    new CartActions.LoadCart(__assign({}, payload)),
                ]);
            }));
        }));
    }
    CartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CartConnector },
        { type: Store }
    ]; };
    __decorate([
        Effect()
    ], CartEffects.prototype, "loadCart$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "createCart$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "mergeCart$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "refresh$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "refreshWithoutProcesses$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "resetCartDetailsOnSiteContextChange$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "addEmail$", void 0);
    __decorate([
        Effect()
    ], CartEffects.prototype, "deleteCart$", void 0);
    CartEffects = __decorate([
        Injectable()
    ], CartEffects);
    return CartEffects;
}());
export { CartEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUc3RjtJQWdVRSxxQkFDVSxRQUFpQixFQUNqQixhQUE0QixF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S0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsY0FBTSxPQUFPLEVBQUcsQ0FBQztZQUMzRCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQyxLQUFLO2dCQUNmLE9BQUEsSUFBSSxDQUFDO29CQUNILElBQUksV0FBVyxDQUFDLGNBQWMsdUJBQ3pCLE9BQU8sS0FDVixLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQ25DO29CQUNGLDhFQUE4RTtvQkFDOUUsMkdBQTJHO29CQUMzRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLGNBQ25CLE9BQU8sRUFDVjtpQkFDSCxDQUFDO1lBVkYsQ0FVRSxDQUNILENBQ0Y7UUFqQkQsQ0FpQkMsQ0FDRixDQUNGLENBQUM7SUFNQyxDQUFDOztnQkFIZ0IsT0FBTztnQkFDRixhQUFhO2dCQUNyQixLQUFLOztJQTFUdEI7UUFEQyxNQUFNLEVBQUU7a0RBbUdQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7b0RBa0RQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7bURBb0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7aURBd0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7aUVBMEJQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7NkVBV1A7SUFHRjtRQURDLE1BQU0sRUFBRTtrREFzQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTtvREE0QlA7SUE5VFMsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXLENBcVV2QjtJQUFELGtCQUFDO0NBQUEsQUFyVUQsSUFxVUM7U0FyVVksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGNvbmNhdE1hcCxcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9DQ19DQVJUX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQ2FydENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IGdldENhcnRIYXNQZW5kaW5nUHJvY2Vzc2VzU2VsZWN0b3JGYWN0b3J5IH0gZnJvbSAnLi4vc2VsZWN0b3JzL211bHRpLWNhcnQuc2VsZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydEVmZmVjdHMge1xuICBwcml2YXRlIGNvbnRleHRDaGFuZ2UkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ2xlYXJFeHBpcmVkQ291cG9uc1xuICAgIHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5MT0FEX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkoKHBheWxvYWQpID0+IHBheWxvYWQuY2FydElkKSxcbiAgICBtZXJnZU1hcCgoZ3JvdXAkKSA9PlxuICAgICAgZ3JvdXAkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvZihwYXlsb2FkKS5waXBlKFxuICAgICAgICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgICAgICBnZXRDYXJ0SGFzUGVuZGluZ1Byb2Nlc3Nlc1NlbGVjdG9yRmFjdG9yeShwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChbXywgaGFzUGVuZGluZ1Byb2Nlc3Nlc10pID0+ICFoYXNQZW5kaW5nUHJvY2Vzc2VzKSxcbiAgICAgICAgbWFwKChbcGF5bG9hZF0pID0+IHBheWxvYWQpLFxuICAgICAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jYXJ0Q29ubmVjdG9yLmxvYWQocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKS5waXBlKFxuICAgICAgICAgICAgbWVyZ2VNYXAoKGNhcnQ6IENhcnQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgY2FydCxcbiAgICAgICAgICAgICAgICAgICAgY2FydElkOiBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0LCBwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5jYXJ0SWQgPT09IE9DQ19DQVJUX0lEX0NVUlJFTlQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFJlbW92aW5nIGNhcnQgZnJvbSBlbnRpdHkgb2JqZWN0IHVuZGVyIGBjdXJyZW50YCBrZXkgYXMgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgY2FydCBpcyBsb2FkZWQgdW5kZXIgaXQncyBjb2RlIGVudGl0eS5cbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQoeyBjYXJ0SWQ6IE9DQ19DQVJUX0lEX0NVUlJFTlQgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHt9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yPy5lcnJvcj8uZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291cG9uRXhwaXJlZEVycm9ycyA9IGVycm9yLmVycm9yLmVycm9ycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAoZXJyKSA9PiBlcnIucmVhc29uID09PSAnaW52YWxpZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb3Vwb25FeHBpcmVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGNvdXBvbnMgYWN0aW9ucyBqdXN0IHdhbnRlZCB0byByZWxvYWQgY2FydCBhZ2FpblxuICAgICAgICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkbyBpdCBpbiByZWZyZXNoIG9yIGtlZXAgdGhhdCBhY3Rpb25cbiAgICAgICAgICAgICAgICAgIC8vIGhvd2V2ZXIgcmVtb3ZpbmcgdGhpcyBhY3Rpb24gd2lsbCBiZSBhIGJyZWFraW5nIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoYXQgYWN0aW9uIGluIDIuMCByZWxlYXNlXG4gICAgICAgICAgICAgICAgICAvLyBAZGVwcmVjYXRlZCBzaW5jZSAxLjRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tKFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHsgLi4ucGF5bG9hZCB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMoe30pLFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydE5vdEZvdW5kRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChlcnIpID0+IGVyci5yZWFzb24gPT09ICdub3RGb3VuZCcgfHwgJ1Vua25vd25SZXNvdXJjZUVycm9yJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgY2FydE5vdEZvdW5kRXJyb3JzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQuZXh0cmFEYXRhICYmXG4gICAgICAgICAgICAgICAgICBwYXlsb2FkLmV4dHJhRGF0YS5hY3RpdmVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIC8vIENsZWFyIGNhcnQgaXMgcmVzcG9uc2libGUgZm9yIHJlbW92aW5nIGNhcnQgaW4gYGNhcnRgIHN0b3JlIGZlYXR1cmUuXG4gICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY2FydCBkb2VzIHRoZSBzYW1lIHRoaW5nLCBidXQgaW4gYG11bHRpLWNhcnRgIHN0b3JlIGZlYXR1cmUuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KHsgY2FydElkOiBwYXlsb2FkLmNhcnRJZCB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uYWxBY3Rpb25zID0gW107XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5vbGRDYXJ0SWQpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5vbGRDYXJ0SWQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIGNhcnRJZDogZ2V0Q2FydElkQnlVc2VySWQoY2FydCwgcGF5bG9hZC51c2VySWQpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0KHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHRlbXBDYXJ0SWQ6IHBheWxvYWQudGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIC4uLmNvbmRpdGlvbmFsQWN0aW9ucyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHBheWxvYWQudXNlcklkLCBPQ0NfQ0FSVF9JRF9DVVJSRU5UKS5waXBlKFxuICAgICAgICBtZXJnZU1hcCgoY3VycmVudENhcnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgdGVtcENhcnRJZDogcGF5bG9hZC50ZW1wQ2FydElkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gICAgICApID0+IGFjdGlvbi5wYXlsb2FkXG4gICAgKSxcbiAgICBjb25jYXRNYXAoKHBheWxvYWQpID0+XG4gICAgICBmcm9tKFtcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSksXG4gICAgICBdKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFdpdGhvdXRQcm9jZXNzZXMkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9BRERfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1VQREFURV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfVk9VQ0hFUl9TVUNDRVNTXG4gICAgKSxcbiAgICBtYXAoXG4gICAgICAoXG4gICAgICAgIGFjdGlvbjpcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3NcbiAgICAgICAgICB8IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyU3VjY2Vzc1xuICAgICAgKSA9PiBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWFwKFxuICAgICAgKHBheWxvYWQpID0+XG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICB9KVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRDYXJ0RGV0YWlsc09uU2l0ZUNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIFtuZXcgQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscygpXTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkFkZEVtYWlsVG9DYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yXG4gICAgICAgIC5hZGRFbWFpbChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZW1haWwpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBkZWxldGVDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkRlbGV0ZUNhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuREVMRVRFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHBheWxvYWQpID0+XG4gICAgICB0aGlzLmNhcnRDb25uZWN0b3IuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCkucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IENhcnRBY3Rpb25zLkRlbGV0ZUNhcnRTdWNjZXNzKHsgLi4ucGF5bG9hZCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkRlbGV0ZUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC8vIEVycm9yIG1pZ2h0IGhhcHBlbiBpbiBoaWdoZXIgYmFja2VuZCBsYXllciBhbmQgY2FydCBjb3VsZCBzdGlsbCBiZSByZW1vdmVkLlxuICAgICAgICAgICAgLy8gV2hlbiBsb2FkIGZhaWwgd2l0aCBOb3RGb3VuZCBlcnJvciB0aGVuIFJlbW92ZUNhcnQgYWN0aW9uIHdpbGwga2ljayBpbiBhbmQgY2xlYXIgdGhhdCBjYXJ0IGluIG91ciBzdGF0ZS5cbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0Q29ubmVjdG9yOiBDYXJ0Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD5cbiAgKSB7fVxufVxuIl19