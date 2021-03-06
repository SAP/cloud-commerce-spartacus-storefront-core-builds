import { UserActions } from '../actions/index';
export const initialState = {
    entities: {},
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_BILLING_COUNTRIES_SUCCESS: {
            const billingCountries = action.payload;
            const entities = billingCountries.reduce((countryEntities, name) => {
                return Object.assign(Object.assign({}, countryEntities), { [name.isocode]: name });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case UserActions.CLEAR_USER_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1jb3VudHJpZXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvYmlsbGluZy1jb3VudHJpZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUEwQjtJQUNqRCxRQUFRLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFFRixNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEyRTtJQUUzRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUMvQyxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDeEMsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUN0QyxDQUFDLGVBQTJDLEVBQUUsSUFBUyxFQUFFLEVBQUU7Z0JBQ3pELHVDQUNLLGVBQWUsS0FDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxJQUNwQjtZQUNKLENBQUMsb0JBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEIsQ0FBQztZQUVGLHVDQUNLLEtBQUssS0FDUixRQUFRLElBQ1I7U0FDSDtRQUVELEtBQUssV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdEMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBCaWxsaW5nQ291bnRyaWVzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQmlsbGluZ0NvdW50cmllc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuQmlsbGluZ0NvdW50cmllc0FjdGlvbiB8IFVzZXJBY3Rpb25zLkNsZWFyVXNlck1pc2NzRGF0YVxuKTogQmlsbGluZ0NvdW50cmllc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9CSUxMSU5HX0NPVU5UUklFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBiaWxsaW5nQ291bnRyaWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGJpbGxpbmdDb3VudHJpZXMucmVkdWNlKFxuICAgICAgICAoY291bnRyeUVudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBhbnkgfSwgbmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNvdW50cnlFbnRpdGllcyxcbiAgICAgICAgICAgIFtuYW1lLmlzb2NvZGVdOiBuYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFVzZXJBY3Rpb25zLkNMRUFSX1VTRVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=