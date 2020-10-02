import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { UserCostCenterConnector } from '../../connectors/cost-center/user-cost-center.connector';
import { UserActions } from '../actions/index';
export class UserCostCenterEffects {
    constructor(actions$, userCostCenterConnector) {
        this.actions$ = actions$;
        this.userCostCenterConnector = userCostCenterConnector;
        this.loadActiveCostCenters$ = this.actions$.pipe(ofType(UserActions.LOAD_ACTIVE_COST_CENTERS), map((action) => action.payload), switchMap((payload) => this.userCostCenterConnector.getActiveList(payload).pipe(
        // TODO(#8875): Should we use here serialize utils?
        map((data) => new UserActions.LoadActiveCostCentersSuccess(data.values)), catchError((error) => of(new UserActions.LoadActiveCostCentersFail(normalizeHttpError(error)))))));
    }
}
UserCostCenterEffects.decorators = [
    { type: Injectable }
];
UserCostCenterEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserCostCenterConnector }
];
__decorate([
    Effect()
], UserCostCenterEffects.prototype, "loadActiveCostCenters$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXNlci1jb3N0LWNlbnRlci5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxxQkFBcUI7SUF1QmhDLFlBQ1UsUUFBaUIsRUFDakIsdUJBQWdEO1FBRGhELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQXZCMUQsMkJBQXNCLEdBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLEVBQzVDLEdBQUcsQ0FBQyxDQUFDLE1BQXlDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDbEUsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJO1FBQ3RELG1EQUFtRDtRQUNuRCxHQUFHLENBQ0QsQ0FBQyxJQUErQixFQUFFLEVBQUUsQ0FDbEMsSUFBSSxXQUFXLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUM1RCxFQUNELFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ25CLEVBQUUsQ0FDQSxJQUFJLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNyRSxDQUNGLENBQ0YsQ0FDRixDQUNGLENBQUM7SUFLQyxDQUFDOzs7WUEzQkwsVUFBVTs7O1lBVEYsT0FBTztZQU1QLHVCQUF1Qjs7QUFNOUI7SUFEQyxNQUFNLEVBQUU7cUVBb0JQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVudGl0aWVzTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IENvc3RDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQgeyBub3JtYWxpemVIdHRwRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL25vcm1hbGl6ZS1odHRwLWVycm9yJztcbmltcG9ydCB7IFVzZXJDb3N0Q2VudGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb3N0LWNlbnRlci91c2VyLWNvc3QtY2VudGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckNvc3RDZW50ZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRBY3RpdmVDb3N0Q2VudGVycyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckNvc3RDZW50ZXJBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9BQ1RJVkVfQ09TVF9DRU5URVJTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZEFjdGl2ZUNvc3RDZW50ZXJzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PlxuICAgICAgdGhpcy51c2VyQ29zdENlbnRlckNvbm5lY3Rvci5nZXRBY3RpdmVMaXN0KHBheWxvYWQpLnBpcGUoXG4gICAgICAgIC8vIFRPRE8oIzg4NzUpOiBTaG91bGQgd2UgdXNlIGhlcmUgc2VyaWFsaXplIHV0aWxzP1xuICAgICAgICBtYXAoXG4gICAgICAgICAgKGRhdGE6IEVudGl0aWVzTW9kZWw8Q29zdENlbnRlcj4pID0+XG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZEFjdGl2ZUNvc3RDZW50ZXJzU3VjY2VzcyhkYXRhLnZhbHVlcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZEFjdGl2ZUNvc3RDZW50ZXJzRmFpbChub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckNvc3RDZW50ZXJDb25uZWN0b3I6IFVzZXJDb3N0Q2VudGVyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==