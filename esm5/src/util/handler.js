import { __read, __spread } from "tslib";
/**
 * Helper logic to resolve best matching handler
 *
 * Finding best match is a two step process:
 * 1. Find all matching handlers
 *    - all handlers for which hasMatch(...matchParams) will return true
 *    - all handlers without hasMatch method (implicit always match)
 * 2. Find the handler with highest priority
 *    - handler with highest getPriority(...priorityParams) will win
 *    - handler without getPriority method is treated as Priotity.NORMAL or 0
 *    - handlers with the same priority are sorted by order of providers, the handler that was provided later wins
 *
 * @param handlers - array or handler-like instancese
 * @param matchParams - array of parameters passed for hasMatch calls
 * @param priorityParams - array of parameters passed for getPriority calls
 */
export function resolveHandler(handlers, matchParams, priorityParams) {
    var matchedHandlers = (handlers !== null && handlers !== void 0 ? handlers : []).filter(function (handler) { return !handler.hasMatch || handler.hasMatch.apply(handler, __spread(matchParams)); });
    if (matchedHandlers.length > 1) {
        matchedHandlers.sort(function (a, b) {
            return (a.getPriority ? a.getPriority.apply(a, __spread(priorityParams)) : 0) -
                (b.getPriority ? b.getPriority.apply(b, __spread(priorityParams)) : 0);
        });
    }
    return matchedHandlers[matchedHandlers.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQXlCQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUM1QixRQUFhLEVBQ2IsV0FBbUIsRUFDbkIsY0FBc0I7SUFFdEIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFRLGFBQVIsUUFBUSxjQUFSLFFBQVEsR0FBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQzdDLFVBQUMsT0FBTyxJQUFLLE9BQUEsQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLE9BQWhCLE9BQU8sV0FBYSxXQUFXLEVBQUMsRUFBckQsQ0FBcUQsQ0FDbkUsQ0FBQztJQUNGLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUIsZUFBZSxDQUFDLElBQUksQ0FDbEIsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNILE9BQUEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxPQUFiLENBQUMsV0FBZ0IsY0FBYyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsT0FBYixDQUFDLFdBQWdCLGNBQWMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRHRELENBQ3NELENBQ3pELENBQUM7S0FDSDtJQUNELE9BQU8sZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbnVtIFByaW9yaXR5IHtcbiAgRkFMTEJBQ0sgPSAtNTAsIC8vIHVzZWQgYXMgZmFsbGJhY2ssIHdoZW4gdGhlcmUgaXMgbm8gb3RoZXIgbWF0Y2hlc1xuICBMT1cgPSAtMTAsIC8vIHVzZWQgbWFpbmx5IGluIGxpYnJhcmllcywgZWFzeSBvdmVycmlkYWJsZVxuICBOT1JNQUwgPSAwLCAvLyBkZWZhdWx0IGluIGFwcGxpY2F0aW9uXG4gIEhJR0ggPSAxMCwgLy8gc2hvdWxkIHRha2UgcHJlY2VkZW5jZVxufVxuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBpbXBsZW1lbnRpbmcgaGFuZGxlcnMgaW4gYSBjb25zaXN0ZW50IHdheVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRsZXIge1xuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGhhbmRsZXIgY2FuIGJlIHVzZWQgdG8gaGFuZGxlIHNwZWNpZmllZCBjb25kaXRpb25cbiAgICovXG4gIGhhc01hdGNoPyguLi5wYXJhbXMpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHByaW9yaXR5IG9yIHNjb3JlIGZvciBzcGVjaWZpZWQgaGFuZGxlci5cbiAgICpcbiAgICogSWYgbXVsdGlwbGUgaGFuZGxlcnMgY2FuIGJlIHVzZWQgdG8gaGFuZGxlIHNwZWNpZmllZCBjb25kaXRpb24sIHRoZSBvbmVcbiAgICogd2l0aCBoaWdoZXN0IHByaW9yaXR5IG9yIHNjb3JlIHdpbnMuXG4gICAqL1xuICBnZXRQcmlvcml0eT8oLi4ucGFyYW1zKTogUHJpb3JpdHkgfCBudW1iZXI7XG59XG5cbi8qKlxuICogSGVscGVyIGxvZ2ljIHRvIHJlc29sdmUgYmVzdCBtYXRjaGluZyBoYW5kbGVyXG4gKlxuICogRmluZGluZyBiZXN0IG1hdGNoIGlzIGEgdHdvIHN0ZXAgcHJvY2VzczpcbiAqIDEuIEZpbmQgYWxsIG1hdGNoaW5nIGhhbmRsZXJzXG4gKiAgICAtIGFsbCBoYW5kbGVycyBmb3Igd2hpY2ggaGFzTWF0Y2goLi4ubWF0Y2hQYXJhbXMpIHdpbGwgcmV0dXJuIHRydWVcbiAqICAgIC0gYWxsIGhhbmRsZXJzIHdpdGhvdXQgaGFzTWF0Y2ggbWV0aG9kIChpbXBsaWNpdCBhbHdheXMgbWF0Y2gpXG4gKiAyLiBGaW5kIHRoZSBoYW5kbGVyIHdpdGggaGlnaGVzdCBwcmlvcml0eVxuICogICAgLSBoYW5kbGVyIHdpdGggaGlnaGVzdCBnZXRQcmlvcml0eSguLi5wcmlvcml0eVBhcmFtcykgd2lsbCB3aW5cbiAqICAgIC0gaGFuZGxlciB3aXRob3V0IGdldFByaW9yaXR5IG1ldGhvZCBpcyB0cmVhdGVkIGFzIFByaW90aXR5Lk5PUk1BTCBvciAwXG4gKiAgICAtIGhhbmRsZXJzIHdpdGggdGhlIHNhbWUgcHJpb3JpdHkgYXJlIHNvcnRlZCBieSBvcmRlciBvZiBwcm92aWRlcnMsIHRoZSBoYW5kbGVyIHRoYXQgd2FzIHByb3ZpZGVkIGxhdGVyIHdpbnNcbiAqXG4gKiBAcGFyYW0gaGFuZGxlcnMgLSBhcnJheSBvciBoYW5kbGVyLWxpa2UgaW5zdGFuY2VzZVxuICogQHBhcmFtIG1hdGNoUGFyYW1zIC0gYXJyYXkgb2YgcGFyYW1ldGVycyBwYXNzZWQgZm9yIGhhc01hdGNoIGNhbGxzXG4gKiBAcGFyYW0gcHJpb3JpdHlQYXJhbXMgLSBhcnJheSBvZiBwYXJhbWV0ZXJzIHBhc3NlZCBmb3IgZ2V0UHJpb3JpdHkgY2FsbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIYW5kbGVyPFQgZXh0ZW5kcyBIYW5kbGVyPihcbiAgaGFuZGxlcnM6IFRbXSxcbiAgbWF0Y2hQYXJhbXM/OiBhbnlbXSxcbiAgcHJpb3JpdHlQYXJhbXM/OiBhbnlbXVxuKTogVCB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IG1hdGNoZWRIYW5kbGVycyA9IChoYW5kbGVycyA/PyBbXSkuZmlsdGVyKFxuICAgIChoYW5kbGVyKSA9PiAhaGFuZGxlci5oYXNNYXRjaCB8fCBoYW5kbGVyLmhhc01hdGNoKC4uLm1hdGNoUGFyYW1zKVxuICApO1xuICBpZiAobWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCA+IDEpIHtcbiAgICBtYXRjaGVkSGFuZGxlcnMuc29ydChcbiAgICAgIChhLCBiKSA9PlxuICAgICAgICAoYS5nZXRQcmlvcml0eSA/IGEuZ2V0UHJpb3JpdHkoLi4ucHJpb3JpdHlQYXJhbXMpIDogMCkgLVxuICAgICAgICAoYi5nZXRQcmlvcml0eSA/IGIuZ2V0UHJpb3JpdHkoLi4ucHJpb3JpdHlQYXJhbXMpIDogMClcbiAgICApO1xuICB9XG4gIHJldHVybiBtYXRjaGVkSGFuZGxlcnNbbWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCAtIDFdO1xufVxuIl19