export const initialEntityState = { entities: {} };
/**
 * Higher order reducer for reusing reducer logic for multiple entities
 *
 * Utilizes entityId meta field to target entity by id in actions
 */
export function entityReducer(entityType, reducer) {
    return (state = initialEntityState, action) => {
        let ids;
        let partitionPayload = false;
        if (action.meta &&
            action.meta.entityType === entityType &&
            action.meta.entityId !== undefined) {
            ids = [].concat(action.meta.entityId);
            // remove selected entities
            if (action.meta.entityRemove) {
                if (action.meta.entityId === null) {
                    return initialEntityState;
                }
                else {
                    let removed = false;
                    const newEntities = Object.keys(state.entities).reduce((acc, cur) => {
                        if (ids.includes(cur)) {
                            removed = true;
                        }
                        else {
                            acc[cur] = state.entities[cur];
                        }
                        return acc;
                    }, {});
                    return removed ? { entities: newEntities } : state;
                }
            }
            partitionPayload =
                Array.isArray(action.meta.entityId) && Array.isArray(action.payload);
        }
        else {
            ids = Object.keys(state.entities);
        }
        const entityUpdates = {};
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            const subAction = partitionPayload
                ? Object.assign(Object.assign({}, action), { payload: action.payload[i] }) : action;
            const newState = reducer(state.entities[id], subAction);
            if (newState) {
                entityUpdates[id] = newState;
            }
        }
        if (Object.keys(entityUpdates).length > 0) {
            return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), entityUpdates) });
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFxQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUVyRTs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsVUFBa0IsRUFDbEIsT0FBd0M7SUFFeEMsT0FBTyxDQUNMLFFBQXdCLGtCQUFrQixFQUMxQyxNQUFvQixFQUNKLEVBQUU7UUFDbEIsSUFBSSxHQUFhLENBQUM7UUFDbEIsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFDRSxNQUFNLENBQUMsSUFBSTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVU7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUNsQztZQUNBLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdEMsMkJBQTJCO1lBQzNCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzVCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO29CQUNqQyxPQUFPLGtCQUFrQixDQUFDO2lCQUMzQjtxQkFBTTtvQkFDTCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3BCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTt3QkFDbEUsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDO3lCQUNoQjs2QkFBTTs0QkFDTCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDaEM7d0JBQ0QsT0FBTyxHQUFHLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUVQLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUNwRDthQUNGO1lBRUQsZ0JBQWdCO2dCQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsTUFBTSxhQUFhLEdBQXdCLEVBQUUsQ0FBQztRQUU5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCO2dCQUNoQyxDQUFDLGlDQUFNLE1BQU0sS0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNYLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELElBQUksUUFBUSxFQUFFO2dCQUNaLGFBQWEsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7YUFDOUI7U0FDRjtRQUVELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLHVDQUNLLEtBQUssS0FDUixRQUFRLGtDQUFPLEtBQUssQ0FBQyxRQUFRLEdBQUssYUFBYSxLQUMvQztTQUNIO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJy4vZW50aXR5LXN0YXRlJztcbmltcG9ydCB7IEVudGl0eUFjdGlvbiB9IGZyb20gJy4vZW50aXR5LmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsRW50aXR5U3RhdGU6IEVudGl0eVN0YXRlPGFueT4gPSB7IGVudGl0aWVzOiB7fSB9O1xuXG4vKipcbiAqIEhpZ2hlciBvcmRlciByZWR1Y2VyIGZvciByZXVzaW5nIHJlZHVjZXIgbG9naWMgZm9yIG11bHRpcGxlIGVudGl0aWVzXG4gKlxuICogVXRpbGl6ZXMgZW50aXR5SWQgbWV0YSBmaWVsZCB0byB0YXJnZXQgZW50aXR5IGJ5IGlkIGluIGFjdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVJlZHVjZXI8VD4oXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgcmVkdWNlcjogKHN0YXRlOiBULCBhY3Rpb246IEFjdGlvbikgPT4gVFxuKSB7XG4gIHJldHVybiAoXG4gICAgc3RhdGU6IEVudGl0eVN0YXRlPFQ+ID0gaW5pdGlhbEVudGl0eVN0YXRlLFxuICAgIGFjdGlvbjogRW50aXR5QWN0aW9uXG4gICk6IEVudGl0eVN0YXRlPFQ+ID0+IHtcbiAgICBsZXQgaWRzOiBzdHJpbmdbXTtcbiAgICBsZXQgcGFydGl0aW9uUGF5bG9hZCA9IGZhbHNlO1xuICAgIGlmIChcbiAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlID09PSBlbnRpdHlUeXBlICYmXG4gICAgICBhY3Rpb24ubWV0YS5lbnRpdHlJZCAhPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBpZHMgPSBbXS5jb25jYXQoYWN0aW9uLm1ldGEuZW50aXR5SWQpO1xuXG4gICAgICAvLyByZW1vdmUgc2VsZWN0ZWQgZW50aXRpZXNcbiAgICAgIGlmIChhY3Rpb24ubWV0YS5lbnRpdHlSZW1vdmUpIHtcbiAgICAgICAgaWYgKGFjdGlvbi5tZXRhLmVudGl0eUlkID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGluaXRpYWxFbnRpdHlTdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnN0IG5ld0VudGl0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmIChpZHMuaW5jbHVkZXMoY3VyKSkge1xuICAgICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFjY1tjdXJdID0gc3RhdGUuZW50aXRpZXNbY3VyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgcmV0dXJuIHJlbW92ZWQgPyB7IGVudGl0aWVzOiBuZXdFbnRpdGllcyB9IDogc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFydGl0aW9uUGF5bG9hZCA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkoYWN0aW9uLm1ldGEuZW50aXR5SWQpICYmIEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZHMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW50aXR5VXBkYXRlczogeyBbaWQ6IHN0cmluZ106IFQgfSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gaWRzW2ldO1xuICAgICAgY29uc3Qgc3ViQWN0aW9uID0gcGFydGl0aW9uUGF5bG9hZFxuICAgICAgICA/IHsgLi4uYWN0aW9uLCBwYXlsb2FkOiBhY3Rpb24ucGF5bG9hZFtpXSB9XG4gICAgICAgIDogYWN0aW9uO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLmVudGl0aWVzW2lkXSwgc3ViQWN0aW9uKTtcbiAgICAgIGlmIChuZXdTdGF0ZSkge1xuICAgICAgICBlbnRpdHlVcGRhdGVzW2lkXSA9IG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhlbnRpdHlVcGRhdGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXM6IHsgLi4uc3RhdGUuZW50aXRpZXMsIC4uLmVudGl0eVVwZGF0ZXMgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufVxuIl19