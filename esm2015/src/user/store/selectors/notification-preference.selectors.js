/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
import { loaderValueSelector, loaderLoadingSelector, } from '../../../state/utils/loader/loader.selectors';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.notificationPreferences;
/** @type {?} */
export const getPreferencesLoaderState = createSelector(getUserState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state);
/** @type {?} */
export const getPreferences = createSelector(getPreferencesLoaderState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderValueSelector(state).filter((/**
 * @param {?} p
 * @return {?}
 */
p => p.enabled));
/** @type {?} */
export const getEnabledPreferences = createSelector(getPreferencesLoaderState, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => loaderLoadingSelector(state);
/** @type {?} */
export const getPreferencesLoading = createSelector(getPreferencesLoaderState, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2Uuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFJL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEdBQ3RCLE1BQU0sOENBQThDLENBQUM7Ozs7O0FBT3BELENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1Qjs7QUFMckQsTUFBTSxPQUFPLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLFlBQVksT0FFYjs7Ozs7QUFPQyxDQUFDLEtBQTRDLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQzs7QUFMOUUsTUFBTSxPQUFPLGNBQWMsR0FHdkIsY0FBYyxDQUNoQix5QkFBeUIsT0FFMUI7Ozs7O0FBT0MsQ0FBQyxLQUE0QyxFQUFFLEVBQUUsQ0FDL0MsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTs7OztBQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQzs7QUFOckQsTUFBTSxPQUFPLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLHlCQUF5QixPQUcxQjs7Ozs7QUFPQyxDQUFDLEtBQTRDLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFMaEYsTUFBTSxPQUFPLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLHlCQUF5QixPQUUxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyLCBVc2VyU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQge1xuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuc2VsZWN0b3JzJztcblxuZXhwb3J0IGNvbnN0IGdldFByZWZlcmVuY2VzTG9hZGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIExvYWRlclN0YXRlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VXNlclN0YXRlLFxuICAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uUHJlZmVyZW5jZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQcmVmZXJlbmNlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByZWZlcmVuY2VzTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPikgPT4gbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRFbmFibGVkUHJlZmVyZW5jZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcmVmZXJlbmNlc0xvYWRlclN0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT4pID0+XG4gICAgbG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSkuZmlsdGVyKHAgPT4gcC5lbmFibGVkKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFByZWZlcmVuY2VzTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcmVmZXJlbmNlc0xvYWRlclN0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT4pID0+IGxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=