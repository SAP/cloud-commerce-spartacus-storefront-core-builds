import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FeatureLevelDirective } from './directives/feature-level.directive';
import { FeatureDirective } from './directives/feature.directive';
import { provideDefaultConfig } from '../config/config-providers';
var FeaturesConfigModule = /** @class */ (function () {
    function FeaturesConfigModule() {
    }
    FeaturesConfigModule_1 = FeaturesConfigModule;
    FeaturesConfigModule.forRoot = function (defaultLevel) {
        return {
            ngModule: FeaturesConfigModule_1,
            providers: [
                provideDefaultConfig({
                    features: {
                        level: defaultLevel || '*',
                    },
                }),
            ],
        };
    };
    var FeaturesConfigModule_1;
    FeaturesConfigModule = FeaturesConfigModule_1 = __decorate([
        NgModule({
            declarations: [FeatureLevelDirective, FeatureDirective],
            exports: [FeatureLevelDirective, FeatureDirective],
        })
    ], FeaturesConfigModule);
    return FeaturesConfigModule;
}());
export { FeaturesConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMtY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlcy1jb25maWcvZmVhdHVyZXMtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNbEU7SUFBQTtJQWVBLENBQUM7NkJBZlksb0JBQW9CO0lBQ3hCLDRCQUFPLEdBQWQsVUFDRSxZQUFxQjtRQUVyQixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQWlCO29CQUNuQyxRQUFRLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLFlBQVksSUFBSSxHQUFHO3FCQUMzQjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFkVSxvQkFBb0I7UUFKaEMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7WUFDdkQsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7U0FDbkQsQ0FBQztPQUNXLG9CQUFvQixDQWVoQztJQUFELDJCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZmVhdHVyZXMtY29uZmlnJztcbmltcG9ydCB7IEZlYXR1cmVMZXZlbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mZWF0dXJlLWxldmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGZWF0dXJlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZlYXR1cmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGZWF0dXJlTGV2ZWxEaXJlY3RpdmUsIEZlYXR1cmVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRmVhdHVyZUxldmVsRGlyZWN0aXZlLCBGZWF0dXJlRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZXNDb25maWdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkZWZhdWx0TGV2ZWw/OiBzdHJpbmdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxGZWF0dXJlc0NvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoPEZlYXR1cmVzQ29uZmlnPntcbiAgICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgbGV2ZWw6IGRlZmF1bHRMZXZlbCB8fCAnKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==