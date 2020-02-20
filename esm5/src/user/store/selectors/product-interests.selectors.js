import { createSelector } from '@ngrx/store';
import { loaderValueSelector, loaderLoadingSelector, } from '../../../state/utils/loader/loader.selectors';
import { getUserState } from './feature.selector';
var ɵ0 = function (state) { return state.productInterests; };
export var getInterestsState = createSelector(getUserState, ɵ0);
var ɵ1 = function (state) {
    return loaderValueSelector(state);
};
export var getInterests = createSelector(getInterestsState, ɵ1);
var ɵ2 = function (state) {
    return loaderLoadingSelector(state);
};
export var getInterestsLoading = createSelector(getInterestsState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL3Byb2R1Y3QtaW50ZXJlc3RzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUcvRCxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixHQUN0QixNQUFNLDhDQUE4QyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztTQVFoRCxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsZ0JBQWdCLEVBQXRCLENBQXNCO0FBTDlDLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksS0FFYixDQUFDO1NBT0EsVUFBQyxLQUErQztJQUM5QyxPQUFBLG1CQUFtQixDQUFDLEtBQUssQ0FBQztBQUExQixDQUEwQjtBQU45QixNQUFNLENBQUMsSUFBTSxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsaUJBQWlCLEtBR2xCLENBQUM7U0FPQSxVQUFDLEtBQStDO0lBQzlDLE9BQUEscUJBQXFCLENBQUMsS0FBSyxDQUFDO0FBQTVCLENBQTRCO0FBTmhDLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLGlCQUFpQixLQUdsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyU3RhdGUsIFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGdldEludGVyZXN0c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBMb2FkZXJTdGF0ZTxQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQ+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnByb2R1Y3RJbnRlcmVzdHNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRJbnRlcmVzdHM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRJbnRlcmVzdHNTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQ+KSA9PlxuICAgIGxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0SW50ZXJlc3RzTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRJbnRlcmVzdHNTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQ+KSA9PlxuICAgIGxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=