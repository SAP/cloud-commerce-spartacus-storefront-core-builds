import { AnonymousConsentsActions } from '../actions/index';
export const initialState = false;
export function reducer(state = initialState, action) {
    switch (action.type) {
        case AnonymousConsentsActions.TOGGLE_ANONYMOUS_CONSENT_TEMPLATES_UPDATED: {
            return action.updated;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXVwZGF0ZS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Fub255bW91cy1jb25zZW50cy9zdG9yZS9yZWR1Y2Vycy9hbm9ueW1vdXMtY29uc2VudHMtdXBkYXRlLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUVsQyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUF1RTtJQUV2RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyx3QkFBd0IsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5Ub2dnbGVBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzVXBkYXRlZFxuKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5UT0dHTEVfQU5PTllNT1VTX0NPTlNFTlRfVEVNUExBVEVTX1VQREFURUQ6IHtcbiAgICAgIHJldHVybiBhY3Rpb24udXBkYXRlZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=