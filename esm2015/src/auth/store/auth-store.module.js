import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/config.module';
import { StorageSyncType } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { AUTH_FEATURE } from './auth-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
export function authStoreConfigFactory() {
    // if we want to reuse AUTH_FEATURE const in config, we have to use factory instead of plain object
    const config = {
        state: {
            storageSync: {
                keys: {
                    'auth.userToken.token.access_token': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.token_type': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.expires_in': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.expiration_time': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.scope': StorageSyncType.LOCAL_STORAGE,
                    'auth.userToken.token.userId': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
let AuthStoreModule = class AuthStoreModule {
};
AuthStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            StateModule,
            StoreModule.forFeature(AUTH_FEATURE, reducerToken, { metaReducers }),
            EffectsModule.forFeature(effects),
            ConfigModule.withConfigFactory(authStoreConfigFactory),
        ],
        providers: [reducerProvider],
    })
], AuthStoreModule);
export { AuthStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9hdXRoLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9FLE1BQU0sVUFBVSxzQkFBc0I7SUFDcEMsbUdBQW1HO0lBQ25HLE1BQU0sTUFBTSxHQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFO29CQUNKLG1DQUFtQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUNsRSxpQ0FBaUMsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDaEUsaUNBQWlDLEVBQUUsZUFBZSxDQUFDLGFBQWE7b0JBQ2hFLHNDQUFzQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO29CQUNyRSw0QkFBNEIsRUFBRSxlQUFlLENBQUMsYUFBYTtvQkFDM0QsNkJBQTZCLEVBQUUsZUFBZSxDQUFDLGFBQWE7aUJBQzdEO2FBQ0Y7U0FDRjtLQUNGLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBYUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHLENBQUE7QUFBbEIsZUFBZTtJQVgzQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQztZQUNwRSxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLENBQUM7U0FDdkQ7UUFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7S0FDN0IsQ0FBQztHQUNXLGVBQWUsQ0FBRztTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBBVVRIX0ZFQVRVUkUgfSBmcm9tICcuL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMsIHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoU3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgLy8gaWYgd2Ugd2FudCB0byByZXVzZSBBVVRIX0ZFQVRVUkUgY29uc3QgaW4gY29uZmlnLCB3ZSBoYXZlIHRvIHVzZSBmYWN0b3J5IGluc3RlYWQgb2YgcGxhaW4gb2JqZWN0XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAnYXV0aC51c2VyVG9rZW4udG9rZW4uYWNjZXNzX3Rva2VuJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgICAgJ2F1dGgudXNlclRva2VuLnRva2VuLnRva2VuX3R5cGUnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAnYXV0aC51c2VyVG9rZW4udG9rZW4uZXhwaXJlc19pbic6IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICAgICdhdXRoLnVzZXJUb2tlbi50b2tlbi5leHBpcmF0aW9uX3RpbWUnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAnYXV0aC51c2VyVG9rZW4udG9rZW4uc2NvcGUnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgICAnYXV0aC51c2VyVG9rZW4udG9rZW4udXNlcklkJzogU3RvcmFnZVN5bmNUeXBlLkxPQ0FMX1NUT1JBR0UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKEFVVEhfRkVBVFVSRSwgcmVkdWNlclRva2VuLCB7IG1ldGFSZWR1Y2VycyB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWdGYWN0b3J5KGF1dGhTdG9yZUNvbmZpZ0ZhY3RvcnkpLFxuICBdLFxuICBwcm92aWRlcnM6IFtyZWR1Y2VyUHJvdmlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU3RvcmVNb2R1bGUge31cbiJdfQ==