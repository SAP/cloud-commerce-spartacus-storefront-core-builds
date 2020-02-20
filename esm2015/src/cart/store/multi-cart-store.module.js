import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '../../state/state.module';
import { MULTI_CART_FEATURE } from './multi-cart-state';
import { multiCartReducerProvider, multiCartReducerToken, multiCartMetaReducers, } from './reducers/index';
import { ConfigModule } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { MultiCartEffects } from './effects/multi-cart.effect';
import { EffectsModule } from '@ngrx/effects';
export function multiCartStoreConfigFactory() {
    const config = {
        state: {
            storageSync: {
                keys: {
                    [`${MULTI_CART_FEATURE}.active`]: StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
let MultiCartStoreModule = class MultiCartStoreModule {
};
MultiCartStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            StateModule,
            StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
                metaReducers: multiCartMetaReducers,
            }),
            EffectsModule.forFeature([MultiCartEffects]),
            ConfigModule.withConfigFactory(multiCartStoreConfigFactory),
        ],
        providers: [multiCartReducerProvider],
    })
], MultiCartStoreModule);
export { MultiCartStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9tdWx0aS1jYXJ0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixxQkFBcUIsRUFDckIscUJBQXFCLEdBQ3RCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQWUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE1BQU0sVUFBVSwyQkFBMkI7SUFDekMsTUFBTSxNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osQ0FBQyxHQUFHLGtCQUFrQixTQUFTLENBQUMsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDaEU7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFjRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtDQUFHLENBQUE7QUFBdkIsb0JBQW9CO0lBWmhDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRTtnQkFDaEUsWUFBWSxFQUFFLHFCQUFxQjthQUNwQyxDQUFDO1lBQ0YsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDNUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDO1NBQzVEO1FBQ0QsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0ZFQVRVUkUgfSBmcm9tICcuL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHtcbiAgbXVsdGlDYXJ0UmVkdWNlclByb3ZpZGVyLFxuICBtdWx0aUNhcnRSZWR1Y2VyVG9rZW4sXG4gIG11bHRpQ2FydE1ldGFSZWR1Y2Vycyxcbn0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yYWdlU3luY1R5cGUsIFN0YXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBNdWx0aUNhcnRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0JztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpQ2FydFN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICBbYCR7TVVMVElfQ0FSVF9GRUFUVVJFfS5hY3RpdmVgXTogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU3RhdGVNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShNVUxUSV9DQVJUX0ZFQVRVUkUsIG11bHRpQ2FydFJlZHVjZXJUb2tlbiwge1xuICAgICAgbWV0YVJlZHVjZXJzOiBtdWx0aUNhcnRNZXRhUmVkdWNlcnMsXG4gICAgfSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtNdWx0aUNhcnRFZmZlY3RzXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KG11bHRpQ2FydFN0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW211bHRpQ2FydFJlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpQ2FydFN0b3JlTW9kdWxlIHt9XG4iXX0=