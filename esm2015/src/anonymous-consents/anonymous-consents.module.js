var AnonymousConsentsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { defaultAnonymousConsentsConfig } from './config/default-anonymous-consents-config';
import { AnonymousConsentsService } from './facade/anonymous-consents.service';
import { interceptors } from './http-interceptors/index';
import { AnonymousConsentsStoreModule } from './store/anonymous-consents-store.module';
import { provideDefaultConfig } from '../config/config-providers';
let AnonymousConsentsModule = AnonymousConsentsModule_1 = class AnonymousConsentsModule {
    static forRoot() {
        return {
            ngModule: AnonymousConsentsModule_1,
            providers: [
                ...interceptors,
                AnonymousConsentsService,
                provideDefaultConfig(defaultAnonymousConsentsConfig),
            ],
        };
    }
};
AnonymousConsentsModule = AnonymousConsentsModule_1 = __decorate([
    NgModule({
        imports: [AnonymousConsentsStoreModule],
    })
], AnonymousConsentsModule);
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUtsRSxJQUFhLHVCQUF1QiwrQkFBcEMsTUFBYSx1QkFBdUI7SUFDbEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxZQUFZO2dCQUNmLHdCQUF3QjtnQkFDeEIsb0JBQW9CLENBQUMsOEJBQThCLENBQUM7YUFDckQ7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFYWSx1QkFBdUI7SUFIbkMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDeEMsQ0FBQztHQUNXLHVCQUF1QixDQVduQztTQVhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0QW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWFub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQW5vbnltb3VzQ29uc2VudHNTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBbm9ueW1vdXNDb25zZW50c01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5vbnltb3VzQ29uc2VudHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uaW50ZXJjZXB0b3JzLFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRBbm9ueW1vdXNDb25zZW50c0NvbmZpZyksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==