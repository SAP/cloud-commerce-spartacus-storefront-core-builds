import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultiCartService } from './multi-cart.service';
import { UserService } from '../../user/facade/user.service';
import { AuthService } from '../../auth/facade/auth.service';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { of, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, tap, shareReplay, switchMap, take } from 'rxjs/operators';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
var SelectiveCartService = /** @class */ (function () {
    function SelectiveCartService(store, userService, authService, multiCartService, baseSiteService) {
        var _this = this;
        this.store = store;
        this.userService = userService;
        this.authService = authService;
        this.multiCartService = multiCartService;
        this.baseSiteService = baseSiteService;
        this.cartId$ = new BehaviorSubject(undefined);
        this.PREVIOUS_USER_ID_INITIAL_VALUE = 'PREVIOUS_USER_ID_INITIAL_VALUE';
        this.previousUserId = this.PREVIOUS_USER_ID_INITIAL_VALUE;
        this.cartSelector$ = this.cartId$.pipe(switchMap(function (cartId) {
            _this.cartId = cartId;
            return _this.multiCartService.getCartEntity(cartId);
        }));
        combineLatest([
            this.userService.get(),
            this.baseSiteService.getActive(),
        ]).subscribe(function (_a) {
            var _b = __read(_a, 2), user = _b[0], activeBaseSite = _b[1];
            if (user && user.customerId && activeBaseSite) {
                _this.customerId = user.customerId;
                _this.cartId$.next("selectivecart" + activeBaseSite + _this.customerId);
            }
            else if (user && !user.customerId) {
                _this.cartId$.next(undefined);
            }
        });
        this.authService.getOccUserId().subscribe(function (userId) {
            _this.userId = userId;
            if (_this.isJustLoggedIn(userId)) {
                _this.load();
            }
            _this.previousUserId = userId;
        });
        this.selectiveCart$ = this.cartSelector$.pipe(map(function (cartEntity) {
            return {
                cart: cartEntity.value,
                loading: cartEntity.loading,
                loaded: (cartEntity.error || cartEntity.success) && !cartEntity.loading,
            };
        }), filter(function (_a) {
            var loading = _a.loading;
            return !loading;
        }), tap(function (_a) {
            var cart = _a.cart, loaded = _a.loaded;
            if (_this.cartId && _this.isEmpty(cart) && !loaded) {
                _this.load();
            }
        }), map(function (_a) {
            var cart = _a.cart;
            return (cart ? cart : {});
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    SelectiveCartService.prototype.getCart = function () {
        return this.selectiveCart$;
    };
    SelectiveCartService.prototype.getEntries = function () {
        return this.multiCartService.getEntries(this.cartId);
    };
    SelectiveCartService.prototype.getLoaded = function () {
        return this.cartSelector$.pipe(map(function (cart) { return (cart.success || cart.error) && !cart.loading; }));
    };
    SelectiveCartService.prototype.load = function () {
        if (this.isLoggedIn(this.userId) && this.cartId) {
            this.multiCartService.loadCart({
                userId: this.userId,
                cartId: this.cartId,
            });
        }
    };
    SelectiveCartService.prototype.addEntry = function (productCode, quantity) {
        var _this = this;
        var loadAttempted = false;
        this.cartSelector$
            .pipe(filter(function () { return !loadAttempted; }), switchMap(function (cartState) {
            if (_this.isEmpty(cartState.value) && !cartState.loading) {
                loadAttempted = true;
                _this.load();
            }
            return of(cartState);
        }), filter(function (cartState) { return !_this.isEmpty(cartState.value); }), take(1))
            .subscribe(function (_) {
            _this.multiCartService.addEntry(_this.userId, _this.cartId, productCode, quantity);
        });
    };
    SelectiveCartService.prototype.removeEntry = function (entry) {
        this.multiCartService.removeEntry(this.userId, this.cartId, entry.entryNumber);
    };
    SelectiveCartService.prototype.updateEntry = function (entryNumber, quantity) {
        this.multiCartService.updateEntry(this.userId, this.cartId, entryNumber, quantity);
    };
    SelectiveCartService.prototype.getEntry = function (productCode) {
        return this.multiCartService.getEntry(this.cartId, productCode);
    };
    SelectiveCartService.prototype.isEmpty = function (cart) {
        return (!cart || (typeof cart === 'object' && Object.keys(cart).length === 0));
    };
    SelectiveCartService.prototype.isJustLoggedIn = function (userId) {
        return (this.isLoggedIn(userId) &&
            this.previousUserId !== userId && // *just* logged in
            this.previousUserId !== this.PREVIOUS_USER_ID_INITIAL_VALUE // not app initialization
        );
    };
    SelectiveCartService.prototype.isLoggedIn = function (userId) {
        return typeof userId !== 'undefined' && userId !== OCC_USER_ID_ANONYMOUS;
    };
    SelectiveCartService.ctorParameters = function () { return [
        { type: Store },
        { type: UserService },
        { type: AuthService },
        { type: MultiCartService },
        { type: BaseSiteService }
    ]; };
    SelectiveCartService = __decorate([
        Injectable()
    ], SelectiveCartService);
    return SelectiveCartService;
}());
export { SelectiveCartService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L2ZhY2FkZS9zZWxlY3RpdmUtY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzlFO0lBb0JFLDhCQUNZLEtBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGdCQUFrQyxFQUNsQyxlQUFnQztRQUw1QyxpQkFtREM7UUFsRFcsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFwQnBDLFlBQU8sR0FBNEIsSUFBSSxlQUFlLENBQzVELFNBQVMsQ0FDVixDQUFDO1FBRWUs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bUJBQW1CO1lBQ3JELElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUF5QjtTQUN0RixDQUFDO0lBQ0osQ0FBQztJQUVPLHlDQUFVLEdBQWxCLFVBQW1CLE1BQWM7UUFDL0IsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxLQUFLLHFCQUFxQixDQUFDO0lBQzNFLENBQUM7O2dCQXpJa0IsS0FBSztnQkFDQyxXQUFXO2dCQUNYLFdBQVc7Z0JBQ04sZ0JBQWdCO2dCQUNqQixlQUFlOztJQXpCakMsb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTtPQUNBLG9CQUFvQixDQStKaEM7SUFBRCwyQkFBQztDQUFBLEFBL0pELElBK0pDO1NBL0pZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQU5PTllNT1VTIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RpdmVDYXJ0U2VydmljZSB7XG4gIHByaXZhdGUgY3VzdG9tZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIHVzZXJJZDogc3RyaW5nO1xuICBwcml2YXRlIGNhcnRJZDogc3RyaW5nO1xuICBwcml2YXRlIHNlbGVjdGl2ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBwcml2YXRlIGNhcnRJZCQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFID1cbiAgICAnUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFJztcbiAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZCA9IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuXG4gIHByaXZhdGUgY2FydFNlbGVjdG9yJCA9IHRoaXMuY2FydElkJC5waXBlKFxuICAgIHN3aXRjaE1hcChjYXJ0SWQgPT4ge1xuICAgICAgdGhpcy5jYXJ0SWQgPSBjYXJ0SWQ7XG4gICAgICByZXR1cm4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldENhcnRFbnRpdHkoY2FydElkKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlXG4gICkge1xuICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy51c2VyU2VydmljZS5nZXQoKSxcbiAgICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlLmdldEFjdGl2ZSgpLFxuICAgIF0pLnN1YnNjcmliZSgoW3VzZXIsIGFjdGl2ZUJhc2VTaXRlXSkgPT4ge1xuICAgICAgaWYgKHVzZXIgJiYgdXNlci5jdXN0b21lcklkICYmIGFjdGl2ZUJhc2VTaXRlKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tZXJJZCA9IHVzZXIuY3VzdG9tZXJJZDtcbiAgICAgICAgdGhpcy5jYXJ0SWQkLm5leHQoYHNlbGVjdGl2ZWNhcnQke2FjdGl2ZUJhc2VTaXRlfSR7dGhpcy5jdXN0b21lcklkfWApO1xuICAgICAgfSBlbHNlIGlmICh1c2VyICYmICF1c2VyLmN1c3RvbWVySWQpIHtcbiAgICAgICAgdGhpcy5jYXJ0SWQkLm5leHQodW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkuc3Vic2NyaWJlKHVzZXJJZCA9PiB7XG4gICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblxuICAgICAgaWYgKHRoaXMuaXNKdXN0TG9nZ2VkSW4odXNlcklkKSkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCA9IHVzZXJJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0aXZlQ2FydCQgPSB0aGlzLmNhcnRTZWxlY3RvciQucGlwZShcbiAgICAgIG1hcCgoY2FydEVudGl0eTogTG9hZGVyU3RhdGU8Q2FydD4pOiB7XG4gICAgICAgIGNhcnQ6IENhcnQ7XG4gICAgICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgICAgIGxvYWRlZDogYm9vbGVhbjtcbiAgICAgIH0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhcnQ6IGNhcnRFbnRpdHkudmFsdWUsXG4gICAgICAgICAgbG9hZGluZzogY2FydEVudGl0eS5sb2FkaW5nLFxuICAgICAgICAgIGxvYWRlZDpcbiAgICAgICAgICAgIChjYXJ0RW50aXR5LmVycm9yIHx8IGNhcnRFbnRpdHkuc3VjY2VzcykgJiYgIWNhcnRFbnRpdHkubG9hZGluZyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKCh7IGxvYWRpbmcgfSkgPT4gIWxvYWRpbmcpLFxuICAgICAgdGFwKCh7IGNhcnQsIGxvYWRlZCB9KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhcnRJZCAmJiB0aGlzLmlzRW1wdHkoY2FydCkgJiYgIWxvYWRlZCkge1xuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoeyBjYXJ0IH0pID0+IChjYXJ0ID8gY2FydCA6IHt9KSksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENhcnQoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aXZlQ2FydCQ7XG4gIH1cblxuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlDYXJ0U2VydmljZS5nZXRFbnRyaWVzKHRoaXMuY2FydElkKTtcbiAgfVxuXG4gIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VsZWN0b3IkLnBpcGUoXG4gICAgICBtYXAoY2FydCA9PiAoY2FydC5zdWNjZXNzIHx8IGNhcnQuZXJyb3IpICYmICFjYXJ0LmxvYWRpbmcpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dlZEluKHRoaXMudXNlcklkKSAmJiB0aGlzLmNhcnRJZCkge1xuICAgICAgdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmxvYWRDYXJ0KHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgY2FydElkOiB0aGlzLmNhcnRJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbG9hZEF0dGVtcHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FydFNlbGVjdG9yJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhbG9hZEF0dGVtcHRlZCksXG4gICAgICAgIHN3aXRjaE1hcChjYXJ0U3RhdGUgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzRW1wdHkoY2FydFN0YXRlLnZhbHVlKSAmJiAhY2FydFN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIGxvYWRBdHRlbXB0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZihjYXJ0U3RhdGUpO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKGNhcnRTdGF0ZSA9PiAhdGhpcy5pc0VtcHR5KGNhcnRTdGF0ZS52YWx1ZSkpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UuYWRkRW50cnkoXG4gICAgICAgICAgdGhpcy51c2VySWQsXG4gICAgICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoXG4gICAgICB0aGlzLnVzZXJJZCxcbiAgICAgIHRoaXMuY2FydElkLFxuICAgICAgZW50cnkuZW50cnlOdW1iZXJcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgIHRoaXMudXNlcklkLFxuICAgICAgdGhpcy5jYXJ0SWQsXG4gICAgICBlbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5XG4gICAgKTtcbiAgfVxuXG4gIGdldEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aUNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMuY2FydElkLCBwcm9kdWN0Q29kZSk7XG4gIH1cblxuICBwcml2YXRlIGlzRW1wdHkoY2FydDogQ2FydCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhY2FydCB8fCAodHlwZW9mIGNhcnQgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbih1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzTG9nZ2VkSW4odXNlcklkKSAmJlxuICAgICAgdGhpcy5wcmV2aW91c1VzZXJJZCAhPT0gdXNlcklkICYmIC8vICpqdXN0KiBsb2dnZWQgaW5cbiAgICAgIHRoaXMucHJldmlvdXNVc2VySWQgIT09IHRoaXMuUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFIC8vIG5vdCBhcHAgaW5pdGlhbGl6YXRpb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xvZ2dlZEluKHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB1c2VySWQgIT09ICd1bmRlZmluZWQnICYmIHVzZXJJZCAhPT0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuICB9XG59XG4iXX0=