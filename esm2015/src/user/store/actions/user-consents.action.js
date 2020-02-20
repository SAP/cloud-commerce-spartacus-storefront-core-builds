import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { StateEntityLoaderActions, StateLoaderActions, } from '../../../state/utils/index';
import { GIVE_CONSENT_PROCESS_ID, USER_CONSENTS, WITHDRAW_CONSENT_PROCESS_ID, } from '../user-state';
export const LOAD_USER_CONSENTS = '[User] Load User Consents';
export const LOAD_USER_CONSENTS_SUCCESS = '[User] Load User Consents Success';
export const LOAD_USER_CONSENTS_FAIL = '[User] Load User Consents Fail';
export const RESET_LOAD_USER_CONSENTS = '[User] Reset Load User Consents';
export const GIVE_USER_CONSENT = '[User] Give User Consent';
export const GIVE_USER_CONSENT_FAIL = '[User] Give User Consent Fail';
export const GIVE_USER_CONSENT_SUCCESS = '[User] Give User Consent Success';
export const RESET_GIVE_USER_CONSENT_PROCESS = '[User] Reset Give User Consent Process';
export const TRANSFER_ANONYMOUS_CONSENT = '[User] Transfer Anonymous Consent';
export const WITHDRAW_USER_CONSENT = '[User] Withdraw User Consent';
export const WITHDRAW_USER_CONSENT_FAIL = '[User] Withdraw User Consent Fail';
export const WITHDRAW_USER_CONSENT_SUCCESS = '[User] Withdraw User Consent Success';
export const RESET_WITHDRAW_USER_CONSENT_PROCESS = '[User] Reset Withdraw User Consent Process';
export class LoadUserConsents extends StateLoaderActions.LoaderLoadAction {
    constructor(payload) {
        super(USER_CONSENTS);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS;
    }
}
export class LoadUserConsentsFail extends StateLoaderActions.LoaderFailAction {
    constructor(payload) {
        super(USER_CONSENTS, payload);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS_FAIL;
    }
}
export class LoadUserConsentsSuccess extends StateLoaderActions.LoaderSuccessAction {
    constructor(payload) {
        super(USER_CONSENTS);
        this.payload = payload;
        this.type = LOAD_USER_CONSENTS_SUCCESS;
    }
}
export class ResetLoadUserConsents extends StateLoaderActions.LoaderResetAction {
    constructor() {
        super(USER_CONSENTS);
        this.type = RESET_LOAD_USER_CONSENTS;
    }
}
export class GiveUserConsent extends StateEntityLoaderActions.EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
        this.payload = payload;
        this.type = GIVE_USER_CONSENT;
    }
}
export class GiveUserConsentFail extends StateEntityLoaderActions.EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID, payload);
        this.type = GIVE_USER_CONSENT_FAIL;
    }
}
export class GiveUserConsentSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    constructor(consentTemplate) {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
        this.consentTemplate = consentTemplate;
        this.type = GIVE_USER_CONSENT_SUCCESS;
    }
}
export class ResetGiveUserConsentProcess extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, GIVE_CONSENT_PROCESS_ID);
        this.type = RESET_GIVE_USER_CONSENT_PROCESS;
    }
}
export class TransferAnonymousConsent {
    constructor(payload) {
        this.payload = payload;
        this.type = TRANSFER_ANONYMOUS_CONSENT;
    }
}
export class WithdrawUserConsent extends StateEntityLoaderActions.EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
        this.payload = payload;
        this.type = WITHDRAW_USER_CONSENT;
    }
}
export class WithdrawUserConsentFail extends StateEntityLoaderActions.EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID, payload);
        this.type = WITHDRAW_USER_CONSENT_FAIL;
    }
}
export class WithdrawUserConsentSuccess extends StateEntityLoaderActions.EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
        this.type = WITHDRAW_USER_CONSENT_SUCCESS;
    }
}
export class ResetWithdrawUserConsentProcess extends StateEntityLoaderActions.EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, WITHDRAW_CONSENT_PROCESS_ID);
        this.type = RESET_WITHDRAW_USER_CONSENT_PROCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItY29uc2VudHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGtCQUFrQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsYUFBYSxFQUNiLDJCQUEyQixHQUM1QixNQUFNLGVBQWUsQ0FBQztBQUV2QixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRywyQkFBMkIsQ0FBQztBQUM5RCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxtQ0FBbUMsQ0FBQztBQUM5RSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxnQ0FBZ0MsQ0FBQztBQUN4RSxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxpQ0FBaUMsQ0FBQztBQUUxRSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUM1RCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQztBQUN0RSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUM1RSxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FDMUMsd0NBQXdDLENBQUM7QUFDM0MsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsbUNBQW1DLENBQUM7QUFFOUUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsOEJBQThCLENBQUM7QUFDcEUsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsbUNBQW1DLENBQUM7QUFDOUUsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQ3hDLHNDQUFzQyxDQUFDO0FBQ3pDLE1BQU0sQ0FBQyxNQUFNLG1D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QUMsZUFBZSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFGN0MsU0FBSSxHQUFHLDZCQUE2QixDQUFDO0lBRzlDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSx3QkFBd0IsQ0FBQyxpQkFBaUI7SUFFN0Y7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFGN0MsU0FBSSxHQUFHLG1DQUFtQyxDQUFDO0lBR3BELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucyxcbiAgU3RhdGVMb2FkZXJBY3Rpb25zLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQge1xuICBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCxcbiAgVVNFUl9DT05TRU5UUyxcbiAgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lELFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DT05TRU5UUyA9ICdbVXNlcl0gTG9hZCBVc2VyIENvbnNlbnRzJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQ09OU0VOVFNfU1VDQ0VTUyA9ICdbVXNlcl0gTG9hZCBVc2VyIENvbnNlbnRzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9DT05TRU5UU19GQUlMID0gJ1tVc2VyXSBMb2FkIFVzZXIgQ29uc2VudHMgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVTRVRfTE9BRF9VU0VSX0NPTlNFTlRTID0gJ1tVc2VyXSBSZXNldCBMb2FkIFVzZXIgQ29uc2VudHMnO1xuXG5leHBvcnQgY29uc3QgR0lWRV9VU0VSX0NPTlNFTlQgPSAnW1VzZXJdIEdpdmUgVXNlciBDb25zZW50JztcbmV4cG9ydCBjb25zdCBHSVZFX1VTRVJfQ09OU0VOVF9GQUlMID0gJ1tVc2VyXSBHaXZlIFVzZXIgQ29uc2VudCBGYWlsJztcbmV4cG9ydCBjb25zdCBHSVZFX1VTRVJfQ09OU0VOVF9TVUNDRVNTID0gJ1tVc2VyXSBHaXZlIFVzZXIgQ29uc2VudCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9HSVZFX1VTRVJfQ09OU0VOVF9QUk9DRVNTID1cbiAgJ1tVc2VyXSBSZXNldCBHaXZlIFVzZXIgQ29uc2VudCBQcm9jZXNzJztcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9BTk9OWU1PVVNfQ09OU0VOVCA9ICdbVXNlcl0gVHJhbnNmZXIgQW5vbnltb3VzIENvbnNlbnQnO1xuXG5leHBvcnQgY29uc3QgV0lUSERSQVdfVVNFUl9DT05TRU5UID0gJ1tVc2VyXSBXaXRoZHJhdyBVc2VyIENvbnNlbnQnO1xuZXhwb3J0IGNvbnN0IFdJVEhEUkFXX1VTRVJfQ09OU0VOVF9GQUlMID0gJ1tVc2VyXSBXaXRoZHJhdyBVc2VyIENvbnNlbnQgRmFpbCc7XG5leHBvcnQgY29uc3QgV0lUSERSQVdfVVNFUl9DT05TRU5UX1NVQ0NFU1MgPVxuICAnW1VzZXJdIFdpdGhkcmF3IFVzZXIgQ29uc2VudCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9XSVRIRFJBV19VU0VSX0NPTlNFTlRfUFJPQ0VTUyA9XG4gICdbVXNlcl0gUmVzZXQgV2l0aGRyYXcgVXNlciBDb25zZW50IFByb2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJDb25zZW50cyBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9DT05TRU5UUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFVTRVJfQ09OU0VOVFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlckNvbnNlbnRzRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9DT05TRU5UU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9DT05TRU5UUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyQ29uc2VudHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX0NPTlNFTlRTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25zZW50VGVtcGxhdGVbXSkge1xuICAgIHN1cGVyKFVTRVJfQ09OU0VOVFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldExvYWRVc2VyQ29uc2VudHMgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTE9BRF9VU0VSX0NPTlNFTlRTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVU0VSX0NPTlNFTlRTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2l2ZVVzZXJDb25zZW50IGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0lWRV9VU0VSX0NPTlNFTlQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmc7XG4gICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXI7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2l2ZVVzZXJDb25zZW50RmFpbCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEdJVkVfVVNFUl9DT05TRU5UX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgR0lWRV9DT05TRU5UX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHaXZlVXNlckNvbnNlbnRTdWNjZXNzIGV4dGVuZHMgU3RhdGVFbnRpdHlMb2FkZXJBY3Rpb25zLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0lWRV9VU0VSX0NPTlNFTlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnNlbnRUZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBHSVZFX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0R2l2ZVVzZXJDb25zZW50UHJvY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9HSVZFX1VTRVJfQ09OU0VOVF9QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEdJVkVfQ09OU0VOVF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50IHtcbiAgcmVhZG9ubHkgdHlwZSA9IFRSQU5TRkVSX0FOT05ZTU9VU19DT05TRU5UO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nO1xuICAgICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgV2l0aGRyYXdVc2VyQ29uc2VudCBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFdJVEhEUkFXX1VTRVJfQ09OU0VOVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY29uc2VudENvZGU6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2l0aGRyYXdVc2VyQ29uc2VudEZhaWwgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBXSVRIRFJBV19VU0VSX0NPTlNFTlRfRkFJTDtcbiAgY29uc3RydWN0b3IocGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBXSVRIRFJBV19DT05TRU5UX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaXRoZHJhd1VzZXJDb25zZW50U3VjY2VzcyBleHRlbmRzIFN0YXRlRW50aXR5TG9hZGVyQWN0aW9ucy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFdJVEhEUkFXX1VTRVJfQ09OU0VOVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFdJVEhEUkFXX0NPTlNFTlRfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0V2l0aGRyYXdVc2VyQ29uc2VudFByb2Nlc3MgZXh0ZW5kcyBTdGF0ZUVudGl0eUxvYWRlckFjdGlvbnMuRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfV0lUSERSQVdfVVNFUl9DT05TRU5UX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgV0lUSERSQVdfQ09OU0VOVF9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBVc2VyQ29uc2VudHNBY3Rpb24gPVxuICB8IExvYWRVc2VyQ29uc2VudHNcbiAgfCBMb2FkVXNlckNvbnNlbnRzRmFpbFxuICB8IExvYWRVc2VyQ29uc2VudHNTdWNjZXNzXG4gIHwgUmVzZXRMb2FkVXNlckNvbnNlbnRzXG4gIHwgR2l2ZVVzZXJDb25zZW50XG4gIHwgR2l2ZVVzZXJDb25zZW50RmFpbFxuICB8IEdpdmVVc2VyQ29uc2VudFN1Y2Nlc3NcbiAgfCBSZXNldEdpdmVVc2VyQ29uc2VudFByb2Nlc3NcbiAgfCBXaXRoZHJhd1VzZXJDb25zZW50XG4gIHwgV2l0aGRyYXdVc2VyQ29uc2VudEZhaWxcbiAgfCBXaXRoZHJhd1VzZXJDb25zZW50U3VjY2Vzc1xuICB8IFJlc2V0V2l0aGRyYXdVc2VyQ29uc2VudFByb2Nlc3M7XG4iXX0=