import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
var currenciesEntitiesSelector = function (state) { return state.entities; };
var ɵ0 = currenciesEntitiesSelector;
var activeCurrencySelector = function (state) { return state.activeCurrency; };
var ɵ1 = activeCurrencySelector;
var ɵ2 = function (state) { return state.currencies; };
export var getCurrenciesState = createSelector(getSiteContextState, ɵ2);
export var getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
export var getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
var ɵ3 = function (entities) {
    return entities
        ? Object.keys(entities).map(function (isocode) { return entities[isocode]; })
        : null;
};
export var getAllCurrencies = createSelector(getCurrenciesEntities, ɵ3);
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3NlbGVjdG9ycy9jdXJyZW5jaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxJQUFNLDBCQUEwQixHQUFHLFVBQUMsS0FBc0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDOztBQUM5RSxJQUFNLHNCQUFzQixHQUFHLFVBQUMsS0FBc0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQXBCLENBQW9CLENBQUM7O1NBTzlFLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCO0FBTC9DLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLG1CQUFtQixLQUVwQixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsa0JBQWtCLEVBQ2xCLDBCQUEwQixDQUMzQixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsa0JBQWtCLEVBQ2xCLHNCQUFzQixDQUN2QixDQUFDO1NBT0EsVUFBQSxRQUFRO0lBQ04sT0FBTyxRQUFRO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFqQixDQUFpQixDQUFDO1FBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDO0FBVEgsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FDaEIscUJBQXFCLEtBTXRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDdXJyZW5jaWVzU3RhdGUsXG4gIEN1cnJlbmN5RW50aXRpZXMsXG4gIFNpdGVDb250ZXh0U3RhdGUsXG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxufSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBnZXRTaXRlQ29udGV4dFN0YXRlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuc2VsZWN0b3InO1xuXG5jb25zdCBjdXJyZW5jaWVzRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogQ3VycmVuY2llc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcztcbmNvbnN0IGFjdGl2ZUN1cnJlbmN5U2VsZWN0b3IgPSAoc3RhdGU6IEN1cnJlbmNpZXNTdGF0ZSkgPT4gc3RhdGUuYWN0aXZlQ3VycmVuY3k7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW5jaWVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBDdXJyZW5jaWVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0U2l0ZUNvbnRleHRTdGF0ZSxcbiAgKHN0YXRlOiBTaXRlQ29udGV4dFN0YXRlKSA9PiBzdGF0ZS5jdXJyZW5jaWVzXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVuY2llc0VudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgQ3VycmVuY3lFbnRpdGllc1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDdXJyZW5jaWVzU3RhdGUsXG4gIGN1cnJlbmNpZXNFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlQ3VycmVuY3k6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q3VycmVuY2llc1N0YXRlLFxuICBhY3RpdmVDdXJyZW5jeVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ3VycmVuY2llczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIEN1cnJlbmN5W11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q3VycmVuY2llc0VudGl0aWVzLFxuICBlbnRpdGllcyA9PiB7XG4gICAgcmV0dXJuIGVudGl0aWVzXG4gICAgICA/IE9iamVjdC5rZXlzKGVudGl0aWVzKS5tYXAoaXNvY29kZSA9PiBlbnRpdGllc1tpc29jb2RlXSlcbiAgICAgIDogbnVsbDtcbiAgfVxuKTtcbiJdfQ==