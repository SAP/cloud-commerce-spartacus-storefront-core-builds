import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StorageSyncType } from '../../state/index';
import { StateModule } from '../../state/state.module';
import { ANONYMOUS_CONSENTS_STORE_FEATURE } from './anonymous-consents-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
import { provideDefaultConfigFactory } from '../../config/config-providers';
export function anonymousConsentsStoreConfigFactory() {
    const config = {
        state: {
            storageSync: {
                keys: {
                    [ANONYMOUS_CONSENTS_STORE_FEATURE]: StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
let AnonymousConsentsStoreModule = class AnonymousConsentsStoreModule {
};
AnonymousConsentsStoreModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            StateModule,
            StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken, {
                metaReducers,
            }),
            EffectsModule.forFeature(effects),
        ],
        providers: [
            provideDefaultConfigFactory(anonymousConsentsStoreConfigFactory),
            reducerProvider,
        ],
    })
], AnonymousConsentsStoreModule);
export { AnonymousConsentsStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTVFLE1BQU0sVUFBVSxtQ0FBbUM7SUFDakQsTUFBTSxNQUFNLEdBQWdCO1FBQzFCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxhQUFhO2lCQUNsRTthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWdCRCxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtDQUFHLENBQUE7QUFBL0IsNEJBQTRCO0lBZHhDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLEVBQUU7Z0JBQ3JFLFlBQVk7YUFDYixDQUFDO1lBQ0YsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7U0FDbEM7UUFDRCxTQUFTLEVBQUU7WUFDVCwyQkFBMkIsQ0FBQyxtQ0FBbUMsQ0FBQztZQUNoRSxlQUFlO1NBQ2hCO0tBQ0YsQ0FBQztHQUNXLDRCQUE0QixDQUFHO1NBQS9CLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vLi4vc3RhdGUvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9zdGF0ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkUgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5pbXBvcnQgeyBlZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2luZGV4JztcbmltcG9ydCB7IG1ldGFSZWR1Y2VycywgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c0NvbnNlbnRzU3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBTdGF0ZUNvbmZpZyA9IHtcbiAgICBzdGF0ZToge1xuICAgICAgc3RvcmFnZVN5bmM6IHtcbiAgICAgICAga2V5czoge1xuICAgICAgICAgIFtBTk9OWU1PVVNfQ09OU0VOVFNfU1RPUkVfRkVBVFVSRV06IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiwge1xuICAgICAgbWV0YVJlZHVjZXJzLFxuICAgIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KGFub255bW91c0NvbnNlbnRzU3RvcmVDb25maWdGYWN0b3J5KSxcbiAgICByZWR1Y2VyUHJvdmlkZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU3RvcmVNb2R1bGUge31cbiJdfQ==