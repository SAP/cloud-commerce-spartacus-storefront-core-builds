import { StateUtils } from '../../../state/utils/index';
import { COMPONENT_ENTITY } from '../cms-state';
export const LOAD_CMS_COMPONENT = '[Cms] Load Component';
export const LOAD_CMS_COMPONENT_FAIL = '[Cms] Load Component Fail';
export const LOAD_CMS_COMPONENT_SUCCESS = '[Cms] Load Component Success';
export const CMS_GET_COMPONENT_FROM_PAGE = '[Cms] Get Component from Page';
export class LoadCmsComponent extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid);
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT;
    }
}
export class LoadCmsComponentFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid, payload.error);
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT_FAIL;
    }
}
export class LoadCmsComponentSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, payload.uid || payload.component.uid || '');
        this.payload = payload;
        this.type = LOAD_CMS_COMPONENT_SUCCESS;
    }
}
export class CmsGetComponentFromPage extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(COMPONENT_ENTITY, [].concat(payload).map((cmp) => cmp.component.uid));
        this.payload = payload;
        this.type = CMS_GET_COMPONENT_FROM_PAGE;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVoRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQztBQUN6RCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRywyQkFBMkIsQ0FBQztBQUNuRSxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyw4QkFBOEIsQ0FBQztBQUN6RSxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRywrQkFBK0IsQ0FBQztBQUUzRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUUvRCxZQUNTLE9BR047UUFFRCxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBTDlCLFlBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFRbkMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFbkUsWUFDUyxPQUErRDtRQUV0RSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGN0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0Q7UUFGL0QsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBS3hDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx1QkFFWCxTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFdEMsWUFDUyxPQUlOO1FBRUQsS0FBSyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFON0QsWUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQVMzQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sdUJBRVgsU0FBUSxVQUFVLENBQUMsbUJBQW1CO0lBRXRDLFlBQ1MsT0FFeUM7UUFFaEQsS0FBSyxDQUNILGdCQUFnQixFQUNoQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FDbkQsQ0FBQztRQVBLLFlBQU8sR0FBUCxPQUFPLENBRWtDO1FBSnpDLFNBQUksR0FBRywyQkFBMkIsQ0FBQztJQVU1QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDT01QT05FTlRfRU5USVRZIH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ01TX0NPTVBPTkVOVCA9ICdbQ21zXSBMb2FkIENvbXBvbmVudCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUwgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1MgPSAnW0Ntc10gTG9hZCBDb21wb25lbnQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQ01TX0dFVF9DT01QT05FTlRfRlJPTV9QQUdFID0gJ1tDbXNdIEdldCBDb21wb25lbnQgZnJvbSBQYWdlJztcblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnQgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdWlkOiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbXNDb21wb25lbnRGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ01TX0NPTVBPTkVOVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1aWQ6IHN0cmluZzsgZXJyb3I/OiBhbnk7IHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCB9XG4gICkge1xuICAgIHN1cGVyKENPTVBPTkVOVF9FTlRJVFksIHBheWxvYWQudWlkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8XG4gIFQgZXh0ZW5kcyBDbXNDb21wb25lbnRcbj4gZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBjb21wb25lbnQ6IFQ7XG4gICAgICB1aWQ/OiBzdHJpbmc7XG4gICAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQ7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT01QT05FTlRfRU5USVRZLCBwYXlsb2FkLnVpZCB8fCBwYXlsb2FkLmNvbXBvbmVudC51aWQgfHwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbXNHZXRDb21wb25lbnRGcm9tUGFnZTxcbiAgVCBleHRlbmRzIENtc0NvbXBvbmVudFxuPiBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTVNfR0VUX0NPTVBPTkVOVF9GUk9NX1BBR0U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOlxuICAgICAgfCB7IGNvbXBvbmVudDogVDsgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0IH1cbiAgICAgIHwgeyBjb21wb25lbnQ6IFQ7IHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCB9W11cbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBDT01QT05FTlRfRU5USVRZLFxuICAgICAgW10uY29uY2F0KHBheWxvYWQpLm1hcCgoY21wKSA9PiBjbXAuY29tcG9uZW50LnVpZClcbiAgICApO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ21zQ29tcG9uZW50QWN0aW9uPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+ID1cbiAgfCBMb2FkQ21zQ29tcG9uZW50XG4gIHwgTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgfCBMb2FkQ21zQ29tcG9uZW50U3VjY2VzczxUPlxuICB8IENtc0dldENvbXBvbmVudEZyb21QYWdlPFQ+O1xuIl19