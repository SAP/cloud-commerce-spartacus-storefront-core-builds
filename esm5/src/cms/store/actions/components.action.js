import { __extends } from "tslib";
import { StateUtils } from '../../../state/utils/index';
import { COMPONENT_ENTITY } from '../cms-state';
export var LOAD_CMS_COMPONENT = '[Cms] Load Component';
export var LOAD_CMS_COMPONENT_FAIL = '[Cms] Load Component Fail';
export var LOAD_CMS_COMPONENT_SUCCESS = '[Cms] Load Component Success';
export var CMS_GET_COMPONENT_FROM_PAGE = '[Cms] Get Component from Page';
var LoadCmsComponent = /** @class */ (function (_super) {
    __extends(LoadCmsComponent, _super);
    function LoadCmsComponent(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_COMPONENT;
        return _this;
    }
    return LoadCmsComponent;
}(StateUtils.EntityLoadAction));
export { LoadCmsComponent };
var LoadCmsComponentFail = /** @class */ (function (_super) {
    __extends(LoadCmsComponentFail, _super);
    function LoadCmsComponentFail(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid, payload.error) || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_COMPONENT_FAIL;
        return _this;
    }
    return LoadCmsComponentFail;
}(StateUtils.EntityFailAction));
export { LoadCmsComponentFail };
var LoadCmsComponentSuccess = /** @class */ (function (_super) {
    __extends(LoadCmsComponentSuccess, _super);
    function LoadCmsComponentSuccess(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, payload.uid || payload.component.uid || '') || this;
        _this.payload = payload;
        _this.type = LOAD_CMS_COMPONENT_SUCCESS;
        return _this;
    }
    return LoadCmsComponentSuccess;
}(StateUtils.EntitySuccessAction));
export { LoadCmsComponentSuccess };
var CmsGetComponentFromPage = /** @class */ (function (_super) {
    __extends(CmsGetComponentFromPage, _super);
    function CmsGetComponentFromPage(payload) {
        var _this = _super.call(this, COMPONENT_ENTITY, [].concat(payload).map(function (cmp) { return cmp.component.uid; })) || this;
        _this.payload = payload;
        _this.type = CMS_GET_COMPONENT_FROM_PAGE;
        return _this;
    }
    return CmsGetComponentFromPage;
}(StateUtils.EntitySuccessAction));
export { CmsGetComponentFromPage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFaEQsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7QUFDekQsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsMkJBQTJCLENBQUM7QUFDbkUsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUcsOEJBQThCLENBQUM7QUFDekUsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQUcsK0JBQStCLENBQUM7QUFFM0U7SUFBc0Msb0NBQTJCO0lBRS9ELDBCQUNTLE9BR047UUFKSCxZQU1FLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FDckM7UUFOUSxhQUFPLEdBQVAsT0FBTyxDQUdiO1FBTE0sVUFBSSxHQUFHLGtCQUFrQixDQUFDOztJQVFuQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBc0MsVUFBVSxDQUFDLGdCQUFnQixHQVVoRTs7QUFFRDtJQUEwQyx3Q0FBMkI7SUFFbkUsOEJBQ1MsT0FBK0Q7UUFEeEUsWUFHRSxrQkFBTSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FDcEQ7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUF3RDtRQUYvRCxVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBS3hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFQRCxDQUEwQyxVQUFVLENBQUMsZ0JBQWdCLEdBT3BFOztBQUVEO0lBRVUsMkNBQThCO0lBRXRDLGlDQUNTLE9BSU47UUFMSCxZQU9FLGtCQUFNLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQ3BFO1FBUFEsYUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFVBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFTM0MsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQWJELENBRVUsVUFBVSxDQUFDLG1CQUFtQixHQVd2Qzs7QUFFRDtJQUVVLDJDQUE4QjtJQUV0QyxpQ0FDUyxPQUV5QztRQUhsRCxZQUtFLGtCQUNFLGdCQUFnQixFQUNoQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFqQixDQUFpQixDQUFDLENBQ25ELFNBQ0Y7UUFSUSxhQUFPLEdBQVAsT0FBTyxDQUVrQztRQUp6QyxVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBVTVDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFkRCxDQUVVLFVBQVUsQ0FBQyxtQkFBbUIsR0FZdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDT01QT05FTlRfRU5USVRZIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUwgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ01TX0dFVF9DT01QT05FTlRfRlJPTV9QQUdFID0gJ1tDbXNdIEdldCBDb21wb25lbnQgZnJvbSBQYWdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnQgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdWlkOiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1aWQ6IHN0cmluZzsgZXJyb3I/OiBhbnk7IHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCB9XG4gICkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQudWlkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBjb21wb25lbnQ6IFQ7XG4gICAgICB1aWQ/OiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCB8fCBwYXlsb2FkLmNvbXBvbmVudC51aWQgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNHZXRDb21wb25lbnRGcm9tUGFnZTxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTVNfR0VUX0NPTVBPTkVOVF9GUk9NX1BBR0U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOlxuICAgICAgfCB7IGNvbXBvbmVudDogVDsgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0IH1cbiAgICAgIHwgeyBjb21wb25lbnQ6IFQ7IHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCB9W11cbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBDT01QT05FTlRfRU5USVRZLFxuICAgICAgW10uY29uY2F0KHBheWxvYWQpLm1hcCgoY21wKSA9PiBjbXAuY29tcG9uZW50LnVpZClcbiAgICApO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ21zQ29tcG9uZW50XG4gIHwgTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ21zQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IENtc0dldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19