import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserInterestsAdapter } from './user-interests.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-interests.adapter";
let UserInterestsConnector = class UserInterestsConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getInterests(userId, pageSize, currentPage, sort, productCode, notificationType) {
        return this.adapter.getInterests(userId, pageSize, currentPage, sort, productCode, notificationType);
    }
    removeInterest(userId, item) {
        return this.adapter.removeInterest(userId, item);
    }
    addInterest(userId, productCode, notificationType) {
        return this.adapter.addInterest(userId, productCode, notificationType);
    }
};
UserInterestsConnector.ctorParameters = () => [
    { type: UserInterestsAdapter }
];
UserInterestsConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserInterestsConnector_Factory() { return new UserInterestsConnector(i0.ɵɵinject(i1.UserInterestsAdapter)); }, token: UserInterestsConnector, providedIn: "root" });
UserInterestsConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserInterestsConnector);
export { UserInterestsConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvY29ubmVjdG9ycy9pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFXaEUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFBc0IsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDO0lBQ3ZELFlBQVksQ0FDVixNQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsSUFBYSxFQUNiLFdBQW9CLEVBQ3BCLGdCQUFtQztRQUVuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUM5QixNQUFNLEVBQ04sUUFBUSxFQUNSLFdBQVcsRUFDWCxJQUFJLEVBQ0osV0FBVyxFQUNYLGdCQUFnQixDQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVELGNBQWMsQ0FDWixNQUFjLEVBQ2QsSUFBa0M7UUFFbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFdBQVcsQ0FDVCxNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsZ0JBQWtDO1FBRWxDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDRixDQUFBOztZQWpDZ0Msb0JBQW9COzs7QUFEeEMsc0JBQXNCO0lBSGxDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxzQkFBc0IsQ0FrQ2xDO1NBbENZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNBZGFwdGVyIH0gZnJvbSAnLi91c2VyLWludGVyZXN0cy5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCxcbiAgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgTm90aWZpY2F0aW9uVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VySW50ZXJlc3RzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJJbnRlcmVzdHNBZGFwdGVyKSB7fVxuICBnZXRJbnRlcmVzdHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZT86IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlPzogTm90aWZpY2F0aW9uVHlwZVxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0SW50ZXJlc3RzKFxuICAgICAgdXNlcklkLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBjdXJyZW50UGFnZSxcbiAgICAgIHNvcnQsXG4gICAgICBwcm9kdWN0Q29kZSxcbiAgICAgIG5vdGlmaWNhdGlvblR5cGVcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlSW50ZXJlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgaXRlbTogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvblxuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZW1vdmVJbnRlcmVzdCh1c2VySWQsIGl0ZW0pO1xuICB9XG5cbiAgYWRkSW50ZXJlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlOiBOb3RpZmljYXRpb25UeXBlXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5hZGRJbnRlcmVzdCh1c2VySWQsIHByb2R1Y3RDb2RlLCBub3RpZmljYXRpb25UeXBlKTtcbiAgfVxufVxuIl19