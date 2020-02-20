export const VERIFY_ADDRESS = '[Checkout] Verify Address';
export const VERIFY_ADDRESS_FAIL = '[Checkout] Verify Address Fail';
export const VERIFY_ADDRESS_SUCCESS = '[Checkout] Verify Address Success';
export const CLEAR_ADDRESS_VERIFICATION_RESULTS = '[Checkout] Clear Address Verification Results';
export class VerifyAddress {
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS;
    }
}
export class VerifyAddressFail {
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_FAIL;
    }
}
export class VerifyAddressSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = VERIFY_ADDRESS_SUCCESS;
    }
}
export class ClearAddressVerificationResults {
    constructor() {
        this.type = CLEAR_ADDRESS_VERIFICATION_RESULTS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvYWRkcmVzcy12ZXJpZmljYXRpb24uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRywyQkFBMkIsQ0FBQztBQUMxRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxnQ0FBZ0MsQ0FBQztBQUNwRSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxtQ0FBbUMsQ0FBQztBQUUxRSxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FDN0MsK0NBQStDLENBQUM7QUFFbEQsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFBbUIsT0FBNkM7UUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7UUFEdkQsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUNvQyxDQUFDO0NBQ3JFO0FBRUQsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDRixDQUFDO0NBQ3BDO0FBRUQsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUFtQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQURwQyxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDUyxDQUFDO0NBQ2xEO0FBRUQsTUFBTSxPQUFPLCtCQUErQjtJQUUxQztRQURTLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQztJQUNwQyxDQUFDO0NBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IFZFUklGWV9BRERSRVNTID0gJ1tDaGVja291dF0gVmVyaWZ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IFZFUklGWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBWZXJpZnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBWRVJJRllfQUREUkVTU19TVUNDRVNTID0gJ1tDaGVja291dF0gVmVyaWZ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9BRERSRVNTX1ZFUklGSUNBVElPTl9SRVNVTFRTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQWRkcmVzcyBWZXJpZmljYXRpb24gUmVzdWx0cyc7XG5cbmV4cG9ydCBjbGFzcyBWZXJpZnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZFUklGWV9BRERSRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVmVyaWZ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVkVSSUZZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFZlcmlmeUFkZHJlc3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFZFUklGWV9BRERSRVNTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGRyZXNzVmFsaWRhdGlvbikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQWRkcmVzc1ZlcmlmaWNhdGlvblJlc3VsdHMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQUREUkVTU19WRVJJRklDQVRJT05fUkVTVUxUUztcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgdHlwZSBBZGRyZXNzVmVyaWZpY2F0aW9uQWN0aW9ucyA9XG4gIHwgVmVyaWZ5QWRkcmVzc1xuICB8IFZlcmlmeUFkZHJlc3NGYWlsXG4gIHwgVmVyaWZ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBDbGVhckFkZHJlc3NWZXJpZmljYXRpb25SZXN1bHRzO1xuIl19