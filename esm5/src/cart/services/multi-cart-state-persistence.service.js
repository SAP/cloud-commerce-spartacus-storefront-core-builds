import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { distinctUntilKeyChanged, filter, map } from 'rxjs/operators';
import { BASE_SITE_CONTEXT_ID } from '../../site-context';
import { SiteContextParamsService } from '../../site-context/services/site-context-params.service';
import { StatePersistenceService } from '../../state/services/state-persistence.service';
import { CartActions, MultiCartSelectors } from '../store';
import * as i0 from "@angular/core";
import * as i1 from "../../state/services/state-persistence.service";
import * as i2 from "@ngrx/store";
import * as i3 from "../../site-context/services/site-context-params.service";
var MultiCartStatePersistenceService = /** @class */ (function () {
    function MultiCartStatePersistenceService(statePersistenceService, store, siteContextParamsService) {
        this.statePersistenceService = statePersistenceService;
        this.store = store;
        this.siteContextParamsService = siteContextParamsService;
    }
    MultiCartStatePersistenceService.prototype.sync = function () {
        var _this = this;
        this.statePersistenceService.syncWithStorage({
            key: 'cart',
            state$: this.getCartState(),
            context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]),
            onRead: function (state) { return _this.onRead(state); },
        });
    };
    MultiCartStatePersistenceService.prototype.getCartState = function () {
        return this.store.pipe(select(MultiCartSelectors.getMultiCartState), filter(function (state) { return !!state; }), distinctUntilKeyChanged('active'), map(function (state) {
            return {
                active: state.active,
            };
        }));
    };
    MultiCartStatePersistenceService.prototype.onRead = function (state) {
        this.store.dispatch(new CartActions.ClearCartState());
        if (state) {
            this.store.dispatch(new CartActions.SetActiveCartId(state.active));
        }
    };
    MultiCartStatePersistenceService.ctorParameters = function () { return [
        { type: StatePersistenceService },
        { type: Store },
        { type: SiteContextParamsService }
    ]; };
    MultiCartStatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MultiCartStatePersistenceService_Factory() { return new MultiCartStatePersistenceService(i0.ɵɵinject(i1.StatePersistenceService), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.SiteContextParamsService)); }, token: MultiCartStatePersistenceService, providedIn: "root" });
    MultiCartStatePersistenceService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], MultiCartStatePersistenceService);
    return MultiCartStatePersistenceService;
}());
export { MultiCartStatePersistenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc2VydmljZXMvbXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFNM0Q7SUFDRSwwQ0FDWSx1QkFBZ0QsRUFDaEQsS0FBZ0MsRUFDaEMsd0JBQWtEO1FBRmxELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUMzRCxDQUFDO0lBRUcsK0NBQUksR0FBWDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztZQUMzQyxHQUFHLEVBQUUsTUFBTTtZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN6RSxNQUFNLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQjtTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsdURBQVksR0FBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsRUFDNUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsRUFDMUIsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEVBQ2pDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDUixPQUFPO2dCQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTthQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFUyxpREFBTSxHQUFoQixVQUFpQixLQUF5QjtRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Z0JBaENvQyx1QkFBdUI7Z0JBQ3pDLEtBQUs7Z0JBQ2Msd0JBQXdCOzs7SUFKbkQsZ0NBQWdDO1FBSDVDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQ0FBZ0MsQ0FtQzVDOzJDQWhERDtDQWdEQyxBQW5DRCxJQW1DQztTQW5DWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3NlcnZpY2VzL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL3NlcnZpY2VzL3N0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMsIE11bHRpQ2FydFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PixcbiAgICBwcm90ZWN0ZWQgc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBzeW5jKCkge1xuICAgIHRoaXMuc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uuc3luY1dpdGhTdG9yYWdlKHtcbiAgICAgIGtleTogJ2NhcnQnLFxuICAgICAgc3RhdGUkOiB0aGlzLmdldENhcnRTdGF0ZSgpLFxuICAgICAgY29udGV4dCQ6IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLmdldFZhbHVlcyhbQkFTRV9TSVRFX0NPTlRFWFRfSURdKSxcbiAgICAgIG9uUmVhZDogKHN0YXRlKSA9PiB0aGlzLm9uUmVhZChzdGF0ZSksXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2FydFN0YXRlKCk6IE9ic2VydmFibGU8eyBhY3RpdmU6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChNdWx0aUNhcnRTZWxlY3RvcnMuZ2V0TXVsdGlDYXJ0U3RhdGUpLFxuICAgICAgZmlsdGVyKChzdGF0ZSkgPT4gISFzdGF0ZSksXG4gICAgICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCgnYWN0aXZlJyksXG4gICAgICBtYXAoKHN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlOiBzdGF0ZS5hY3RpdmUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25SZWFkKHN0YXRlOiB7IGFjdGl2ZTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDYXJ0QWN0aW9ucy5DbGVhckNhcnRTdGF0ZSgpKTtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENhcnRBY3Rpb25zLlNldEFjdGl2ZUNhcnRJZChzdGF0ZS5hY3RpdmUpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==