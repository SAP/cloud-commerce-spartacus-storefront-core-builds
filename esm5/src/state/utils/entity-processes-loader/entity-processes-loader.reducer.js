/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { entityReducer } from '../entity/entity.reducer';
import { processesLoaderReducer } from '../processes-loader';
/**
 * Higher order reducer that wraps ProcessesLoaderReducer and EntityReducer enhancing
 * single state reducer to support multiple entities with generic processesCount flag
 * @template T
 * @param {?} entityType
 * @param {?=} reducer
 * @return {?}
 */
export function entityProcessesLoaderReducer(entityType, reducer) {
    return entityReducer(entityType, processesLoaderReducer(entityType, reducer));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztBQVM3RCxNQUFNLFVBQVUsNEJBQTRCLENBQzFDLFVBQWtCLEVBQ2xCLE9BQXdEO0lBS3hELE9BQU8sYUFBYSxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW50aXR5UmVkdWNlciB9IGZyb20gJy4uL2VudGl0eS9lbnRpdHkucmVkdWNlcic7XG5pbXBvcnQgeyBwcm9jZXNzZXNMb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vcHJvY2Vzc2VzLWxvYWRlcic7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJBY3Rpb24gfSBmcm9tICcuLi9wcm9jZXNzZXMtbG9hZGVyL3Byb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IEVudGl0eVByb2Nlc3Nlc0xvYWRlclN0YXRlIH0gZnJvbSAnLi9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBFbnRpdHlQcm9jZXNzZXNMb2FkZXJBY3Rpb24gfSBmcm9tICcuL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgdGhhdCB3cmFwcyBQcm9jZXNzZXNMb2FkZXJSZWR1Y2VyIGFuZCBFbnRpdHlSZWR1Y2VyIGVuaGFuY2luZ1xuICogc2luZ2xlIHN0YXRlIHJlZHVjZXIgdG8gc3VwcG9ydCBtdWx0aXBsZSBlbnRpdGllcyB3aXRoIGdlbmVyaWMgcHJvY2Vzc2VzQ291bnQgZmxhZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVkdWNlcjxUPihcbiAgZW50aXR5VHlwZTogc3RyaW5nLFxuICByZWR1Y2VyPzogKHN0YXRlOiBULCBhY3Rpb246IFByb2Nlc3Nlc0xvYWRlckFjdGlvbikgPT4gVFxuKTogKFxuICBzdGF0ZTogRW50aXR5UHJvY2Vzc2VzTG9hZGVyU3RhdGU8VD4sXG4gIGFjdGlvbjogRW50aXR5UHJvY2Vzc2VzTG9hZGVyQWN0aW9uXG4pID0+IEVudGl0eVByb2Nlc3Nlc0xvYWRlclN0YXRlPFQ+IHtcbiAgcmV0dXJuIGVudGl0eVJlZHVjZXIoZW50aXR5VHlwZSwgcHJvY2Vzc2VzTG9hZGVyUmVkdWNlcihlbnRpdHlUeXBlLCByZWR1Y2VyKSk7XG59XG4iXX0=