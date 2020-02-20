import { SiteContextActions } from '../actions/index';
export const initialState = {
    entities: null,
    activeLanguage: null,
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case SiteContextActions.LOAD_LANGUAGES_SUCCESS: {
            const languages = action.payload;
            const entities = languages.reduce((langEntities, language) => {
                return Object.assign(Object.assign({}, langEntities), { [language.isocode]: language });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case SiteContextActions.SET_ACTIVE_LANGUAGE: {
            const isocode = action.payload;
            return Object.assign(Object.assign({}, state), { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3RELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLElBQUk7SUFDZCxjQUFjLEVBQUUsSUFBSTtDQUNyQixDQUFDO0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBMEM7SUFFMUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QyxNQUFNLFNBQVMsR0FBZSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzdDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQy9CLENBQUMsWUFBNkMsRUFBRSxRQUFrQixFQUFFLEVBQUU7Z0JBQ3BFLHVDQUNLLFlBQVksS0FDZixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLElBQzVCO1lBQ0osQ0FBQyxvQkFFSSxLQUFLLENBQUMsUUFBUSxFQUVwQixDQUFDO1lBRUYsdUNBQ0ssS0FBSyxLQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFL0IsdUNBQ0ssS0FBSyxLQUNSLGNBQWMsRUFBRSxPQUFPLElBQ3ZCO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IExhbmd1YWdlc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBMYW5ndWFnZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IG51bGwsXG4gIGFjdGl2ZUxhbmd1YWdlOiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFNpdGVDb250ZXh0QWN0aW9ucy5MYW5ndWFnZXNBY3Rpb25cbik6IExhbmd1YWdlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfTEFOR1VBR0VTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGxhbmd1YWdlczogTGFuZ3VhZ2VbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBsYW5ndWFnZXMucmVkdWNlKFxuICAgICAgICAobGFuZ0VudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBMYW5ndWFnZSB9LCBsYW5ndWFnZTogTGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubGFuZ0VudGl0aWVzLFxuICAgICAgICAgICAgW2xhbmd1YWdlLmlzb2NvZGVdOiBsYW5ndWFnZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTaXRlQ29udGV4dEFjdGlvbnMuU0VUX0FDVElWRV9MQU5HVUFHRToge1xuICAgICAgY29uc3QgaXNvY29kZSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlTGFuZ3VhZ2U6IGlzb2NvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=