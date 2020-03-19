import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '../../state/state.module';
import { CartEntryEffects } from './effects/cart-entry.effect';
import { CartVoucherEffects } from './effects/cart-voucher.effect';
import { CartEffects } from './effects/cart.effect';
import { MultiCartEffects } from './effects/multi-cart.effect';
import { WishListEffects } from './effects/wish-list.effect';
import { MULTI_CART_FEATURE } from './multi-cart-state';
import { multiCartMetaReducers, multiCartReducerProvider, multiCartReducerToken, } from './reducers/index';
var effects = [
    CartEffects,
    CartEntryEffects,
    CartVoucherEffects,
    WishListEffects,
    MultiCartEffects,
];
var MultiCartStoreModule = /** @class */ (function () {
    function MultiCartStoreModule() {
    }
    MultiCartStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                StateModule,
                StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
                    metaReducers: multiCartMetaReducers,
                }),
                EffectsModule.forFeature(effects),
            ],
            providers: [multiCartReducerProvider],
        })
    ], MultiCartStoreModule);
    return MultiCartStoreModule;
}());
export { MultiCartStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9tdWx0aS1jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLHFCQUFxQixHQUN0QixNQUFNLGtCQUFrQixDQUFDO0FBRTFCLElBQU0sT0FBTyxHQUFVO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDakIsQ0FBQztBQWFGO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixvQkFBb0I7UUFYaEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxXQUFXLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFO29CQUNoRSxZQUFZLEVBQUUscUJBQXFCO2lCQUNwQyxDQUFDO2dCQUNGLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ2xDO1lBQ0QsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydEVudHJ5RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LWVudHJ5LmVmZmVjdCc7XG5pbXBvcnQgeyBDYXJ0Vm91Y2hlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2FydC12b3VjaGVyLmVmZmVjdCc7XG5pbXBvcnQgeyBDYXJ0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXJ0LmVmZmVjdCc7XG5pbXBvcnQgeyBNdWx0aUNhcnRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0JztcbmltcG9ydCB7IFdpc2hMaXN0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy93aXNoLWxpc3QuZWZmZWN0JztcbmltcG9ydCB7IE1VTFRJX0NBUlRfRkVBVFVSRSB9IGZyb20gJy4vbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQge1xuICBtdWx0aUNhcnRNZXRhUmVkdWNlcnMsXG4gIG11bHRpQ2FydFJlZHVjZXJQcm92aWRlcixcbiAgbXVsdGlDYXJ0UmVkdWNlclRva2VuLFxufSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuY29uc3QgZWZmZWN0czogYW55W10gPSBbXG4gIENhcnRFZmZlY3RzLFxuICBDYXJ0RW50cnlFZmZlY3RzLFxuICBDYXJ0Vm91Y2hlckVmZmVjdHMsXG4gIFdpc2hMaXN0RWZmZWN0cyxcbiAgTXVsdGlDYXJ0RWZmZWN0cyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShNVUxUSV9DQVJUX0ZFQVRVUkUsIG11bHRpQ2FydFJlZHVjZXJUb2tlbiwge1xuICAgICAgbWV0YVJlZHVjZXJzOiBtdWx0aUNhcnRNZXRhUmVkdWNlcnMsXG4gICAgfSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICBdLFxuICBwcm92aWRlcnM6IFttdWx0aUNhcnRSZWR1Y2VyUHJvdmlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUNhcnRTdG9yZU1vZHVsZSB7fVxuIl19