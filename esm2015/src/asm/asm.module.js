var AsmModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { defaultAsmConfig } from './config/default-asm-config';
import { AsmStoreModule } from './store/asm-store.module';
import { interceptors } from './http-interceptors/index';
import { provideDefaultConfig } from '../config/config-providers';
let AsmModule = AsmModule_1 = class AsmModule {
    static forRoot() {
        return {
            ngModule: AsmModule_1,
            providers: [...interceptors, provideDefaultConfig(defaultAsmConfig)],
        };
    }
};
AsmModule = AsmModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule, AsmStoreModule],
    })
], AsmModule);
export { AsmModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vYXNtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS2xFLElBQWEsU0FBUyxpQkFBdEIsTUFBYSxTQUFTO0lBQ3BCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDckUsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBUFksU0FBUztJQUhyQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO0tBQzFELENBQUM7R0FDVyxTQUFTLENBT3JCO1NBUFksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRBc21Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWFzbS1jb25maWcnO1xuaW1wb3J0IHsgQXNtU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2FzbS1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctcHJvdmlkZXJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgQXNtU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFzbU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXNtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uaW50ZXJjZXB0b3JzLCBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QXNtQ29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19