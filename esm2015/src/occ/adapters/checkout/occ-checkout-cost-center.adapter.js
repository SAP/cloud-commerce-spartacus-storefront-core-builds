import { __decorate } from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
let OccCheckoutCostCenterAdapter = class OccCheckoutCostCenterAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    setCostCenter(userId, cartId, costCenterId) {
        let httpParams = new HttpParams().set('costCenterId', costCenterId);
        /* tslint:disable:max-line-length */
        httpParams = httpParams.set('fields', 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user');
        // TODO(#8877): Should we improve configurable endpoints for this use case?
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/costcenter', {}, {
            params: httpParams,
        })
            .pipe(this.converter.pipeable(CART_NORMALIZER));
    }
    getCartEndpoint(userId) {
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
};
OccCheckoutCostCenterAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccCheckoutCostCenterAdapter = __decorate([
    Injectable()
], OccCheckoutCostCenterAdapter);
export { OccCheckoutCostCenterAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC1jb3N0LWNlbnRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBQ3ZDLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQztJQUVKLGFBQWEsQ0FDWCxNQUFjLEVBQ2QsTUFBYyxFQUNkLFlBQW9CO1FBRXBCLElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNwRSxvQ0FBb0M7UUFDcEMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQ3pCLFFBQVEsRUFDUixxZ0JBQXFnQixDQUN0Z0IsQ0FBQztRQUNGLDJFQUEyRTtRQUUzRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLGFBQWEsRUFDckQsRUFBRSxFQUNGO1lBQ0UsTUFBTSxFQUFFLFVBQVU7U0FDbkIsQ0FDRjthQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFUyxlQUFlLENBQUMsTUFBYztRQUN0QyxNQUFNLFlBQVksR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBOztZQWpDbUIsVUFBVTtZQUNGLG1CQUFtQjtZQUN0QixnQkFBZ0I7O0FBSjVCLDRCQUE0QjtJQUR4QyxVQUFVLEVBQUU7R0FDQSw0QkFBNEIsQ0FtQ3hDO1NBbkNZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDQVJUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL2NoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDaGVja291dENvc3RDZW50ZXJBZGFwdGVyIGltcGxlbWVudHMgQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgc2V0Q29zdENlbnRlcihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBjb3N0Q2VudGVySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdjb3N0Q2VudGVySWQnLCBjb3N0Q2VudGVySWQpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldChcbiAgICAgICdmaWVsZHMnLFxuICAgICAgJ0RFRkFVTFQscG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMsYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zLHBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyxhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLGVudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCksc3RvY2soRlVMTCkpLGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSx2YWx1ZSksdXBkYXRlYWJsZSksdG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSksdG90YWxJdGVtcyx0b3RhbFByaWNlV2l0aFRheChmb3JtYXR0ZWRWYWx1ZSksdG90YWxEaXNjb3VudHModmFsdWUsZm9ybWF0dGVkVmFsdWUpLHN1YlRvdGFsKGZvcm1hdHRlZFZhbHVlKSxkZWxpdmVyeUl0ZW1zUXVhbnRpdHksZGVsaXZlcnlDb3N0KGZvcm1hdHRlZFZhbHVlKSx0b3RhbFRheChmb3JtYXR0ZWRWYWx1ZSwgdmFsdWUpLHBpY2t1cEl0ZW1zUXVhbnRpdHksbmV0LGFwcGxpZWRWb3VjaGVycyxwcm9kdWN0RGlzY291bnRzKGZvcm1hdHRlZFZhbHVlKSx1c2VyJ1xuICAgICk7XG4gICAgLy8gVE9ETygjODg3Nyk6IFNob3VsZCB3ZSBpbXByb3ZlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMgZm9yIHRoaXMgdXNlIGNhc2U/XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KFxuICAgICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9jb3N0Y2VudGVyJyxcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IGh0dHBQYXJhbXMsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cbn1cbiJdfQ==