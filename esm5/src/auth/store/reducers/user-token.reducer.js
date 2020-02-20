import { __assign } from "tslib";
import { AuthActions } from '../actions/index';
export var initialState = {};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActions.LOAD_USER_TOKEN:
        case AuthActions.REFRESH_USER_TOKEN: {
            return __assign({}, state);
        }
        case AuthActions.LOAD_USER_TOKEN_SUCCESS:
        case AuthActions.REFRESH_USER_TOKEN_SUCCESS: {
            return __assign(__assign({}, state), action.payload);
        }
        case AuthActions.LOAD_USER_TOKEN_FAIL:
        case AuthActions.REFRESH_USER_TOKEN_FAIL: {
            return __assign({}, state);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2F1dGgvc3RvcmUvcmVkdWNlcnMvdXNlci10b2tlbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUF5QixFQUFFLENBQUM7QUFFckQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFFa0Q7SUFIbEQsc0JBQUEsRUFBQSxvQkFBb0I7SUFLcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUNqQyxLQUFLLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ25DLG9CQUNLLEtBQUssRUFDUjtTQUNIO1FBRUQsS0FBSyxXQUFXLENBQUMsdUJBQXVCLENBQUM7UUFDekMsS0FBSyxXQUFXLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMzQyw2QkFDSyxLQUFLLEdBQ0wsTUFBTSxDQUFDLE9BQU8sRUFDakI7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLG9CQUFvQixDQUFDO1FBQ3RDLEtBQUssV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDeEMsb0JBQ0ssS0FBSyxFQUNSO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21VcGRhdGVFbWFpbEFjdGlvbiBmcm9tICcuLi8uLi8uLi91c2VyL3N0b3JlL2FjdGlvbnMvdXBkYXRlLWVtYWlsLmFjdGlvbic7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclRva2VuID0gPFVzZXJUb2tlbj57fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246XG4gICAgfCBBdXRoQWN0aW9ucy5Vc2VyVG9rZW5BY3Rpb25cbiAgICB8IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb25cbik6IFVzZXJUb2tlbiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTjpcbiAgICBjYXNlIEF1dGhBY3Rpb25zLlJFRlJFU0hfVVNFUl9UT0tFTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1M6XG4gICAgY2FzZSBBdXRoQWN0aW9ucy5SRUZSRVNIX1VTRVJfVE9LRU5fU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTl9GQUlMOlxuICAgIGNhc2UgQXV0aEFjdGlvbnMuUkVGUkVTSF9VU0VSX1RPS0VOX0ZBSUw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19