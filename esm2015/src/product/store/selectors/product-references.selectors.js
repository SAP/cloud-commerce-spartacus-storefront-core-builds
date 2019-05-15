/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
/** @type {?} */
export const getProductReferencesState = createSelector(getProductsState, (state) => state.references);
/** @type {?} */
export const getSelectedProductReferencesFactory = (productCode) => {
    return createSelector(getProductReferencesState, referenceTypeData => {
        if (referenceTypeData.productCode === productCode) {
            return referenceTypeData.list;
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LXJlZmVyZW5jZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFdEQsTUFBTSxPQUFPLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQzNDOztBQUVELE1BQU0sT0FBTyxtQ0FBbUMsR0FBRyxDQUNqRCxXQUFtQixFQUNxQyxFQUFFO0lBQzFELE9BQU8sY0FBYyxDQUNuQix5QkFBeUIsRUFDekIsaUJBQWlCLENBQUMsRUFBRTtRQUNsQixJQUFJLGlCQUFpQixDQUFDLFdBQVcsS0FBSyxXQUFXLEVBQUU7WUFDakQsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7U0FDL0I7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7XG4gIFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUsXG4gIFByb2R1Y3RzU3RhdGUsXG4gIFN0YXRlV2l0aFByb2R1Y3QsXG59IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RzU3RhdGUsXG4gIChzdGF0ZTogUHJvZHVjdHNTdGF0ZSkgPT4gc3RhdGUucmVmZXJlbmNlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFJlZmVyZW5jZXNGYWN0b3J5ID0gKFxuICBwcm9kdWN0Q29kZTogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIFByb2R1Y3RSZWZlcmVuY2VbXT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFJlZmVyZW5jZXNTdGF0ZSxcbiAgICByZWZlcmVuY2VUeXBlRGF0YSA9PiB7XG4gICAgICBpZiAocmVmZXJlbmNlVHlwZURhdGEucHJvZHVjdENvZGUgPT09IHByb2R1Y3RDb2RlKSB7XG4gICAgICAgIHJldHVybiByZWZlcmVuY2VUeXBlRGF0YS5saXN0O1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=