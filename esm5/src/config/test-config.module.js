import { __decorate } from "tslib";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { InjectionToken, NgModule, PLATFORM_ID, } from '@angular/core';
import { getCookie } from './utils/get-cookie';
import { provideConfigFactory } from './config-providers';
export var TEST_CONFIG_COOKIE_NAME = new InjectionToken('TEST_CONFIG_COOKIE_NAME');
export function parseConfigJSON(config) {
    try {
        return JSON.parse(decodeURIComponent(config));
    }
    catch (_) {
        return {};
    }
}
export function configFromCookieFactory(cookieName, platform, document) {
    if (isPlatformBrowser(platform) && cookieName) {
        var config = getCookie(document.cookie, cookieName);
        return parseConfigJSON(config);
    }
    return {};
}
/**
 * Designed/intended to provide dynamic configuration for testing scenarios ONLY (e.g. e2e tests).
 *
 * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
 */
var TestConfigModule = /** @class */ (function () {
    function TestConfigModule() {
    }
    TestConfigModule_1 = TestConfigModule;
    /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     */
    TestConfigModule.forRoot = function (options) {
        return {
            ngModule: TestConfigModule_1,
            providers: [
                {
                    provide: TEST_CONFIG_COOKIE_NAME,
                    useValue: options && options.cookie,
                },
                provideConfigFactory(configFromCookieFactory, [
                    TEST_CONFIG_COOKIE_NAME,
                    PLATFORM_ID,
                    DOCUMENT,
                ]),
            ],
        };
    };
    var TestConfigModule_1;
    TestConfigModule = TestConfigModule_1 = __decorate([
        NgModule({})
    ], TestConfigModule);
    return TestConfigModule;
}());
export { TestConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy90ZXN0LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFELE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLElBQUksY0FBYyxDQUN2RCx5QkFBeUIsQ0FDMUIsQ0FBQztBQUVGLE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBYztJQUM1QyxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDL0M7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxVQUFrQixFQUNsQixRQUFhLEVBQ2IsUUFBa0I7SUFFbEIsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLEVBQUU7UUFDN0MsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEQsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFNRDs7OztHQUlHO0FBRUg7SUFBQTtJQTBCQSxDQUFDO3lCQTFCWSxnQkFBZ0I7SUFDM0I7Ozs7OztPQU1HO0lBQ0ksd0JBQU8sR0FBZCxVQUNFLE9BQWdDO1FBRWhDLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxRQUFRLEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNO2lCQUNwQztnQkFDRCxvQkFBb0IsQ0FBQyx1QkFBdUIsRUFBRTtvQkFDNUMsdUJBQXVCO29CQUN2QixXQUFXO29CQUNYLFFBQVE7aUJBQ1QsQ0FBQzthQUNIO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBekJVLGdCQUFnQjtRQUQ1QixRQUFRLENBQUMsRUFBRSxDQUFDO09BQ0EsZ0JBQWdCLENBMEI1QjtJQUFELHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdGlvblRva2VuLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi91dGlscy9nZXQtY29va2llJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdGYWN0b3J5IH0gZnJvbSAnLi9jb25maWctcHJvdmlkZXJzJztcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oXG4gICdURVNUX0NPTkZJR19DT09LSUVfTkFNRSdcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbmZpZ0pTT04oY29uZmlnOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoY29uZmlnKSk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21Db29raWVGYWN0b3J5KFxuICBjb29raWVOYW1lOiBzdHJpbmcsXG4gIHBsYXRmb3JtOiBhbnksXG4gIGRvY3VtZW50OiBEb2N1bWVudFxuKSB7XG4gIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybSkgJiYgY29va2llTmFtZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldENvb2tpZShkb2N1bWVudC5jb29raWUsIGNvb2tpZU5hbWUpO1xuICAgIHJldHVybiBwYXJzZUNvbmZpZ0pTT04oY29uZmlnKTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdENvbmZpZ01vZHVsZU9wdGlvbnMge1xuICBjb29raWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXNpZ25lZC9pbnRlbmRlZCB0byBwcm92aWRlIGR5bmFtaWMgY29uZmlndXJhdGlvbiBmb3IgdGVzdGluZyBzY2VuYXJpb3MgT05MWSAoZS5nLiBlMmUgdGVzdHMpLlxuICpcbiAqIENBVVRJT046IERPTidUIFVTRSBJVCBJTiBQUk9EVUNUSU9OISBJVCBIQVNOJ1QgQkVFTiBSRVZJRVdFRCBGT1IgU0VDVVJJVFkgSVNTVUVTLlxuICovXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgVGVzdENvbmZpZ01vZHVsZSB7XG4gIC8qKlxuICAgKiBJbmplY3RzIEpTT04gY29uZmlnIGZyb20gdGhlIGNvb2tpZSBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICpcbiAgICogQmUgYXdhcmUgb2YgdGhlIGNvb2tpZSBsaW1pdGF0aW9ucyAoNDA5NiBieXRlcykuXG4gICAqXG4gICAqIENBVVRJT046IERPTidUIFVTRSBJVCBJTiBQUk9EVUNUSU9OISBJVCBIQVNOJ1QgQkVFTiBSRVZJRVdFRCBGT1IgU0VDVVJJVFkgSVNTVUVTLlxuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgb3B0aW9uczogVGVzdENvbmZpZ01vZHVsZU9wdGlvbnNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZXN0Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUZXN0Q29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBURVNUX0NPTkZJR19DT09LSUVfTkFNRSxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucyAmJiBvcHRpb25zLmNvb2tpZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoY29uZmlnRnJvbUNvb2tpZUZhY3RvcnksIFtcbiAgICAgICAgICBURVNUX0NPTkZJR19DT09LSUVfTkFNRSxcbiAgICAgICAgICBQTEFURk9STV9JRCxcbiAgICAgICAgICBET0NVTUVOVCxcbiAgICAgICAgXSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==