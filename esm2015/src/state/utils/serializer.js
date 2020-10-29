import { entityLoaderStateSelector } from './entity-loader/entity-loader.selectors';
const ALL = 'all';
export function serializeSearchConfig(config, id) {
    var _a, _b, _c;
    return `${id !== null && id !== void 0 ? id : ''}?pageSize=${(_a = config.pageSize) !== null && _a !== void 0 ? _a : ''}&currentPage=${(_b = config.currentPage) !== null && _b !== void 0 ? _b : ''}&sort=${(_c = config.sort) !== null && _c !== void 0 ? _c : ''}`;
}
export function denormalizeSearch(state, params) {
    return denormalizeCustomB2BSearch(state.list, state.entities, params);
}
export function denormalizeCustomB2BSearch(list, entities, params, id) {
    const serializedList = entityLoaderStateSelector(list, params ? serializeSearchConfig(params, id) : id !== null && id !== void 0 ? id : ALL);
    if (!serializedList.value || !serializedList.value.ids) {
        return serializedList;
    }
    const res = Object.assign({}, serializedList, {
        value: {
            values: serializedList.value.ids.map((code) => entityLoaderStateSelector(entities, code).value),
        },
    });
    if (params) {
        res.value.pagination = serializedList.value.pagination;
        res.value.sorts = serializedList.value.sorts;
    }
    return res;
}
export function normalizeListPage(list, id) {
    const values = (list === null || list === void 0 ? void 0 : list.values) || [];
    const page = {
        ids: values.map((data) => data[id]),
    };
    if (list.pagination) {
        page.pagination = list.pagination;
    }
    if (list.sorts) {
        page.sorts = list.sorts;
    }
    return { values, page };
}
export function serializeParams(params, searchConfig) {
    return [params, serializeSearchConfig(searchConfig)].toString();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3N0YXRlL3V0aWxzL3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHcEYsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBRWxCLE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsTUFBb0IsRUFDcEIsRUFBVzs7SUFFWCxPQUFPLEdBQUcsRUFBRSxhQUFGLEVBQUUsY0FBRixFQUFFLEdBQUksRUFBRSxhQUFhLE1BQUEsTUFBTSxDQUFDLFFBQVEsbUNBQUksRUFBRSxnQkFDbEQsTUFBQSxNQUFNLENBQUMsV0FBVyxtQ0FBSSxFQUN4QixTQUFTLE1BQUEsTUFBTSxDQUFDLElBQUksbUNBQUksRUFBRSxFQUFFLENBQUM7QUFDL0IsQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsS0FBeUIsRUFDekIsTUFBcUI7SUFFckIsT0FBTywwQkFBMEIsQ0FBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FDeEMsSUFBa0MsRUFDbEMsUUFBOEIsRUFDOUIsTUFBcUIsRUFDckIsRUFBVztJQUVYLE1BQU0sY0FBYyxHQUFRLHlCQUF5QixDQUNuRCxJQUFJLEVBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBRixFQUFFLGNBQUYsRUFBRSxHQUFJLEdBQUcsQ0FDdkQsQ0FBQztJQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDdEQsT0FBTyxjQUFjLENBQUM7S0FDdkI7SUFDRCxNQUFNLEdBQUcsR0FBa0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFO1FBQzNFLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ2xDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUMxRDtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxNQUFNLEVBQUU7UUFDVixHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztLQUM5QztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsSUFBc0IsRUFDdEIsRUFBVTtJQUVWLE1BQU0sTUFBTSxHQUFHLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE1BQU0sS0FBSSxFQUFFLENBQUM7SUFDbEMsTUFBTSxJQUFJLEdBQWM7UUFDdEIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNwQyxDQUFDO0lBQ0YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUNuQztJQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUN6QjtJQUNELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDMUIsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQzdCLE1BQXlCLEVBQ3pCLFlBQTBCO0lBRTFCLE9BQU8sQ0FBQyxNQUFNLEVBQUUscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdE1vZGVsLCBFbnRpdGllc01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IEVudGl0eUxpc3RTdGF0ZSB9IGZyb20gJy4vZW50aXR5LWxpc3Qtc3RhdGUnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBlbnRpdHlMb2FkZXJTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi9sb2FkZXIvbG9hZGVyLXN0YXRlJztcblxuY29uc3QgQUxMID0gJ2FsbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVTZWFyY2hDb25maWcoXG4gIGNvbmZpZzogU2VhcmNoQ29uZmlnLFxuICBpZD86IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2lkID8/ICcnfT9wYWdlU2l6ZT0ke2NvbmZpZy5wYWdlU2l6ZSA/PyAnJ30mY3VycmVudFBhZ2U9JHtcbiAgICBjb25maWcuY3VycmVudFBhZ2UgPz8gJydcbiAgfSZzb3J0PSR7Y29uZmlnLnNvcnQgPz8gJyd9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbm9ybWFsaXplU2VhcmNoPFQ+KFxuICBzdGF0ZTogRW50aXR5TGlzdFN0YXRlPFQ+LFxuICBwYXJhbXM/OiBTZWFyY2hDb25maWdcbik6IExvYWRlclN0YXRlPEVudGl0aWVzTW9kZWw8VD4+IHtcbiAgcmV0dXJuIGRlbm9ybWFsaXplQ3VzdG9tQjJCU2VhcmNoPFQ+KHN0YXRlLmxpc3QsIHN0YXRlLmVudGl0aWVzLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVub3JtYWxpemVDdXN0b21CMkJTZWFyY2g8VD4oXG4gIGxpc3Q6IEVudGl0eUxvYWRlclN0YXRlPExpc3RNb2RlbD4sXG4gIGVudGl0aWVzOiBFbnRpdHlMb2FkZXJTdGF0ZTxUPixcbiAgcGFyYW1zPzogU2VhcmNoQ29uZmlnLFxuICBpZD86IHN0cmluZ1xuKTogTG9hZGVyU3RhdGU8RW50aXRpZXNNb2RlbDxUPj4ge1xuICBjb25zdCBzZXJpYWxpemVkTGlzdDogYW55ID0gZW50aXR5TG9hZGVyU3RhdGVTZWxlY3RvcihcbiAgICBsaXN0LFxuICAgIHBhcmFtcyA/IHNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXJhbXMsIGlkKSA6IGlkID8/IEFMTFxuICApO1xuICBpZiAoIXNlcmlhbGl6ZWRMaXN0LnZhbHVlIHx8ICFzZXJpYWxpemVkTGlzdC52YWx1ZS5pZHMpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplZExpc3Q7XG4gIH1cbiAgY29uc3QgcmVzOiBMb2FkZXJTdGF0ZTxFbnRpdGllc01vZGVsPFQ+PiA9IE9iamVjdC5hc3NpZ24oe30sIHNlcmlhbGl6ZWRMaXN0LCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlczogc2VyaWFsaXplZExpc3QudmFsdWUuaWRzLm1hcChcbiAgICAgICAgKGNvZGUpID0+IGVudGl0eUxvYWRlclN0YXRlU2VsZWN0b3IoZW50aXRpZXMsIGNvZGUpLnZhbHVlXG4gICAgICApLFxuICAgIH0sXG4gIH0pO1xuICBpZiAocGFyYW1zKSB7XG4gICAgcmVzLnZhbHVlLnBhZ2luYXRpb24gPSBzZXJpYWxpemVkTGlzdC52YWx1ZS5wYWdpbmF0aW9uO1xuICAgIHJlcy52YWx1ZS5zb3J0cyA9IHNlcmlhbGl6ZWRMaXN0LnZhbHVlLnNvcnRzO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMaXN0UGFnZTxUPihcbiAgbGlzdDogRW50aXRpZXNNb2RlbDxUPixcbiAgaWQ6IHN0cmluZ1xuKTogeyB2YWx1ZXM6IFRbXTsgcGFnZTogTGlzdE1vZGVsIH0ge1xuICBjb25zdCB2YWx1ZXMgPSBsaXN0Py52YWx1ZXMgfHwgW107XG4gIGNvbnN0IHBhZ2U6IExpc3RNb2RlbCA9IHtcbiAgICBpZHM6IHZhbHVlcy5tYXAoKGRhdGEpID0+IGRhdGFbaWRdKSxcbiAgfTtcbiAgaWYgKGxpc3QucGFnaW5hdGlvbikge1xuICAgIHBhZ2UucGFnaW5hdGlvbiA9IGxpc3QucGFnaW5hdGlvbjtcbiAgfVxuICBpZiAobGlzdC5zb3J0cykge1xuICAgIHBhZ2Uuc29ydHMgPSBsaXN0LnNvcnRzO1xuICB9XG4gIHJldHVybiB7IHZhbHVlcywgcGFnZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplUGFyYW1zKFxuICBwYXJhbXM6IHN0cmluZyB8IHN0cmluZ1tdLFxuICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZ1xuKTogc3RyaW5nIHtcbiAgcmV0dXJuIFtwYXJhbXMsIHNlcmlhbGl6ZVNlYXJjaENvbmZpZyhzZWFyY2hDb25maWcpXS50b1N0cmluZygpO1xufVxuIl19