import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { defaultOccStoreFinderConfig } from './default-occ-store-finder-config';
import { OccStoreFinderAdapter } from './occ-store-finder.adapter';
import { provideDefaultConfig } from '../../../config/config-providers';
var StoreFinderOccModule = /** @class */ (function () {
    function StoreFinderOccModule() {
    }
    StoreFinderOccModule = __decorate([
        NgModule({
            providers: [
                provideDefaultConfig(defaultOccStoreFinderConfig),
                { provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter },
            ],
        })
    ], StoreFinderOccModule);
    return StoreFinderOccModule;
}());
export { StoreFinderOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVF4RTtJQUFBO0lBQW1DLENBQUM7SUFBdkIsb0JBQW9CO1FBTmhDLFFBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQywyQkFBMkIsQ0FBQztnQkFDakQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO2FBQ2pFO1NBQ0YsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1N0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1zdG9yZS1maW5kZXItY29uZmlnJztcbmltcG9ydCB7IE9jY1N0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0T2NjU3RvcmVGaW5kZXJDb25maWcpLFxuICAgIHsgcHJvdmlkZTogU3RvcmVGaW5kZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjU3RvcmVGaW5kZXJBZGFwdGVyIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyT2NjTW9kdWxlIHt9XG4iXX0=