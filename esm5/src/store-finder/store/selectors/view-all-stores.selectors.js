import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { getStoreFinderState } from './feature.selector';
var ɵ0 = function (storesState) { return storesState.viewAllStores; };
export var getViewAllStoresState = createSelector(getStoreFinderState, ɵ0);
var ɵ1 = function (state) { return StateLoaderSelectors.loaderValueSelector(state); };
export var getViewAllStoresEntities = createSelector(getViewAllStoresState, ɵ1);
var ɵ2 = function (state) { return StateLoaderSelectors.loaderLoadingSelector(state); };
export var getViewAllStoresLoading = createSelector(getViewAllStoresState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvc2VsZWN0b3JzL3ZpZXctYWxsLXN0b3Jlcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7U0FPdkQsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLGFBQWEsRUFBekIsQ0FBeUI7QUFMekQsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEtBRXBCLENBQUM7U0FPQSxVQUFBLEtBQUssSUFBSSxPQUFBLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUEvQyxDQUErQztBQUwxRCxNQUFNLENBQUMsSUFBTSx3QkFBd0IsR0FHakMsY0FBYyxDQUNoQixxQkFBcUIsS0FFdEIsQ0FBQztTQU9BLFVBQUEsS0FBSyxJQUFJLE9BQUEsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQWpELENBQWlEO0FBTDVELE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUdoQyxjQUFjLENBQ2hCLHFCQUFxQixLQUV0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlclNlbGVjdG9ycyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgU3RvcmVzU3RhdGUsXG4gIFZpZXdBbGxTdG9yZXNTdGF0ZSxcbn0gZnJvbSAnLi4vc3RvcmUtZmluZGVyLXN0YXRlJztcbmltcG9ydCB7IGdldFN0b3JlRmluZGVyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0Vmlld0FsbFN0b3Jlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgTG9hZGVyU3RhdGU8Vmlld0FsbFN0b3Jlc1N0YXRlPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRTdG9yZUZpbmRlclN0YXRlLFxuICAoc3RvcmVzU3RhdGU6IFN0b3Jlc1N0YXRlKSA9PiBzdG9yZXNTdGF0ZS52aWV3QWxsU3RvcmVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Vmlld0FsbFN0b3Jlc0VudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgVmlld0FsbFN0b3Jlc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFZpZXdBbGxTdG9yZXNTdGF0ZSxcbiAgc3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3QWxsU3RvcmVzTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Vmlld0FsbFN0b3Jlc1N0YXRlLFxuICBzdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19