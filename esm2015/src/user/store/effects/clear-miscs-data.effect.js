import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { UserActions } from '../actions/index';
export class ClearMiscsDataEffect {
    constructor(actions$) {
        this.actions$ = actions$;
        this.clearMiscsData$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), map(() => {
            return new UserActions.ClearUserMiscsData();
        }));
    }
}
ClearMiscsDataEffect.decorators = [
    { type: Injectable }
];
ClearMiscsDataEffect.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect()
], ClearMiscsDataEffect.prototype, "clearMiscsData$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItbWlzY3MtZGF0YS5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL2VmZmVjdHMvY2xlYXItbWlzY3MtZGF0YS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLG9CQUFvQjtJQVkvQixZQUFvQixRQUFpQjtRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBVnJDLG9CQUFlLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RCxNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxrQkFBa0IsQ0FBQyxlQUFlLENBQ25DLEVBQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBRXNDLENBQUM7OztZQWIxQyxVQUFVOzs7WUFQRixPQUFPOztBQVVkO0lBREMsTUFBTSxFQUFFOzZEQVNQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGVhck1pc2NzRGF0YUVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBjbGVhck1pc2NzRGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICksXG4gICAgbWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuQ2xlYXJVc2VyTWlzY3NEYXRhKCk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zKSB7fVxufVxuIl19