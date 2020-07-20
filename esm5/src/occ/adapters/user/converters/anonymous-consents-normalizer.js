import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AnonymousConsentsService } from '../../../../anonymous-consents/facade/anonymous-consents.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../anonymous-consents/facade/anonymous-consents.service";
var AnonymousConsentNormalizer = /** @class */ (function () {
    function AnonymousConsentNormalizer(anonymousConsentsService) {
        this.anonymousConsentsService = anonymousConsentsService;
    }
    AnonymousConsentNormalizer.prototype.convert = function (source, target) {
        if (target === void 0) { target = []; }
        target = this.anonymousConsentsService.decodeAndDeserialize(source);
        return target;
    };
    AnonymousConsentNormalizer.ctorParameters = function () { return [
        { type: AnonymousConsentsService }
    ]; };
    AnonymousConsentNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentNormalizer_Factory() { return new AnonymousConsentNormalizer(i0.ɵɵinject(i1.AnonymousConsentsService)); }, token: AnonymousConsentNormalizer, providedIn: "root" });
    AnonymousConsentNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], AnonymousConsentNormalizer);
    return AnonymousConsentNormalizer;
}());
export { AnonymousConsentNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvY29udmVydGVycy9hbm9ueW1vdXMtY29uc2VudHMtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQzs7O0FBSzVHO0lBRUUsb0NBQXNCLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUcsQ0FBQztJQUU1RSw0Q0FBTyxHQUFQLFVBQVEsTUFBYyxFQUFFLE1BQStCO1FBQS9CLHVCQUFBLEVBQUEsV0FBK0I7UUFDckQsTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFMK0Msd0JBQXdCOzs7SUFGN0QsMEJBQTBCO1FBRHRDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QiwwQkFBMEIsQ0FRdEM7cUNBZEQ7Q0FjQyxBQVJELElBUUM7U0FSWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9hbm9ueW1vdXMtY29uc2VudHMvZmFjYWRlL2Fub255bW91cy1jb25zZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnROb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPHN0cmluZywgQW5vbnltb3VzQ29uc2VudFtdPiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ6IEFub255bW91c0NvbnNlbnRbXSA9IFtdKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgICB0YXJnZXQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5kZWNvZGVBbmREZXNlcmlhbGl6ZShzb3VyY2UpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==