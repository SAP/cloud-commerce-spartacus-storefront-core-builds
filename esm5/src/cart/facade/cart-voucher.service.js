import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CartActions } from '../store/actions/index';
import { ADD_VOUCHER_PROCESS_ID } from '../store/cart-state';
import { CartSelectors } from '../store/selectors/index';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
var CartVoucherService = /** @class */ (function () {
    function CartVoucherService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    CartVoucherService.prototype.addVoucher = function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe(function (_a) {
            var _b = __read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartAddVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        });
    };
    CartVoucherService.prototype.removeVoucher = function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe(function (_a) {
            var _b = __read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartRemoveVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        });
    };
    CartVoucherService.prototype.getAddVoucherResultError = function () {
        return this.store.pipe(select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    CartVoucherService.prototype.getAddVoucherResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    CartVoucherService.prototype.getAddVoucherResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    CartVoucherService.prototype.resetAddVoucherProcessingState = function () {
        this.store.dispatch(new CartActions.CartResetAddVoucher());
    };
    CartVoucherService.prototype.combineUserAndCartId = function (cartId) {
        if (cartId) {
            return this.authService.getOccUserId().pipe(take(1), map(function (userId) { return [userId, cartId]; }));
        }
        else {
            return combineLatest([
                this.authService.getOccUserId(),
                this.store.pipe(select(CartSelectors.getCartContent), map(function (cart) { return cart; })),
            ]).pipe(take(1), map(function (_a) {
                var _b = __read(_a, 2), userId = _b[0], cart = _b[1];
                return [
                    userId,
                    userId === OCC_USER_ID_ANONYMOUS ? cart.guid : cart.code,
                ];
            }));
        }
    };
    CartVoucherService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    CartVoucherService = __decorate([
        Injectable()
    ], CartVoucherService);
    return CartVoucherService;
}());
export { CartVoucherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC12b3VjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd0RTtJQUNFLDRCQUNZLEtBRVQsRUFDUyxXQUF3QjtRQUh4QixVQUFLLEdBQUwsS0FBSyxDQUVkO1FBQ1MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDakMsQ0FBQztJQUVKLHVDQUFVLEdBQVYsVUFBVyxTQUFpQixFQUFFLE1BQWU7UUFBN0MsaUJBVUM7UUFUQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBMkI7Z0JBQTNCLGtCQUEyQixFQUExQixpQkFBUyxFQUFFLHNCQUFjO1lBQ3JFLE9BQUEsS0FBSSxD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XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCwgU3RhdGVXaXRoQ2FydCB9IGZyb20gJy4uL3N0b3JlL2NhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0Vm91Y2hlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFxuICAgICAgU3RhdGVXaXRoQ2FydCB8IGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPlxuICAgID4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgYWRkVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZywgY2FydElkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb21iaW5lVXNlckFuZENhcnRJZChjYXJ0SWQpLnN1YnNjcmliZSgoW29jY1VzZXJJZCwgY2FydElkZW50aWZpZXJdKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKHtcbiAgICAgICAgICB1c2VySWQ6IG9jY1VzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZGVudGlmaWVyLFxuICAgICAgICAgIHZvdWNoZXJJZDogdm91Y2hlcklkLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZW1vdmVWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZCkuc3Vic2NyaWJlKChbb2NjVXNlcklkLCBjYXJ0SWRlbnRpZmllcl0pID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXIoe1xuICAgICAgICAgIHVzZXJJZDogb2NjVXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkZW50aWZpZXIsXG4gICAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NFcnJvckZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICBnZXRBZGRWb3VjaGVyUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgcmVzZXRBZGRWb3VjaGVyUHJvY2Vzc2luZ1N0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENhcnRBY3Rpb25zLkNhcnRSZXNldEFkZFZvdWNoZXIoKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxbc3RyaW5nLCBzdHJpbmddPiB7XG4gICAgaWYgKGNhcnRJZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCkucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgbWFwKHVzZXJJZCA9PiBbdXNlcklkLCBjYXJ0SWRdKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldE9jY1VzZXJJZCgpLFxuICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgc2VsZWN0KENhcnRTZWxlY3RvcnMuZ2V0Q2FydENvbnRlbnQpLFxuICAgICAgICAgIG1hcChjYXJ0ID0+IGNhcnQpXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAoKFt1c2VySWQsIGNhcnRdOiBbc3RyaW5nLCBDYXJ0XSkgPT4gW1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICB1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyA/IGNhcnQuZ3VpZCA6IGNhcnQuY29kZSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=