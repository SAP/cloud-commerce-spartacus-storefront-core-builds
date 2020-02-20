import { createSelector } from '@ngrx/store';
import * as fromProductSearch from '../reducers/product-search.reducer';
import { getProductsState } from './feature.selector';
const ɵ0 = (state) => state.search;
export const getProductsSearchState = createSelector(getProductsState, ɵ0);
export const getSearchResults = createSelector(getProductsSearchState, fromProductSearch.getSearchResults);
export const getAuxSearchResults = createSelector(getProductsSearchState, fromProductSearch.getAuxSearchResults);
export const getProductSuggestions = createSelector(getProductsSearchState, fromProductSearch.getProductSuggestions);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvc2VsZWN0b3JzL3Byb2R1Y3Qtc2VhcmNoLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVUvRCxPQUFPLEtBQUssaUJBQWlCLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7V0FPcEQsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTTtBQUx4QyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FHL0IsY0FBYyxDQUNoQixnQkFBZ0IsS0FFakIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUd6QixjQUFjLENBQ2hCLHNCQUFzQixFQUN0QixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FDbkMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLHNCQUFzQixFQUN0QixpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FDdEMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUc5QixjQUFjLENBQ2hCLHNCQUFzQixFQUN0QixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFN1Z2dlc3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7XG4gIFByb2R1Y3RzU2VhcmNoU3RhdGUsXG4gIFByb2R1Y3RzU3RhdGUsXG4gIFN0YXRlV2l0aFByb2R1Y3QsXG59IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbVByb2R1Y3RTZWFyY2ggZnJvbSAnLi4vcmVkdWNlcnMvcHJvZHVjdC1zZWFyY2gucmVkdWNlcic7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzU2VhcmNoU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFByb2R1Y3QsXG4gIFByb2R1Y3RzU2VhcmNoU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJvZHVjdHNTdGF0ZSxcbiAgKHN0YXRlOiBQcm9kdWN0c1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hSZXN1bHRzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBQcm9kdWN0U2VhcmNoUGFnZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQcm9kdWN0c1NlYXJjaFN0YXRlLFxuICBmcm9tUHJvZHVjdFNlYXJjaC5nZXRTZWFyY2hSZXN1bHRzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QXV4U2VhcmNoUmVzdWx0czogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2Vcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJvZHVjdHNTZWFyY2hTdGF0ZSxcbiAgZnJvbVByb2R1Y3RTZWFyY2guZ2V0QXV4U2VhcmNoUmVzdWx0c1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWdnZXN0aW9uczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgU3VnZ2VzdGlvbltdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RzU2VhcmNoU3RhdGUsXG4gIGZyb21Qcm9kdWN0U2VhcmNoLmdldFByb2R1Y3RTdWdnZXN0aW9uc1xuKTtcbiJdfQ==