import { Injectable } from '@angular/core';
import { UserReplenishmentOrderAdapter } from './user-replenishment-order.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-replenishment-order.adapter";
export class UserReplenishmentOrderConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    load(userId, replenishmentOrderCode) {
        return this.adapter.load(userId, replenishmentOrderCode);
    }
    loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort) {
        return this.adapter.loadReplenishmentDetailsHistory(userId, replenishmentOrderCode, pageSize, currentPage, sort);
    }
    cancelReplenishmentOrder(userId, replenishmentOrderCode) {
        return this.adapter.cancelReplenishmentOrder(userId, replenishmentOrderCode);
    }
    loadHistory(userId, pageSize, currentPage, sort) {
        return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
    }
}
UserReplenishmentOrderConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserReplenishmentOrderConnector_Factory() { return new UserReplenishmentOrderConnector(i0.ɵɵinject(i1.UserReplenishmentOrderAdapter)); }, token: UserReplenishmentOrderConnector, providedIn: "root" });
UserReplenishmentOrderConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserReplenishmentOrderConnector.ctorParameters = () => [
    { type: UserReplenishmentOrderAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZXBsZW5pc2htZW50LW9yZGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvY29ubmVjdG9ycy9yZXBsZW5pc2htZW50LW9yZGVyL3VzZXItcmVwbGVuaXNobWVudC1vcmRlci5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBS25GLE1BQU0sT0FBTywrQkFBK0I7SUFDMUMsWUFBc0IsT0FBc0M7UUFBdEMsWUFBTyxHQUFQLE9BQU8sQ0FBK0I7SUFBRyxDQUFDO0lBRXpELElBQUksQ0FDVCxNQUFjLEVBQ2Qsc0JBQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLCtCQUErQixDQUNwQyxNQUFjLEVBQ2Qsc0JBQThCLEVBQzlCLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLElBQWE7UUFFYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQ2pELE1BQU0sRUFDTixzQkFBc0IsRUFDdEIsUUFBUSxFQUNSLFdBQVcsRUFDWCxJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7SUFFTSx3QkFBd0IsQ0FDN0IsTUFBYyxFQUNkLHNCQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQzFDLE1BQU0sRUFDTixzQkFBc0IsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXLENBQ2hCLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7O1lBOUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbiAgUmVwbGVuaXNobWVudE9yZGVyLFxuICBSZXBsZW5pc2htZW50T3JkZXJMaXN0LFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyUmVwbGVuaXNobWVudE9yZGVyQWRhcHRlciB9IGZyb20gJy4vdXNlci1yZXBsZW5pc2htZW50LW9yZGVyLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclJlcGxlbmlzaG1lbnRPcmRlckNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyUmVwbGVuaXNobWVudE9yZGVyQWRhcHRlcikge31cblxuICBwdWJsaWMgbG9hZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXBsZW5pc2htZW50T3JkZXJDb2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXBsZW5pc2htZW50T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWQodXNlcklkLCByZXBsZW5pc2htZW50T3JkZXJDb2RlKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkUmVwbGVuaXNobWVudERldGFpbHNIaXN0b3J5KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJlcGxlbmlzaG1lbnRPcmRlckNvZGU6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFJlcGxlbmlzaG1lbnREZXRhaWxzSGlzdG9yeShcbiAgICAgIHVzZXJJZCxcbiAgICAgIHJlcGxlbmlzaG1lbnRPcmRlckNvZGUsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgc29ydFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsUmVwbGVuaXNobWVudE9yZGVyKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJlcGxlbmlzaG1lbnRPcmRlckNvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJlcGxlbmlzaG1lbnRPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2FuY2VsUmVwbGVuaXNobWVudE9yZGVyKFxuICAgICAgdXNlcklkLFxuICAgICAgcmVwbGVuaXNobWVudE9yZGVyQ29kZVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEhpc3RvcnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFJlcGxlbmlzaG1lbnRPcmRlckxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRIaXN0b3J5KHVzZXJJZCwgcGFnZVNpemUsIGN1cnJlbnRQYWdlLCBzb3J0KTtcbiAgfVxufVxuIl19