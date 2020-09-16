var GlobalMessageModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { errorHandlers, httpErrorInterceptors, } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
import { GlobalMessageEffect } from './store/effects/global-message.effect';
import { defaultGlobalMessageConfigFactory } from './config/default-global-message-config';
import { provideDefaultConfigFactory } from '../config/config-providers';
let GlobalMessageModule = GlobalMessageModule_1 = class GlobalMessageModule {
    static forRoot() {
        return {
            ngModule: GlobalMessageModule_1,
            providers: [...errorHandlers, ...httpErrorInterceptors],
        };
    }
};
GlobalMessageModule = GlobalMessageModule_1 = __decorate([
    NgModule({
        imports: [
            GlobalMessageStoreModule,
            EffectsModule.forFeature([GlobalMessageEffect]),
        ],
        providers: [provideDefaultConfigFactory(defaultGlobalMessageConfigFactory)],
    })
], GlobalMessageModule);
export { GlobalMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUNMLGFBQWEsRUFDYixxQkFBcUIsR0FDdEIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVN6RSxJQUFhLG1CQUFtQiwyQkFBaEMsTUFBYSxtQkFBbUI7SUFDOUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxHQUFHLHFCQUFxQixDQUFDO1NBQ3hELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBZLG1CQUFtQjtJQVAvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7WUFDeEIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEQ7UUFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQzVFLENBQUM7R0FDVyxtQkFBbUIsQ0FPL0I7U0FQWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgZXJyb3JIYW5kbGVycyxcbiAgaHR0cEVycm9ySW50ZXJjZXB0b3JzLFxufSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvZ2xvYmFsLW1lc3NhZ2Utc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VFZmZlY3QgfSBmcm9tICcuL3N0b3JlL2VmZmVjdHMvZ2xvYmFsLW1lc3NhZ2UuZWZmZWN0JztcblxuaW1wb3J0IHsgZGVmYXVsdEdsb2JhbE1lc3NhZ2VDb25maWdGYWN0b3J5IH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1nbG9iYWwtbWVzc2FnZS1jb25maWcnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgR2xvYmFsTWVzc2FnZVN0b3JlTW9kdWxlLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbR2xvYmFsTWVzc2FnZUVmZmVjdF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkoZGVmYXVsdEdsb2JhbE1lc3NhZ2VDb25maWdGYWN0b3J5KV0sXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbE1lc3NhZ2VNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdsb2JhbE1lc3NhZ2VNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdsb2JhbE1lc3NhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5lcnJvckhhbmRsZXJzLCAuLi5odHRwRXJyb3JJbnRlcmNlcHRvcnNdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==