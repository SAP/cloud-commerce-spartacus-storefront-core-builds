import { Injectable } from '@angular/core';
import { Config } from '../../config/config-tokens';
import { OccConfig } from '../../occ/config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config-tokens";
export const JSP_INCLUDE_CMS_COMPONENT_TYPE = 'JspIncludeComponent';
export const CMS_FLEX_COMPONENT_TYPE = 'CMSFlexComponent';
/** Strategy to control the loading strategy of DOM elements. */
export var DeferLoadingStrategy;
(function (DeferLoadingStrategy) {
    /** Defers loading of DOM elements until element is near/in the users view port */
    DeferLoadingStrategy["DEFER"] = "DEFERRED-LOADING";
    /** Renders the DOM instantly without being concerned with the view port */
    DeferLoadingStrategy["INSTANT"] = "INSTANT-LOADING";
})(DeferLoadingStrategy || (DeferLoadingStrategy = {}));
export class CmsConfig extends OccConfig {
}
CmsConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: CmsConfig, providedIn: "root" });
CmsConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useExisting: Config,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Ntcy9jb25maWcvY21zLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUErQnhELE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHLHFCQUFxQixDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLGtCQUFrQixDQUFDO0FBaUMxRCxnRUFBZ0U7QUFDaEUsTUFBTSxDQUFOLElBQVksb0JBS1g7QUFMRCxXQUFZLG9CQUFvQjtJQUM5QixrRkFBa0Y7SUFDbEYsa0RBQTBCLENBQUE7SUFDMUIsMkVBQTJFO0lBQzNFLG1EQUEyQixDQUFBO0FBQzdCLENBQUMsRUFMVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBSy9CO0FBMkJELE1BQU0sT0FBZ0IsU0FBVSxTQUFRLFNBQVM7Ozs7WUFKaEQsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixXQUFXLEVBQUUsTUFBTTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLXRva2Vucyc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkQ21zQ29tcG9uZW50Q29uZmlnIHtcbiAgQ01TU2l0ZUNvbnRleHRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBDTVNMaW5rQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgU2ltcGxlUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNpbXBsZUJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEJhbm5lckNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENNU1BhcmFncmFwaENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIEJyZWFkY3J1bWJDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBOYXZpZ2F0aW9uQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIENhdGVnb3J5TmF2aWdhdGlvbkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RBZGRUb0NhcnRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBNaW5pQ2FydENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFNlYXJjaEJveENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgQ01TVGFiUGFyYWdyYXBoQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbiAgTG9naW5Db21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpzcEluY2x1ZGVDbXNDb21wb25lbnRDb25maWcge1xuICBBY2NvdW50QWRkcmVzc0Jvb2tDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFJlc2V0UGFzc3dvcmRDb21wb25lbnQ/OiBDbXNDb21wb25lbnRNYXBwaW5nO1xuICBQcm9kdWN0RGV0YWlsc1RhYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RTcGVjc1RhYkNvbXBvbmVudD86IENtc0NvbXBvbmVudE1hcHBpbmc7XG4gIFByb2R1Y3RSZXZpZXdzVGFiQ29tcG9uZW50PzogQ21zQ29tcG9uZW50TWFwcGluZztcbn1cblxuZXhwb3J0IGNvbnN0IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSA9ICdKc3BJbmNsdWRlQ29tcG9uZW50JztcbmV4cG9ydCBjb25zdCBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSA9ICdDTVNGbGV4Q29tcG9uZW50JztcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIG9mIHRoZSBDTVMgY29tcG9uZW50J3MgY2hpbGQgcm91dGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ21zQ29tcG9uZW50Q2hpbGRSb3V0ZXNDb25maWcge1xuICAvKipcbiAgICogUm91dGUgYGRhdGFgIHByb3BlcnR5IHRvIGFwcGx5IG9uIHRoZSBwYXJlbnQgKGhvc3QpIHJvdXRlIG9mIHRoZSBDTVMgY2hpbGQgcm91dGVzLlxuICAgKi9cbiAgcGFyZW50PzogUGljazxSb3V0ZSwgJ2RhdGEnPjtcblxuICAvKipcbiAgICogQ2hpbGQgcm91dGVzIGRlZmluZWQgYnkgdGhlIGV4aXN0ZW5jZSBvZiB0aGUgQ01TIGNvbXBvbmVudCBvbiB0aGUgcGFnZS5cbiAgICovXG4gIGNoaWxkcmVuPzogUm91dGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbXNDb21wb25lbnRNYXBwaW5nIHtcbiAgY29tcG9uZW50PzogYW55O1xuICBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdO1xuICBjaGlsZFJvdXRlcz86IFJvdXRlW10gfCBDbXNDb21wb25lbnRDaGlsZFJvdXRlc0NvbmZpZztcbiAgZGlzYWJsZVNTUj86IGJvb2xlYW47XG4gIGkxOG5LZXlzPzogc3RyaW5nW107XG4gIGd1YXJkcz86IGFueVtdO1xuXG4gIC8qKlxuICAgKiBEZWZlckxvYWRpbmcgY2FuIGJlIHNwZWNpZmllZCBnbG9iYWxseSwgYnV0IGFsc28gcGVyIGNvbXBvbmVudC5cbiAgICogU29tZSBjb21wb25lbnRzIHJlcXVpcmUgZGlyZWN0IGxvYWRpbmcgd2hpbGUgaXQncyBub3QgaW5pdGlhbGx5XG4gICAqIGluIHRoZSB2aWV3cG9ydC5cbiAgICovXG4gIGRlZmVyTG9hZGluZz86IERlZmVyTG9hZGluZ1N0cmF0ZWd5O1xufVxuXG4vKiogU3RyYXRlZ3kgdG8gY29udHJvbCB0aGUgbG9hZGluZyBzdHJhdGVneSBvZiBET00gZWxlbWVudHMuICovXG5leHBvcnQgZW51bSBEZWZlckxvYWRpbmdTdHJhdGVneSB7XG4gIC8qKiBEZWZlcnMgbG9hZGluZyBvZiBET00gZWxlbWVudHMgdW50aWwgZWxlbWVudCBpcyBuZWFyL2luIHRoZSB1c2VycyB2aWV3IHBvcnQgKi9cbiAgREVGRVIgPSAnREVGRVJSRUQtTE9BRElORycsXG4gIC8qKiBSZW5kZXJzIHRoZSBET00gaW5zdGFudGx5IHdpdGhvdXQgYmVpbmcgY29uY2VybmVkIHdpdGggdGhlIHZpZXcgcG9ydCAqL1xuICBJTlNUQU5UID0gJ0lOU1RBTlQtTE9BRElORycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ01TQ29tcG9uZW50Q29uZmlnXG4gIGV4dGVuZHMgU3RhbmRhcmRDbXNDb21wb25lbnRDb25maWcsXG4gICAgSnNwSW5jbHVkZUNtc0NvbXBvbmVudENvbmZpZyB7XG4gIFtjb21wb25lbnRUeXBlOiBzdHJpbmddOiBDbXNDb21wb25lbnRNYXBwaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVNb2R1bGVDb25maWcge1xuICAvKipcbiAgICogTGF6eSByZXNvbHZlZCBmZWF0dXJlIG1vZHVsZVxuICAgKi9cbiAgbW9kdWxlPzogKCkgPT4gUHJvbWlzZTxhbnk+O1xuICAvKipcbiAgICogTGF6eSByZXNvbHZlZCBkZXBlbmRlbmN5IG1vZHVsZXNcbiAgICovXG4gIGRlcGVuZGVuY2llcz86ICgoKSA9PiBQcm9taXNlPGFueT4pW107XG4gIC8qKlxuICAgKiBDbXMgY29tcG9uZW50cyBjb3ZlcmVkIGJ5IHRoaXMgZmVhdHVyZVxuICAgKi9cbiAgY21zQ29tcG9uZW50cz86IHN0cmluZ1tdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zQ29uZmlnIGV4dGVuZHMgT2NjQ29uZmlnIHtcbiAgZmVhdHVyZU1vZHVsZXM/OiB7IFtmZWF0dXJlTmFtZTogc3RyaW5nXTogRmVhdHVyZU1vZHVsZUNvbmZpZyB9O1xuICBjbXNDb21wb25lbnRzPzogQ01TQ29tcG9uZW50Q29uZmlnO1xufVxuIl19