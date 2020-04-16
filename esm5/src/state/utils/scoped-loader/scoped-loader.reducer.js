import { __assign } from "tslib";
import { loaderReducer } from '../loader/loader.reducer';
export var initialScopedLoaderState = {};
/**
 * Higher order reducer designed to add scope support for loader reducer
 *
 * @param entityType
 * @param reducer
 */
export function scopedLoaderReducer(entityType, reducer) {
    var loader = loaderReducer(entityType, reducer);
    return function (state, action) {
        var _a;
        if (state === void 0) { state = initialScopedLoaderState; }
        var _b;
        if (action && action.meta && action.meta.entityType === entityType) {
            return __assign(__assign({}, state), (_a = {}, _a[(_b = action.meta.scope) !== null && _b !== void 0 ? _b : ''] = loader(state[action.meta.scope], action), _a));
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGVkLWxvYWRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3V0aWxzL3Njb3BlZC1sb2FkZXIvc2NvcGVkLWxvYWRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLekQsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQTJCLEVBQUUsQ0FBQztBQUVuRTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsVUFBa0IsRUFDbEIsT0FBeUM7SUFLekMsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFJLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVyRCxPQUFPLFVBQ0wsS0FBc0QsRUFDdEQsTUFBZ0M7O1FBRGhDLHNCQUFBLEVBQUEsZ0NBQXNEOztRQUd0RCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNsRSw2QkFDSyxLQUFLLHNCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxtQ0FBSSxFQUFFLElBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUNuRTtTQUNIO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQgeyBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L3N0b3JlL2FjdGlvbnMvcHJvZHVjdC5hY3Rpb24nO1xuaW1wb3J0IHsgU2NvcGVkTG9hZGVyU3RhdGUgfSBmcm9tICcuL3Njb3BlZC1sb2FkZXIuc3RhdGUnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFNjb3BlZExvYWRlclN0YXRlOiBTY29wZWRMb2FkZXJTdGF0ZTxhbnk+ID0ge307XG5cbi8qKlxuICogSGlnaGVyIG9yZGVyIHJlZHVjZXIgZGVzaWduZWQgdG8gYWRkIHNjb3BlIHN1cHBvcnQgZm9yIGxvYWRlciByZWR1Y2VyXG4gKlxuICogQHBhcmFtIGVudGl0eVR5cGVcbiAqIEBwYXJhbSByZWR1Y2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY29wZWRMb2FkZXJSZWR1Y2VyPFQ+KFxuICBlbnRpdHlUeXBlOiBzdHJpbmcsXG4gIHJlZHVjZXI/OiAoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiBUXG4pOiAoXG4gIHN0YXRlOiBTY29wZWRMb2FkZXJTdGF0ZTxUPixcbiAgYWN0aW9uOiBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb25cbikgPT4gU2NvcGVkTG9hZGVyU3RhdGU8VD4ge1xuICBjb25zdCBsb2FkZXIgPSBsb2FkZXJSZWR1Y2VyPFQ+KGVudGl0eVR5cGUsIHJlZHVjZXIpO1xuXG4gIHJldHVybiAoXG4gICAgc3RhdGU6IFNjb3BlZExvYWRlclN0YXRlPFQ+ID0gaW5pdGlhbFNjb3BlZExvYWRlclN0YXRlLFxuICAgIGFjdGlvbjogRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9uXG4gICk6IFNjb3BlZExvYWRlclN0YXRlPFQ+ID0+IHtcbiAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLm1ldGEuc2NvcGUgPz8gJyddOiBsb2FkZXIoc3RhdGVbYWN0aW9uLm1ldGEuc2NvcGVdLCBhY3Rpb24pLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19