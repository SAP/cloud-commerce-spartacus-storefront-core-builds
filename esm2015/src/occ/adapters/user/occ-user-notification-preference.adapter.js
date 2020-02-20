import { __decorate } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NOTIFICATION_PREFERENCE_NORMALIZER, NOTIFICATION_PREFERENCE_SERIALIZER, } from '../../../user/connectors/notification-preference';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
});
let OccUserNotificationPreferenceAdapter = class OccUserNotificationPreferenceAdapter {
    constructor(http, converter, occEndpoints) {
        this.http = http;
        this.converter = converter;
        this.occEndpoints = occEndpoints;
    }
    loadAll(userId) {
        return this.http
            .get(this.occEndpoints.getUrl('notificationPreference', { userId }), {
            headers,
        })
            .pipe(map(list => list.preferences), this.converter.pipeableMany(NOTIFICATION_PREFERENCE_NORMALIZER), catchError((error) => throwError(error)));
    }
    update(userId, preferences) {
        preferences = this.converter.convert(preferences, NOTIFICATION_PREFERENCE_SERIALIZER);
        return this.http
            .patch(this.occEndpoints.getUrl('notificationPreference', { userId }), { preferences: preferences }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
};
OccUserNotificationPreferenceAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: ConverterService },
    { type: OccEndpointsService }
];
OccUserNotificationPreferenceAdapter = __decorate([
    Injectable()
], OccUserNotificationPreferenceAdapter);
export { OccUserNotificationPreferenceAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2pELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsa0NBQWtDLEdBQ25DLE1BQU0sa0RBQWtELENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7SUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtDQUNuQyxDQUFDLENBQUM7QUFHSCxJQUFhLG9DQUFvQyxHQUFqRCxNQUFhLG9DQUFvQztJQUUvQyxZQUNZLElBQWdCLEVBQ2hCLFNBQTJCLEVBQzNCLFlBQWlDO1FBRmpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQzFDLENBQUM7SUFFSixPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFDOUQ7WUFDRSxPQUFPO1NBQ1IsQ0FDRjthQUNBLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGtDQUFrQyxDQUFDLEVBQy9ELFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzlDLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUNKLE1BQWMsRUFDZCxXQUFxQztRQUVyQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ2xDLFdBQVcsRUFDWCxrQ0FBa0MsQ0FDbkMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixLQUFLLENBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUM5RCxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFDNUIsRUFBRSxPQUFPLEVBQUUsQ0FDWjthQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7O1lBcENtQixVQUFVO1lBQ0wsZ0JBQWdCO1lBQ2IsbUJBQW1COztBQUxsQyxvQ0FBb0M7SUFEaEQsVUFBVSxFQUFFO0dBQ0Esb0NBQW9DLENBdUNoRDtTQXZDWSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE5vdGlmaWNhdGlvblByZWZlcmVuY2UsXG4gIE5vdGlmaWNhdGlvblByZWZlcmVuY2VMaXN0LFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5tb2RlbCc7XG5pbXBvcnQge1xuICBOT1RJRklDQVRJT05fUFJFRkVSRU5DRV9OT1JNQUxJWkVSLFxuICBOT1RJRklDQVRJT05fUFJFRkVSRU5DRV9TRVJJQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UnO1xuaW1wb3J0IHsgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG59KTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlclxuICBpbXBsZW1lbnRzIFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgbG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxOb3RpZmljYXRpb25QcmVmZXJlbmNlTGlzdD4oXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnbm90aWZpY2F0aW9uUHJlZmVyZW5jZScsIHsgdXNlcklkIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChsaXN0ID0+IGxpc3QucHJlZmVyZW5jZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VfTk9STUFMSVpFUiksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBwcmVmZXJlbmNlcyA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIE5PVElGSUNBVElPTl9QUkVGRVJFTkNFX1NFUklBTElaRVJcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChcbiAgICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdub3RpZmljYXRpb25QcmVmZXJlbmNlJywgeyB1c2VySWQgfSksXG4gICAgICAgIHsgcHJlZmVyZW5jZXM6IHByZWZlcmVuY2VzIH0sXG4gICAgICAgIHsgaGVhZGVycyB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=