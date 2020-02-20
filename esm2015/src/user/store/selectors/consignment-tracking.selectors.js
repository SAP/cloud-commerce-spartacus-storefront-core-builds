import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
const ɵ0 = (state) => state.consignmentTracking;
export const getConsignmentTrackingState = createSelector(getUserState, ɵ0);
const ɵ1 = (state) => state.tracking;
export const getConsignmentTracking = createSelector(getConsignmentTrackingState, ɵ1);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL2NvbnNpZ25tZW50LXRyYWNraW5nLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU8vRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7V0FPaEQsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CO0FBTGpELE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUdwQyxjQUFjLENBQ2hCLFlBQVksS0FFYixDQUFDO1dBT0EsQ0FBQyxLQUErQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUTtBQUxyRCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FHL0IsY0FBYyxDQUNoQiwyQkFBMkIsS0FFNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7XG4gIENvbnNpZ25tZW50VHJhY2tpbmdTdGF0ZSxcbiAgU3RhdGVXaXRoVXNlcixcbiAgVXNlclN0YXRlLFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25zaWdubWVudFRyYWNraW5nU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIENvbnNpZ25tZW50VHJhY2tpbmdTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5jb25zaWdubWVudFRyYWNraW5nXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uc2lnbm1lbnRUcmFja2luZzogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgQ29uc2lnbm1lbnRUcmFja2luZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDb25zaWdubWVudFRyYWNraW5nU3RhdGUsXG4gIChzdGF0ZTogQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlKSA9PiBzdGF0ZS50cmFja2luZ1xuKTtcbiJdfQ==