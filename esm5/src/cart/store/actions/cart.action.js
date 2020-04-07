import { __extends } from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
export var CREATE_CART = '[Cart] Create Cart';
export var CREATE_CART_FAIL = '[Cart] Create Cart Fail';
export var CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
export var LOAD_CART = '[Cart] Load Cart';
export var LOAD_CART_FAIL = '[Cart] Load Cart Fail';
export var LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
export var ADD_EMAIL_TO_CART = '[Cart] Add Email to Cart';
export var ADD_EMAIL_TO_CART_FAIL = '[Cart] Add Email to Cart Fail';
export var ADD_EMAIL_TO_CART_SUCCESS = '[Cart] Add Email to Cart Success';
export var MERGE_CART = '[Cart] Merge Cart';
export var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
export var RESET_CART_DETAILS = '[Cart] Reset Cart Details';
export var CLEAR_EXPIRED_COUPONS = '[Cart] Clear Expired Coupon';
export var CLEAR_CART = '[Cart] Clear Cart';
export var DELETE_CART = '[Cart] Delete Cart';
export var DELETE_CART_FAIL = '[Cart] Delete Cart Fail';
var CreateCart = /** @class */ (function (_super) {
    __extends(CreateCart, _super);
    function CreateCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId) || this;
        _this.payload = payload;
        _this.type = CREATE_CART;
        return _this;
    }
    return CreateCart;
}(EntityLoadAction));
export { CreateCart };
var CreateCartFail = /** @class */ (function (_super) {
    __extends(CreateCartFail, _super);
    function CreateCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_FAIL;
        return _this;
    }
    return CreateCartFail;
}(EntityFailAction));
export { CreateCartFail };
var CreateCartSuccess = /** @class */ (function (_super) {
    __extends(CreateCartSuccess, _super);
    function CreateCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_SUCCESS;
        return _this;
    }
    return CreateCartSuccess;
}(EntitySuccessAction));
export { CreateCartSuccess };
var AddEmailToCart = /** @class */ (function (_super) {
    __extends(AddEmailToCart, _super);
    function AddEmailToCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART;
        return _this;
    }
    return AddEmailToCart;
}(EntityProcessesIncrementAction));
export { AddEmailToCart };
var AddEmailToCartFail = /** @class */ (function (_super) {
    __extends(AddEmailToCartFail, _super);
    function AddEmailToCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_FAIL;
        return _this;
    }
    return AddEmailToCartFail;
}(EntityProcessesDecrementAction));
export { AddEmailToCartFail };
var AddEmailToCartSuccess = /** @class */ (function (_super) {
    __extends(AddEmailToCartSuccess, _super);
    function AddEmailToCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_SUCCESS;
        return _this;
    }
    return AddEmailToCartSuccess;
}(EntityProcessesDecrementAction));
export { AddEmailToCartSuccess };
var LoadCart = /** @class */ (function (_super) {
    __extends(LoadCart, _super);
    function LoadCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = LOAD_CART;
        return _this;
    }
    return LoadCart;
}(EntityLoadAction));
export { LoadCart };
var LoadCartFail = /** @class */ (function (_super) {
    __extends(LoadCartFail, _super);
    function LoadCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_FAIL;
        return _this;
    }
    return LoadCartFail;
}(EntityFailAction));
export { LoadCartFail };
var LoadCartSuccess = /** @class */ (function (_super) {
    __extends(LoadCartSuccess, _super);
    function LoadCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_SUCCESS;
        return _this;
    }
    return LoadCartSuccess;
}(EntitySuccessAction));
export { LoadCartSuccess };
var MergeCart = /** @class */ (function () {
    function MergeCart(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
    return MergeCart;
}());
export { MergeCart };
var MergeCartSuccess = /** @class */ (function (_super) {
    __extends(MergeCartSuccess, _super);
    function MergeCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.oldCartId) || this;
        _this.payload = payload;
        _this.type = MERGE_CART_SUCCESS;
        return _this;
    }
    return MergeCartSuccess;
}(EntityRemoveAction));
export { MergeCartSuccess };
var ResetCartDetails = /** @class */ (function () {
    function ResetCartDetails() {
        this.type = RESET_CART_DETAILS;
    }
    return ResetCartDetails;
}());
export { ResetCartDetails };
var ClearExpiredCoupons = /** @class */ (function () {
    function ClearExpiredCoupons(payload) {
        this.payload = payload;
        this.type = CLEAR_EXPIRED_COUPONS;
    }
    return ClearExpiredCoupons;
}());
export { ClearExpiredCoupons };
var ClearCart = /** @class */ (function () {
    function ClearCart() {
        this.type = CLEAR_CART;
    }
    return ClearCart;
}());
export { ClearCart };
var DeleteCart = /** @class */ (function () {
    function DeleteCart(payload) {
        this.payload = payload;
        this.type = DELETE_CART;
    }
    return DeleteCart;
}());
export { DeleteCart };
var DeleteCartFail = /** @class */ (function () {
    function DeleteCartFail(payload) {
        this.payload = payload;
        this.type = DELETE_CART_FAIL;
    }
    return DeleteCartFail;
}());
export { DeleteCartFail };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixHQUMvQixNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUM7QUFDaEQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7QUFDMUQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUM7QUFFaEUsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQzVDLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztBQUN0RCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUU1RCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUM1RCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUU1RSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUM7QUFDOUMsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsMkJBQTJCLENBQUM7QUFFOUQsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsMkJBQTJCLENBQUM7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aUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUVFLHdCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDQyxDQUFDO0lBQ3JDLHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlMb2FkQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7XG4gIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbixcbiAgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5UmVtb3ZlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9EQVRBIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVCA9ICdbQ2FydF0gQ3JlYXRlIENhcnQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX0ZBSUwgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJUID0gJ1tDYXJ0XSBMb2FkIENhcnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBMb2FkIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIExvYWQgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19DQVJUID0gJ1tDYXJ0XSBBZGQgRW1haWwgdG8gQ2FydCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlRfRkFJTCA9ICdbQ2FydF0gQWRkIEVtYWlsIHRvIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gQWRkIEVtYWlsIHRvIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUID0gJ1tDYXJ0XSBNZXJnZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIE1lcmdlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJUX0RFVEFJTFMgPSAnW0NhcnRdIFJlc2V0IENhcnQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9FWFBJUkVEX0NPVVBPTlMgPSAnW0NhcnRdIENsZWFyIEV4cGlyZWQgQ291cG9uJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUlQgPSAnW0NhcnRdIENsZWFyIENhcnQnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBUlQgPSAnW0NhcnRdIERlbGV0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCBGYWlsJztcblxuaW50ZXJmYWNlIENyZWF0ZUNhcnRQYXlsb2FkIHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIC8qKiBVc2VkIGFzIGEgdW5pcXVlIGtleSBpbiBuZ3J4IGNhcnRzIHN0b3JlICh3ZSBkb24ndCBrbm93IGNhcnRJZCBhdCB0aGF0IHRpbWUpICovXG4gIHRlbXBDYXJ0SWQ6IHN0cmluZztcbiAgZXh0cmFEYXRhPzoge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gIH07XG4gIC8qKiBBbm9ueW1vdXMgY2FydCB3aGljaCBzaG91bGQgYmUgbWVyZ2VkIHRvIG5ldyBjYXJ0ICovXG4gIG9sZENhcnRJZD86IHN0cmluZztcbiAgLyoqIENhcnQgdG8gd2hpY2ggc2hvdWxkIHdlIG1lcmdlIChub3QgcGFzc2luZyB0aGlzIHdpbGwgY3JlYXRlIG5ldyBjYXJ0KSAqL1xuICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENyZWF0ZUNhcnRQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBDcmVhdGVDYXJ0RmFpbFBheWxvYWQgZXh0ZW5kcyBDcmVhdGVDYXJ0UGF5bG9hZCB7XG4gIGVycm9yOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENyZWF0ZUNhcnRGYWlsUGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC50ZW1wQ2FydElkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ3JlYXRlQ2FydFN1Y2Nlc3NQYXlsb2FkIGV4dGVuZHMgQ3JlYXRlQ2FydFBheWxvYWQge1xuICBjYXJ0OiBDYXJ0O1xuICBjYXJ0SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3JlYXRlQ2FydFN1Y2Nlc3NQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9DYXJ0IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb0NhcnRGYWlsIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgZXJyb3I6IGFueTtcbiAgICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb0NhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBMb2FkQ2FydFBheWxvYWQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgY2FydElkOiBzdHJpbmc7XG4gIGV4dHJhRGF0YT86IHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExvYWRDYXJ0UGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBMb2FkQ2FydEZhaWxQYXlsb2FkIGV4dGVuZHMgTG9hZENhcnRQYXlsb2FkIHtcbiAgZXJyb3I6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMb2FkQ2FydEZhaWxQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuaW50ZXJmYWNlIExvYWRDYXJ0U3VjY2Vzc1BheWxvYWQgZXh0ZW5kcyBMb2FkQ2FydFBheWxvYWQge1xuICBjYXJ0OiBDYXJ0O1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExvYWRDYXJ0U3VjY2Vzc1BheWxvYWQpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTWVyZ2VDYXJ0UGF5bG9hZCB7XG4gIGNhcnRJZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbiAgZXh0cmFEYXRhPzogeyBhY3RpdmU/OiBib29sZWFuIH07XG4gIC8qKlxuICAgKiBNZXJnZUNhcnQgYWN0aW9ucyB0cmlnZ2VycyBDcmVhdGVDYXJ0IHdoaWNoIHJlcXVpcmVzIHRoaXMgcGFyYW1ldGVyLCBzbyB0aGF0J3Mgd2h5IGl0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgdGVtcENhcnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBNZXJnZUNhcnRQYXlsb2FkKSB7fVxufVxuXG5pbnRlcmZhY2UgTWVyZ2VDYXJ0U3VjY2Vzc1BheWxvYWQgZXh0ZW5kcyBNZXJnZUNhcnRQYXlsb2FkIHtcbiAgLyoqXG4gICAqIFByZXZpb3VzIGNhcnQgaWQgd2hpY2ggd2FzIG1lcmdlZCB3aXRoIG5ldy91c2VyIGNhcnQuXG4gICAqIE5lZWRlZCB0byBrbm93IHdoaWNoIG9ic29sZXRlIGVudGl0eSBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICovXG4gIG9sZENhcnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBNZXJnZUNhcnRTdWNjZXNzUGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5vbGRDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldENhcnREZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX0NBUlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJFeHBpcmVkQ291cG9ucyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9FWFBJUkVEX0NPVVBPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNhcnQge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0FSVDtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlQ2FydCB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVDYXJ0RmFpbCB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgdHlwZSBDYXJ0QWN0aW9uID1cbiAgfCBDcmVhdGVDYXJ0XG4gIHwgQ3JlYXRlQ2FydEZhaWxcbiAgfCBDcmVhdGVDYXJ0U3VjY2Vzc1xuICB8IExvYWRDYXJ0XG4gIHwgTG9hZENhcnRGYWlsXG4gIHwgTG9hZENhcnRTdWNjZXNzXG4gIHwgTWVyZ2VDYXJ0XG4gIHwgTWVyZ2VDYXJ0U3VjY2Vzc1xuICB8IFJlc2V0Q2FydERldGFpbHNcbiAgfCBBZGRFbWFpbFRvQ2FydFxuICB8IEFkZEVtYWlsVG9DYXJ0RmFpbFxuICB8IEFkZEVtYWlsVG9DYXJ0U3VjY2Vzc1xuICB8IERlbGV0ZUNhcnRcbiAgfCBEZWxldGVDYXJ0RmFpbFxuICB8IENsZWFyRXhwaXJlZENvdXBvbnNcbiAgfCBDbGVhckNhcnQ7XG4iXX0=