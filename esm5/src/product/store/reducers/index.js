/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import * as fromProductsSearch from './product-search.reducer';
import * as fromProductReviews from './product-reviews.reducer';
import { PRODUCT_DETAIL_ENTITY } from '../product-state';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE } from '../../../site-context';
import { entityLoaderReducer } from '../../../state/utils/entity-loader/entity-loader.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        search: fromProductsSearch.reducer,
        details: entityLoaderReducer(PRODUCT_DETAIL_ENTITY),
        reviews: fromProductReviews.reducer,
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('ProductReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearProductsState(reducer) {
    return function (state, action) {
        if (action.type === CURRENCY_CHANGE || action.type === LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export var metaReducers = [clearProductsState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEtBQUssa0JBQWtCLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxLQUFLLGtCQUFrQixNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7O0FBRy9GLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxNQUFNLEVBQUUsa0JBQWtCLENBQUMsT0FBTztRQUNsQyxPQUFPLEVBQUUsbUJBQW1CLENBQVUscUJBQXFCLENBQUM7UUFDNUQsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU87S0FDcEMsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQWtDLGlCQUFpQixDQUFDOztBQUUxRSxNQUFNLEtBQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsT0FBMkI7SUFFM0IsT0FBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxlQUFlLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxlQUFlLEVBQUU7WUFDdEUsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQXVCLENBQUMsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXIsIEFjdGlvblJlZHVjZXJNYXAsIE1ldGFSZWR1Y2VyIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0ICogYXMgZnJvbVByb2R1Y3RzU2VhcmNoIGZyb20gJy4vcHJvZHVjdC1zZWFyY2gucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUHJvZHVjdFJldmlld3MgZnJvbSAnLi9wcm9kdWN0LXJldmlld3MucmVkdWNlcic7XG5pbXBvcnQgeyBQUk9EVUNUX0RFVEFJTF9FTlRJVFksIFByb2R1Y3RzU3RhdGUgfSBmcm9tICcuLi9wcm9kdWN0LXN0YXRlJztcbmltcG9ydCB7IENVUlJFTkNZX0NIQU5HRSwgTEFOR1VBR0VfQ0hBTkdFIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0JztcbmltcG9ydCB7IGVudGl0eUxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPFByb2R1Y3RzU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2g6IGZyb21Qcm9kdWN0c1NlYXJjaC5yZWR1Y2VyLFxuICAgIGRldGFpbHM6IGVudGl0eUxvYWRlclJlZHVjZXI8UHJvZHVjdD4oUFJPRFVDVF9ERVRBSUxfRU5USVRZKSxcbiAgICByZXZpZXdzOiBmcm9tUHJvZHVjdFJldmlld3MucmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8UHJvZHVjdHNTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxQcm9kdWN0c1N0YXRlPj4oJ1Byb2R1Y3RSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2R1Y3RzU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PlxuKTogQWN0aW9uUmVkdWNlcjxhbnk+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IENVUlJFTkNZX0NIQU5HRSB8fCBhY3Rpb24udHlwZSA9PT0gTEFOR1VBR0VfQ0hBTkdFKSB7XG4gICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhclByb2R1Y3RzU3RhdGVdO1xuIl19