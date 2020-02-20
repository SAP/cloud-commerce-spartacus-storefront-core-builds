import { __extends } from "tslib";
import { EntityFailAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_FEATURE } from '../multi-cart-state';
export var CREATE_WISH_LIST = '[Wish List] Create Wish List';
export var CREATE_WISH_LIST_FAIL = '[Wish List] Create Wish List Fail';
export var CREATE_WISH_LIST_SUCCESS = '[Wish List] Create Wish List Success';
export var LOAD_WISH_LIST = '[Wish List] Load Wish List';
export var LOAD_WISH_LIST_SUCCESS = '[Wish List] Load Wish List Success';
export var RESET_WISH_LIST_DETAILS = '[Wish List] Reset Wish List';
var CreateWishList = /** @class */ (function () {
    function CreateWishList(payload) {
        this.payload = payload;
        this.type = CREATE_WISH_LIST;
    }
    return CreateWishList;
}());
export { CreateWishList };
var CreateWishListSuccess = /** @class */ (function (_super) {
    __extends(CreateWishListSuccess, _super);
    function CreateWishListSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = CREATE_WISH_LIST_SUCCESS;
        return _this;
    }
    return CreateWishListSuccess;
}(EntitySuccessAction));
export { CreateWishListSuccess };
var CreateWishListFail = /** @class */ (function (_super) {
    __extends(CreateWishListFail, _super);
    function CreateWishListFail(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = CREATE_WISH_LIST_FAIL;
        return _this;
    }
    return CreateWishListFail;
}(EntityFailAction));
export { CreateWishListFail };
var LoadWishList = /** @class */ (function () {
    function LoadWishList(payload) {
        this.payload = payload;
        this.type = LOAD_WISH_LIST;
    }
    return LoadWishList;
}());
export { LoadWishList };
var LoadWishListSuccess = /** @class */ (function (_super) {
    __extends(LoadWishListSuccess, _super);
    function LoadWishListSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_FEATURE, getCartIdByUserId(payload.cart, payload.userId)) || this;
        _this.payload = payload;
        _this.type = LOAD_WISH_LIST_SUCCESS;
        return _this;
    }
    return LoadWishListSuccess;
}(EntitySuccessAction));
export { LoadWishListSuccess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV6RCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyw4QkFBOEIsQ0FBQztBQUMvRCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBRyxtQ0FBbUMsQ0FBQztBQUN6RSxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FBRyxzQ0FBc0MsQ0FBQztBQUUvRSxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsNEJBQTRCLENBQUM7QUFDM0QsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQUcsb0NBQW9DLENBQUM7QUFFM0UsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsNkJBQTZCLENBQUM7QUFFckU7SUFFRSx3QkFDUyxPQUlOO1FBSk0sWUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQU85QixDQUFDO0lBQ04scUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7QUFFRDtJQUEyQyx5Q0FBbUI7SUFFNUQsK0JBQW1CLE9BQXVDO1FBQTFELFlBQ0Usa0JBQU0sa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsU0FDM0U7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBZ0M7UUFEakQsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsbUJBQW1CLEdBSzdEOztBQUVEO0lBQXdDLHNDQUFnQjtJQUV0RCw0QkFBbUIsT0FBd0M7UUFBM0QsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FDekQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBaUM7UUFEbEQsVUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUd0QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0MsZ0JBQWdCLEdBS3ZEOztBQUVEO0lBRUUsc0JBQW1CLE9BQStDO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQXdDO1FBRHpELFNBQUksR0FBRyxjQUFjLENBQUM7SUFDc0MsQ0FBQztJQUN4RSxtQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQXlDLHVDQUFtQjtJQUUxRCw2QkFBbUIsT0FBd0Q7UUFBM0UsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUMzRTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFpRDtRQURsRSxVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBR3ZDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxtQkFBbUIsR0FLM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge1xuICBFbnRpdHlGYWlsQWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9GRUFUVVJFIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUID0gJ1tXaXNoIExpc3RdIENyZWF0ZSBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfRkFJTCA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUyA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9XSVNIX0xJU1QgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QnO1xuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUX1NVQ0NFU1MgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUyA9ICdbV2lzaCBMaXN0XSBSZXNldCBXaXNoIExpc3QnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfRkVBVFVSRSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IGVycm9yPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFdpc2hMaXN0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfV0lTSF9MSVNUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY3VzdG9tZXJJZDogc3RyaW5nIH0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkV2lzaExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0ZFQVRVUkUsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXaXNoTGlzdEFjdGlvbnMgPVxuICB8IENyZWF0ZVdpc2hMaXN0XG4gIHwgQ3JlYXRlV2lzaExpc3RTdWNjZXNzXG4gIHwgQ3JlYXRlV2lzaExpc3RGYWlsXG4gIHwgTG9hZFdpc2hMaXN0XG4gIHwgTG9hZFdpc2hMaXN0U3VjY2VzcztcbiJdfQ==