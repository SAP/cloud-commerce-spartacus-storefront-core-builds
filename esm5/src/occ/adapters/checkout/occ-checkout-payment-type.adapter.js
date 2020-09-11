import { __decorate } from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { PAYMENT_TYPE_NORMALIZER } from '../../../checkout/connectors/payment-type/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var ENDPOINT_PAYMENT_TYPES = 'paymenttypes';
var OccCheckoutPaymentTypeAdapter = /** @class */ (function () {
    function OccCheckoutPaymentTypeAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    OccCheckoutPaymentTypeAdapter.prototype.loadPaymentTypes = function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(ENDPOINT_PAYMENT_TYPES))
            .pipe(map(function (paymentTypeList) { return paymentTypeList.paymentTypes; }), this.converter.pipeableMany(PAYMENT_TYPE_NORMALIZER));
    };
    OccCheckoutPaymentTypeAdapter.prototype.setPaymentType = function (userId, cartId, paymentType, purchaseOrderNumber) {
        var httpParams = new HttpParams().set('paymentType', paymentType);
        if (purchaseOrderNumber !== undefined) {
            httpParams = httpParams.set('purchaseOrderNumber', purchaseOrderNumber);
        }
        /* tslint:disable:max-line-length */
        httpParams = httpParams.set('fields', 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user');
        // TODO(#8877): Should we improve configurable endpoints for this use case?
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/paymenttype', {}, {
            params: httpParams,
        })
            .pipe(this.converter.pipeable(CART_NORMALIZER));
    };
    OccCheckoutPaymentTypeAdapter.prototype.getCartEndpoint = function (userId) {
        var cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    };
    OccCheckoutPaymentTypeAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccCheckoutPaymentTypeAdapter = __decorate([
        Injectable()
    ], OccCheckoutPaymentTypeAdapter);
    return OccCheckoutPaymentTypeAdapter;
}());
export { OccCheckoutPaymentTypeAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LXBheW1lbnQtdHlwZS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9jaGVja291dC9vY2MtY2hlY2tvdXQtcGF5bWVudC10eXBlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRy9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLElBQU0sc0JBQXNCLEdBQUcsY0FBYyxDQUFDO0FBRzlDO0lBQ0UsdUNBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQztJQUVKLHdEQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FDdEQ7YUFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsZUFBZSxJQUFLLE9BQUEsZUFBZSxDQUFDLFlBQVksRUFBNUIsQ0FBNEIsQ0FBQyxFQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxDQUNyRCxDQUFDO0lBQ04sQ0FBQztJQUVELHNEQUFjLEdBQWQsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLG1CQUE0QjtRQUU1QixJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEUsSUFBSSxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7WUFDckMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUN6RTtRQUNELG9DQUFvQztRQUNwQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDekIsUUFBUSxFQUNSLHFnQkFBcWdCLENBQ3RnQixDQUFDO1FBQ0YsMkVBQTJFO1FBRTNFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsY0FBYyxFQUN0RCxFQUFFLEVBQ0Y7WUFDRSxNQUFNLEVBQUUsVUFBVTtTQUNuQixDQUNGO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVTLHVEQUFlLEdBQXpCLFVBQTBCLE1BQWM7UUFDdEMsSUFBTSxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkEvQ2lCLFVBQVU7Z0JBQ0YsbUJBQW1CO2dCQUN0QixnQkFBZ0I7O0lBSjVCLDZCQUE2QjtRQUR6QyxVQUFVLEVBQUU7T0FDQSw2QkFBNkIsQ0FrRHpDO0lBQUQsb0NBQUM7Q0FBQSxBQWxERCxJQWtEQztTQWxEWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBQQVlNRU5UX1RZUEVfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC10eXBlL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUGF5bWVudFR5cGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydCwgUGF5bWVudFR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IEVORFBPSU5UX1BBWU1FTlRfVFlQRVMgPSAncGF5bWVudHR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NoZWNrb3V0UGF5bWVudFR5cGVBZGFwdGVyIGltcGxlbWVudHMgUGF5bWVudFR5cGVBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkUGF5bWVudFR5cGVzKCk6IE9ic2VydmFibGU8UGF5bWVudFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlBheW1lbnRUeXBlTGlzdD4oXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEVORFBPSU5UX1BBWU1FTlRfVFlQRVMpXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChwYXltZW50VHlwZUxpc3QpID0+IHBheW1lbnRUeXBlTGlzdC5wYXltZW50VHlwZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUEFZTUVOVF9UWVBFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgc2V0UGF5bWVudFR5cGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudFR5cGU6IHN0cmluZyxcbiAgICBwdXJjaGFzZU9yZGVyTnVtYmVyPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGxldCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3BheW1lbnRUeXBlJywgcGF5bWVudFR5cGUpO1xuICAgIGlmIChwdXJjaGFzZU9yZGVyTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLnNldCgncHVyY2hhc2VPcmRlck51bWJlcicsIHB1cmNoYXNlT3JkZXJOdW1iZXIpO1xuICAgIH1cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5zZXQoXG4gICAgICAnZmllbGRzJyxcbiAgICAgICdERUZBVUxULHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyxwb3RlbnRpYWxPcmRlclByb21vdGlvbnMsYXBwbGllZE9yZGVyUHJvbW90aW9ucyxlbnRyaWVzKHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHByb2R1Y3QoaW1hZ2VzKEZVTEwpLHN0b2NrKEZVTEwpKSxiYXNlUHJpY2UoZm9ybWF0dGVkVmFsdWUsdmFsdWUpLHVwZGF0ZWFibGUpLHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHRvdGFsSXRlbXMsdG90YWxQcmljZVdpdGhUYXgoZm9ybWF0dGVkVmFsdWUpLHRvdGFsRGlzY291bnRzKHZhbHVlLGZvcm1hdHRlZFZhbHVlKSxzdWJUb3RhbChmb3JtYXR0ZWRWYWx1ZSksZGVsaXZlcnlJdGVtc1F1YW50aXR5LGRlbGl2ZXJ5Q29zdChmb3JtYXR0ZWRWYWx1ZSksdG90YWxUYXgoZm9ybWF0dGVkVmFsdWUsIHZhbHVlKSxwaWNrdXBJdGVtc1F1YW50aXR5LG5ldCxhcHBsaWVkVm91Y2hlcnMscHJvZHVjdERpc2NvdW50cyhmb3JtYXR0ZWRWYWx1ZSksdXNlcidcbiAgICApO1xuICAgIC8vIFRPRE8oIzg4NzcpOiBTaG91bGQgd2UgaW1wcm92ZSBjb25maWd1cmFibGUgZW5kcG9pbnRzIGZvciB0aGlzIHVzZSBjYXNlP1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvcGF5bWVudHR5cGUnLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogaHR0cFBhcmFtcyxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ0FSVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjYXJ0RW5kcG9pbnQgPSAndXNlcnMvJyArIHVzZXJJZCArICcvY2FydHMvJztcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoY2FydEVuZHBvaW50KTtcbiAgfVxufVxuIl19