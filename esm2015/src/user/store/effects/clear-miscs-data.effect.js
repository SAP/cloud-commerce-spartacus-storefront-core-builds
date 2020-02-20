import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { UserActions } from '../actions/index';
let ClearMiscsDataEffect = class ClearMiscsDataEffect {
    constructor(actions$) {
        this.actions$ = actions$;
        this.clearMiscsData$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), map(() => {
            return new UserActions.ClearUserMiscsData();
        }));
    }
};
ClearMiscsDataEffect.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect()
], ClearMiscsDataEffect.prototype, "clearMiscsData$", void 0);
ClearMiscsDataEffect = __decorate([
    Injectable()
], ClearMiscsDataEffect);
export { ClearMiscsDataEffect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItbWlzY3MtZGF0YS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL2NsZWFyLW1pc2NzLWRhdGEuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBWS9CLFlBQW9CLFFBQWlCO1FBQWpCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFWckMsb0JBQWUsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RELE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLGtCQUFrQixDQUFDLGVBQWUsQ0FDbkMsRUFDRCxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFc0MsQ0FBQztDQUMxQyxDQUFBOztZQUQrQixPQUFPOztBQVZyQztJQURDLE1BQU0sRUFBRTs2REFTUDtBQVZTLG9CQUFvQjtJQURoQyxVQUFVLEVBQUU7R0FDQSxvQkFBb0IsQ0FhaEM7U0FiWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsZWFyTWlzY3NEYXRhRWZmZWN0IHtcbiAgQEVmZmVjdCgpXG4gIGNsZWFyTWlzY3NEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFXG4gICAgKSxcbiAgICBtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5DbGVhclVzZXJNaXNjc0RhdGEoKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMpIHt9XG59XG4iXX0=