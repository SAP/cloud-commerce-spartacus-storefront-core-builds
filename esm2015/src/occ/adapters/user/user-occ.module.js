import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from '../../../anonymous-consents/connectors/anonymous-consent-templates.adapter';
import { ANONYMOUS_CONSENT_NORMALIZER } from '../../../anonymous-consents/connectors/converters';
import { provideDefaultConfig } from '../../../config/config-providers';
import { ADDRESS_LIST_NORMALIZER } from '../../../user/connectors/address/converters';
import { UserAddressAdapter } from '../../../user/connectors/address/user-address.adapter';
import { UserConsentAdapter } from '../../../user/connectors/consent/user-consent.adapter';
import { UserCostCenterAdapter } from '../../../user/connectors/cost-center/user-cost-center.adapter';
import { CustomerCouponAdapter } from '../../../user/connectors/customer-coupon/customer-coupon.adapter';
import { PRODUCT_INTERESTS_NORMALIZER } from '../../../user/connectors/interests/converters';
import { UserInterestsAdapter } from '../../../user/connectors/interests/user-interests.adapter';
import { UserNotificationPreferenceAdapter } from '../../../user/connectors/notification-preference/user-notification-preference.adapter';
import { ORDER_RETURN_REQUEST_NORMALIZER } from '../../../user/connectors/order/converters';
import { UserOrderAdapter } from '../../../user/connectors/order/user-order.adapter';
import { UserPaymentAdapter } from '../../../user/connectors/payment/user-payment.adapter';
import { UserReplenishmentOrderAdapter } from '../../../user/connectors/replenishment-order';
import { UserAdapter } from '../../../user/connectors/user/user.adapter';
import { OccCustomerCouponAdapter } from '../user/occ-customer-coupon.adapter';
import { AnonymousConsentNormalizer } from './converters/anonymous-consents-normalizer';
import { OccAddressListNormalizer } from './converters/occ-address-list-normalizer';
import { OccReturnRequestNormalizer } from './converters/occ-return-request-normalizer';
import { OccUserInterestsNormalizer } from './converters/occ-user-interests-normalizer';
import { defaultOccUserConfig } from './default-occ-user-config';
import { OccAnonymousConsentTemplatesAdapter } from './occ-anonymous-consent-templates.adapter';
import { OccUserAddressAdapter } from './occ-user-address.adapter';
import { OccUserConsentAdapter } from './occ-user-consent.adapter';
import { OccUserCostCenterAdapter } from './occ-user-cost-centers.adapter';
import { OccUserInterestsAdapter } from './occ-user-interests.adapter';
import { OccUserNotificationPreferenceAdapter } from './occ-user-notification-preference.adapter';
import { OccUserOrderAdapter } from './occ-user-order.adapter';
import { OccUserPaymentAdapter } from './occ-user-payment.adapter';
import { OccUserReplenishmentOrderAdapter } from './occ-user-replenishment-order.adapter';
import { OccUserAdapter } from './occ-user.adapter';
export class UserOccModule {
}
UserOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    provideDefaultConfig(defaultOccUserConfig),
                    { provide: UserAdapter, useClass: OccUserAdapter },
                    { provide: UserAddressAdapter, useClass: OccUserAddressAdapter },
                    { provide: UserConsentAdapter, useClass: OccUserConsentAdapter },
                    {
                        provide: AnonymousConsentTemplatesAdapter,
                        useClass: OccAnonymousConsentTemplatesAdapter,
                    },
                    {
                        provide: UserPaymentAdapter,
                        useClass: OccUserPaymentAdapter,
                    },
                    { provide: UserOrderAdapter, useClass: OccUserOrderAdapter },
                    { provide: CustomerCouponAdapter, useClass: OccCustomerCouponAdapter },
                    {
                        provide: UserNotificationPreferenceAdapter,
                        useClass: OccUserNotificationPreferenceAdapter,
                    },
                    { provide: UserInterestsAdapter, useClass: OccUserInterestsAdapter },
                    { provide: UserCostCenterAdapter, useClass: OccUserCostCenterAdapter },
                    {
                        provide: PRODUCT_INTERESTS_NORMALIZER,
                        useExisting: OccUserInterestsNormalizer,
                        multi: true,
                    },
                    {
                        provide: ORDER_RETURN_REQUEST_NORMALIZER,
                        useExisting: OccReturnRequestNormalizer,
                        multi: true,
                    },
                    {
                        provide: ANONYMOUS_CONSENT_NORMALIZER,
                        useExisting: AnonymousConsentNormalizer,
                        multi: true,
                    },
                    {
                        provide: ADDRESS_LIST_NORMALIZER,
                        useExisting: OccAddressListNormalizer,
                        multi: true,
                    },
                    {
                        provide: UserReplenishmentOrderAdapter,
                        useClass: OccUserReplenishmentOrderAdapter,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL3VzZXIvdXNlci1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQzFJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxr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QkFBdUI7d0JBQ2hDLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSw2QkFBNkI7d0JBQ3RDLFFBQVEsRUFBRSxnQ0FBZ0M7cUJBQzNDO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Fub255bW91cy1jb25zZW50cy9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcbmltcG9ydCB7IEFOT05ZTU9VU19DT05TRU5UX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9hbm9ueW1vdXMtY29uc2VudHMvY29ubmVjdG9ycy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgQUREUkVTU19MSVNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb3N0LWNlbnRlci91c2VyLWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBQUk9EVUNUX0lOVEVSRVNUU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2ludGVyZXN0cy91c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJPcmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvb3JkZXIvdXNlci1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJQYXltZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9wYXltZW50L3VzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IFVzZXJSZXBsZW5pc2htZW50T3JkZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3JlcGxlbmlzaG1lbnQtb3JkZXInO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vdXNlci9vY2MtY3VzdG9tZXItY291cG9uLmFkYXB0ZXInO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudE5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvYW5vbnltb3VzLWNvbnNlbnRzLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgT2NjQWRkcmVzc0xpc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1hZGRyZXNzLWxpc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtcmV0dXJuLXJlcXVlc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtdXNlci1pbnRlcmVzdHMtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjVXNlckNvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2MtdXNlci1jb25maWcnO1xuaW1wb3J0IHsgT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuL29jYy1hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyQ29zdENlbnRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLWNvc3QtY2VudGVycy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci1pbnRlcmVzdHMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItb3JkZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy11c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NVc2VyUmVwbGVuaXNobWVudE9yZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXVzZXItcmVwbGVuaXNobWVudC1vcmRlci5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1VzZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtdXNlci5hZGFwdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NVc2VyQ29uZmlnKSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckFkYXB0ZXIgfSxcbiAgICB7IHByb3ZpZGU6IFVzZXJBZGRyZXNzQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1VzZXJBZGRyZXNzQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckNvbnNlbnRBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckNvbnNlbnRBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyUGF5bWVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjVXNlclBheW1lbnRBZGFwdGVyLFxuICAgIH0sXG4gICAgeyBwcm92aWRlOiBVc2VyT3JkZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlck9yZGVyQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogQ3VzdG9tZXJDb3Vwb25BZGFwdGVyLCB1c2VDbGFzczogT2NjQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlcixcbiAgICB9LFxuICAgIHsgcHJvdmlkZTogVXNlckludGVyZXN0c0FkYXB0ZXIsIHVzZUNsYXNzOiBPY2NVc2VySW50ZXJlc3RzQWRhcHRlciB9LFxuICAgIHsgcHJvdmlkZTogVXNlckNvc3RDZW50ZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjVXNlckNvc3RDZW50ZXJBZGFwdGVyIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NVc2VySW50ZXJlc3RzTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NSZXR1cm5SZXF1ZXN0Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQU5PTllNT1VTX0NPTlNFTlRfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBBbm9ueW1vdXNDb25zZW50Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQUREUkVTU19MSVNUX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjQWRkcmVzc0xpc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBVc2VyUmVwbGVuaXNobWVudE9yZGVyQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NVc2VyUmVwbGVuaXNobWVudE9yZGVyQWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyT2NjTW9kdWxlIHt9XG4iXX0=