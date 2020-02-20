import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { WindowRef } from '../../window/window-ref';
import * as ɵngcc0 from '@angular/core';
export declare class ExternalRoutesGuard implements CanActivate {
    protected winRef: WindowRef;
    protected platformId: Object;
    constructor(winRef: WindowRef, platformId: Object);
    /**
     * Redirects to different storefront system for anticipated URL
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    /**
     * Redirects to anticipated URL using full page reload, not Angular routing
     */
    protected redirect(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalRoutesGuard>;
}

//# sourceMappingURL=external-routes.guard.d.ts.map