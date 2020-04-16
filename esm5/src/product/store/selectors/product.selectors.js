import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getProductsState } from './feature.selector';
var ɵ0 = function (state) { return state.details; };
export var getProductState = createSelector(getProductsState, ɵ0);
export var getSelectedProductStateFactory = function (code, scope) {
    if (scope === void 0) { scope = ''; }
    return createSelector(getProductState, function (details) {
        return StateEntityLoaderSelectors.entityStateSelector(details, code)[scope] ||
            initialLoaderState;
    });
};
export var getSelectedProductFactory = function (code, scope) {
    if (scope === void 0) { scope = ''; }
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderValueSelector(productState); });
};
export var getSelectedProductLoadingFactory = function (code, scope) {
    if (scope === void 0) { scope = ''; }
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderLoadingSelector(productState); });
};
export var getSelectedProductSuccessFactory = function (code, scope) {
    if (scope === void 0) { scope = ''; }
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderSuccessSelector(productState); });
};
export var getSelectedProductErrorFactory = function (code, scope) {
    if (scope === void 0) { scope = ''; }
    return createSelector(getSelectedProductStateFactory(code, scope), function (productState) { return StateLoaderSelectors.loaderErrorSelector(productState); });
};
var ɵ1 = function (details) {
    return Object.keys(details.entities);
};
export var getAllProductCodes = createSelector(getProductState, ɵ1);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9zZWxlY3RvcnMvcHJvZHVjdC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFHL0QsT0FBTyxFQUNMLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFHcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7U0FLakIsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhO0FBSDVFLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FHeEIsY0FBYyxDQUFDLGdCQUFnQixLQUEwQyxDQUFDO0FBRTlFLE1BQU0sQ0FBQyxJQUFNLDhCQUE4QixHQUFHLFVBQzVDLElBQVksRUFDWixLQUFVO0lBQVYsc0JBQUEsRUFBQSxVQUFVO0lBRVYsT0FBTyxjQUFjLENBQ25CLGVBQWUsRUFDZixVQUFDLE9BQU87UUFDTixPQUFBLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDcEUsa0JBQWtCO0lBRGxCLENBQ2tCLENBQ3JCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxVQUN2QyxJQUFZLEVBQ1osS0FBVTtJQUFWLHNCQUFBLEVBQUEsVUFBVTtJQUVWLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQzNDLFVBQUMsWUFBWSxJQUFLLE9BQUEsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQXRELENBQXNELENBQ3pFLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxnQ0FBZ0MsR0FBRyxVQUM5QyxJQUFZLEVBQ1osS0FBVTtJQUFWLHNCQUFBLEVBQUEsVUFBVTtJQUVWLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQzNDLFVBQUMsWUFBWSxJQUFLLE9BQUEsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQXhELENBQXdELENBQzNFLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxnQ0FBZ0MsR0FBRyxVQUM5QyxJQUFZLEVBQ1osS0FBVTtJQUFWLHNCQUFBLEVBQUEsVUFBVTtJQUVWLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQzNDLFVBQUMsWUFBWSxJQUFLLE9BQUEsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQXhELENBQXdELENBQzNFLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSw4QkFBOEIsR0FBRyxVQUM1QyxJQUFZLEVBQ1osS0FBVTtJQUFWLHNCQUFBLEVBQUEsVUFBVTtJQUVWLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQzNDLFVBQUMsWUFBWSxJQUFLLE9BQUEsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQXRELENBQXNELENBQ3pFLENBQUM7QUFDSixDQUFDLENBQUM7U0FLa0MsVUFBQyxPQUFPO0lBQzFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUxELE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUczQixjQUFjLENBQUMsZUFBZSxLQUVoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBpbml0aWFsTG9hZGVyU3RhdGUsXG4gIFN0YXRlRW50aXR5TG9hZGVyU2VsZWN0b3JzLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycyxcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFByb2R1Y3RzU3RhdGUsIFN0YXRlV2l0aFByb2R1Y3QgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IGdldFByb2R1Y3RzU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBFbnRpdHlMb2FkZXJTdGF0ZTxQcm9kdWN0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldFByb2R1Y3RzU3RhdGUsIChzdGF0ZTogUHJvZHVjdHNTdGF0ZSkgPT4gc3RhdGUuZGV0YWlscyk7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGUgPSAnJ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBMb2FkZXJTdGF0ZTxQcm9kdWN0Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFN0YXRlLFxuICAgIChkZXRhaWxzKSA9PlxuICAgICAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMuZW50aXR5U3RhdGVTZWxlY3RvcihkZXRhaWxzLCBjb2RlKVtzY29wZV0gfHxcbiAgICAgIGluaXRpYWxMb2FkZXJTdGF0ZVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdEZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGUgPSAnJ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBQcm9kdWN0PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSwgc2NvcGUpLFxuICAgIChwcm9kdWN0U3RhdGUpID0+IFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlID0gJydcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICAocHJvZHVjdFN0YXRlKSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFN1Y2Nlc3NGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlID0gJydcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICAocHJvZHVjdFN0YXRlKSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJTdWNjZXNzU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdEVycm9yRmFjdG9yeSA9IChcbiAgY29kZTogc3RyaW5nLFxuICBzY29wZSA9ICcnXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFNlbGVjdGVkUHJvZHVjdFN0YXRlRmFjdG9yeShjb2RlLCBzY29wZSksXG4gICAgKHByb2R1Y3RTdGF0ZSkgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyRXJyb3JTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvZHVjdENvZGVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBzdHJpbmdbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldFByb2R1Y3RTdGF0ZSwgKGRldGFpbHMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRldGFpbHMuZW50aXRpZXMpO1xufSk7XG4iXX0=