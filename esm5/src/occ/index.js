/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OCC_USER_ID_ANONYMOUS } from './utils/occ-constants';
export { AsmOccModule, OccAsmAdapter, CartOccModule, OccCartNormalizer, OccCartEntryAdapter, OccCartVoucherAdapter, OccCartAdapter, OccCheckoutAdapter, OccCheckoutDeliveryAdapter, OccCheckoutPaymentAdapter, CheckoutOccModule, OccOrderNormalizer, OccCmsPageAdapter, OccCmsComponentAdapter, OccCmsPageNormalizer, CmsOccModule, ProductImageNormalizer, ProductReferenceNormalizer, OccProductSearchPageNormalizer, OccProductReferencesListNormalizer, ProductNameNormalizer, OccProductReferencesAdapter, OccProductReviewsAdapter, OccProductSearchAdapter, OccProductAdapter, ProductOccModule, OccSiteAdapter, SiteContextOccModule, SiteContextInterceptor, StoreFinderOccModule, OccStoreFinderAdapter, OccAnonymousConsentTemplatesAdapter, OccUserAddressAdapter, OccUserConsentAdapter, OccUserOrderAdapter, OccUserPaymentAdapter, OccUserAdapter, UserOccModule, OccCustomerCouponAdapter, OccUserNotificationPreferenceAdapter, OccUserInterestsAdapter, OccUserInterestsNormalizer, OccReturnRequestNormalizer } from './adapters/index';
export { OccConfigLoaderModule, JavaRegExpConverter, EXTERNAL_CONFIG_TRANSFER_ID, OccConfigLoaderService, OccLoadedConfigConverter, OccSitesConfigLoader } from './config-loader/index';
export { occServerConfigFromMetaTagFactory, mediaServerConfigFromMetaTagFactory, provideConfigFromMetaTags, OCC_BASE_URL_META_TAG_NAME, OCC_BASE_URL_META_TAG_PLACEHOLDER, MEDIA_BASE_URL_META_TAG_NAME, MEDIA_BASE_URL_META_TAG_PLACEHOLDER } from './config/config-from-meta-tag-factory';
export { defaultOccConfig } from './config/default-occ-config';
export { OccConfig } from './config/occ-config';
export { occConfigValidator } from './config/occ-config-validator';
export { Occ } from './occ-models/index';
export { OccModule } from './occ.module';
export { OccEndpointsService, LoadingScopesService, OccFieldsService, OccRequestsOptimizerService } from './services/index';
export { USE_CLIENT_TOKEN, USE_CUSTOMER_SUPPORT_AGENT_TOKEN, TOKEN_REVOCATION_HEADER, InterceptorUtil } from './utils/interceptor-util';
export { OCC_USER_ID_CURRENT, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_GUEST, OCC_CART_ID_CURRENT } from './utils/occ-constants';
/**
 * @deprecated since 1.2.0
 * Use OCC_USER_ID_ANONYMOUS instead
 * @type {?}
 */
export var ANONYMOUS_USERID = OCC_USER_ID_ANONYMOUS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCx5K0JBQWMsa0JBQWtCLENBQUM7QUFDakMsZ0tBQWMsdUJBQXVCLENBQUM7QUFDdEMsb1BBQWMsdUNBQXVDLENBQUM7QUFDdEQsaUNBQWMsNkJBQTZCLENBQUM7QUFDNUMsMEJBQWMscUJBQXFCLENBQUM7QUFDcEMsbUNBQWMsK0JBQStCLENBQUM7QUFDOUMsb0JBQWMsb0JBQW9CLENBQUM7QUFDbkMsMEJBQWMsY0FBYyxDQUFDO0FBQzdCLHlHQUFjLGtCQUFrQixDQUFDO0FBQ2pDLDZHQUFjLDBCQUEwQixDQUFDO0FBQ3pDLG1HQUFjLHVCQUF1QixDQUFDOzs7Ozs7QUFLdEMsTUFBTSxLQUFPLGdCQUFnQixHQUFHLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4vdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYWRhcHRlcnMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWctbG9hZGVyL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL2NvbmZpZy1mcm9tLW1ldGEtdGFnLWZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvZGVmYXVsdC1vY2MtY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnL29jYy1jb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWcvb2NjLWNvbmZpZy12YWxpZGF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9vY2MtbW9kZWxzL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vb2NjLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzL29jYy1jb25zdGFudHMnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICogVXNlIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyBpbnN0ZWFkXG4gKi9cbmV4cG9ydCBjb25zdCBBTk9OWU1PVVNfVVNFUklEID0gT0NDX1VTRVJfSURfQU5PTllNT1VTO1xuIl19