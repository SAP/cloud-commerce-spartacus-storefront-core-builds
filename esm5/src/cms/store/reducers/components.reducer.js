import { __assign } from "tslib";
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
export var initialState = {
    component: undefined,
    pageContext: {},
};
function componentExistsReducer(state, action) {
    if (state === void 0) { state = false; }
    switch (action.type) {
        case CmsActions.LOAD_CMS_COMPONENT_FAIL:
            return false;
        case CmsActions.CMS_GET_COMPONENT_FROM_PAGE:
        case CmsActions.LOAD_CMS_COMPONENT_SUCCESS:
            return true;
    }
    return state;
}
export function reducer(state, action) {
    var _a, _b, _c, _d;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CmsActions.LOAD_CMS_COMPONENT: {
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            var context = serializePageContext(action.payload.pageContext, true);
            return __assign(__assign({}, state), { pageContext: __assign(__assign({}, state.pageContext), (_a = {}, _a[context] = pageContextReducer(state.pageContext[context], action), _a)) });
        }
        case CmsActions.LOAD_CMS_COMPONENT_FAIL: {
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            var context = serializePageContext(action.payload.pageContext, true);
            return __assign(__assign({}, state), { pageContext: __assign(__assign({}, state.pageContext), (_b = {}, _b[context] = pageContextReducer(state.pageContext[context], action), _b)) });
        }
        case CmsActions.LOAD_CMS_COMPONENT_SUCCESS: {
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            var context = serializePageContext(action.payload.pageContext, true);
            return __assign(__assign({}, state), { component: action.payload.component, pageContext: __assign(__assign({}, state.pageContext), (_c = {}, _c[context] = pageContextReducer(state.pageContext[context], action), _c)) });
        }
        case CmsActions.CMS_GET_COMPONENT_FROM_PAGE: {
            var pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            if (!Array.isArray(action.payload)) {
                var context = serializePageContext(action.payload.pageContext, true);
                return __assign(__assign({}, state), { component: action.payload.component, pageContext: __assign(__assign({}, state.pageContext), (_d = {}, _d[context] = pageContextReducer(state.pageContext[context], action), _d)) });
            }
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9jb21wb25lbnRzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHOUMsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFzQjtJQUM3QyxTQUFTLEVBQUUsU0FBUztJQUNwQixXQUFXLEVBQUUsRUFBRTtDQUNoQixDQUFDO0FBRUYsU0FBUyxzQkFBc0IsQ0FDN0IsS0FBYSxFQUNiLE1BQXdDO0lBRHhDLHNCQUFBLEVBQUEsYUFBYTtJQUdiLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyx1QkFBdUI7WUFDckMsT0FBTyxLQUFLLENBQUM7UUFFZixLQUFLLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztRQUM1QyxLQUFLLFVBQVUsQ0FBQywwQkFBMEI7WUFDeEMsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQXdDOztJQUR4QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsQyxJQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3RCLHNCQUFzQixDQUN2QixDQUFDO1lBQ0YsSUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkUsNkJBQ0ssS0FBSyxLQUNSLFdBQVcsd0JBQ04sS0FBSyxDQUFDLFdBQVcsZ0JBQ25CLE9BQU8sSUFBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUVuRTtTQUNIO1FBQ0QsS0FBSyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2QyxJQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3RCLHNCQUFzQixDQUN2QixDQUFDO1lBQ0YsSUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkUsNkJBQ0ssS0FBSyxLQUNSLFdBQVcsd0JBQ04sS0FBSyxDQUFDLFdBQVcsZ0JBQ25CLE9BQU8sSUFBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUVuRTtTQUNIO1FBQ0QsS0FBSyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMxQyxJQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3RCLHNCQUFzQixDQUN2QixDQUFDO1lBQ0YsSUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkUsNkJBQ0ssS0FBSyxLQUNSLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQWMsRUFDeEMsV0FBVyx3QkFDTixLQUFLLENBQUMsV0FBVyxnQkFDbkIsT0FBTyxJQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBRW5FO1NBQ0g7UUFDRCxLQUFLLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzNDLElBQU0sa0JBQWtCLEdBQUcsYUFBYSxDQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdEIsc0JBQXNCLENBQ3ZCLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xDLElBQU0sT0FBTyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2RSw2QkFDSyxLQUFLLEtBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBYyxFQUN4QyxXQUFXLHdCQUNOLEtBQUssQ0FBQyxXQUFXLGdCQUNuQixPQUFPLElBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsVUFFbkU7YUFDSDtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY21zLXV0aWxzJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHNDb250ZXh0IH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ29tcG9uZW50c0NvbnRleHQgPSB7XG4gIGNvbXBvbmVudDogdW5kZWZpbmVkLFxuICBwYWdlQ29udGV4dDoge30sXG59O1xuXG5mdW5jdGlvbiBjb21wb25lbnRFeGlzdHNSZWR1Y2VyPFQ+KFxuICBzdGF0ZSA9IGZhbHNlLFxuICBhY3Rpb246IENtc0FjdGlvbnMuQ21zQ29tcG9uZW50QWN0aW9uPFQ+XG4pOiBib29sZWFuIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlRfRkFJTDpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgQ21zQWN0aW9ucy5DTVNfR0VUX0NPTVBPTkVOVF9GUk9NX1BBR0U6XG4gICAgY2FzZSBDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcjxUPihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQ21zQWN0aW9ucy5DbXNDb21wb25lbnRBY3Rpb248VD5cbik6IENvbXBvbmVudHNDb250ZXh0IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlQ6IHtcbiAgICAgIGNvbnN0IHBhZ2VDb250ZXh0UmVkdWNlciA9IGxvYWRlclJlZHVjZXI8Ym9vbGVhbj4oXG4gICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUsXG4gICAgICAgIGNvbXBvbmVudEV4aXN0c1JlZHVjZXJcbiAgICAgICk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9uLnBheWxvYWQucGFnZUNvbnRleHQsIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhZ2VDb250ZXh0OiB7XG4gICAgICAgICAgLi4uc3RhdGUucGFnZUNvbnRleHQsXG4gICAgICAgICAgW2NvbnRleHRdOiBwYWdlQ29udGV4dFJlZHVjZXIoc3RhdGUucGFnZUNvbnRleHRbY29udGV4dF0sIGFjdGlvbiksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UX0ZBSUw6IHtcbiAgICAgIGNvbnN0IHBhZ2VDb250ZXh0UmVkdWNlciA9IGxvYWRlclJlZHVjZXI8Ym9vbGVhbj4oXG4gICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUsXG4gICAgICAgIGNvbXBvbmVudEV4aXN0c1JlZHVjZXJcbiAgICAgICk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9uLnBheWxvYWQucGFnZUNvbnRleHQsIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhZ2VDb250ZXh0OiB7XG4gICAgICAgICAgLi4uc3RhdGUucGFnZUNvbnRleHQsXG4gICAgICAgICAgW2NvbnRleHRdOiBwYWdlQ29udGV4dFJlZHVjZXIoc3RhdGUucGFnZUNvbnRleHRbY29udGV4dF0sIGFjdGlvbiksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHBhZ2VDb250ZXh0UmVkdWNlciA9IGxvYWRlclJlZHVjZXI8Ym9vbGVhbj4oXG4gICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUsXG4gICAgICAgIGNvbXBvbmVudEV4aXN0c1JlZHVjZXJcbiAgICAgICk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9uLnBheWxvYWQucGFnZUNvbnRleHQsIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBvbmVudDogYWN0aW9uLnBheWxvYWQuY29tcG9uZW50IGFzIFQsXG4gICAgICAgIHBhZ2VDb250ZXh0OiB7XG4gICAgICAgICAgLi4uc3RhdGUucGFnZUNvbnRleHQsXG4gICAgICAgICAgW2NvbnRleHRdOiBwYWdlQ29udGV4dFJlZHVjZXIoc3RhdGUucGFnZUNvbnRleHRbY29udGV4dF0sIGFjdGlvbiksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIENtc0FjdGlvbnMuQ01TX0dFVF9DT01QT05FTlRfRlJPTV9QQUdFOiB7XG4gICAgICBjb25zdCBwYWdlQ29udGV4dFJlZHVjZXIgPSBsb2FkZXJSZWR1Y2VyPGJvb2xlYW4+KFxuICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlLFxuICAgICAgICBjb21wb25lbnRFeGlzdHNSZWR1Y2VyXG4gICAgICApO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9uLnBheWxvYWQucGFnZUNvbnRleHQsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGNvbXBvbmVudDogYWN0aW9uLnBheWxvYWQuY29tcG9uZW50IGFzIFQsXG4gICAgICAgICAgcGFnZUNvbnRleHQ6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgW2NvbnRleHRdOiBwYWdlQ29udGV4dFJlZHVjZXIoc3RhdGUucGFnZUNvbnRleHRbY29udGV4dF0sIGFjdGlvbiksXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19