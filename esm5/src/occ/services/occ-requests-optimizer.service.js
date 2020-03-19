import { __assign, __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { extractFields } from '../utils/occ-fields';
import { OccFieldsModel, OccFieldsService, ScopedDataWithUrl, } from './occ-fields.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./occ-fields.service";
var OccRequestsOptimizerService = /** @class */ (function () {
    function OccRequestsOptimizerService(http, occFields) {
        this.http = http;
        this.occFields = occFields;
    }
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @param scopedDataWithUrls
     * @param dataFactory
     */
    OccRequestsOptimizerService.prototype.scopedDataLoad = function (scopedDataWithUrls, dataFactory) {
        var _this = this;
        var result = [];
        if (!dataFactory) {
            dataFactory = function (url) { return _this.http.get(url); };
        }
        var mergedUrls = this.occFields.getOptimalUrlGroups(scopedDataWithUrls);
        Object.entries(mergedUrls).forEach(function (_a) {
            var _b = __read(_a, 2), url = _b[0], groupedModelsSet = _b[1];
            var groupedModels = Object.values(groupedModelsSet);
            if (groupedModels.length === 1) {
                // only one scope for url, we can pass the data straightaway
                result.push(__assign(__assign({}, groupedModels[0].scopedData), { data$: dataFactory(url) }));
            }
            else {
                // multiple scopes per url
                // we have to split the model per each scope
                var data$_1 = dataFactory(url).pipe(shareReplay(1));
                groupedModels.forEach(function (modelData) {
                    result.push(__assign(__assign({}, modelData.scopedData), { data$: data$_1.pipe(map(function (data) { return extractFields(data, modelData.fields); })) }));
                });
            }
        });
        return result;
    };
    OccRequestsOptimizerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccFieldsService }
    ]; };
    OccRequestsOptimizerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccRequestsOptimizerService_Factory() { return new OccRequestsOptimizerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OccFieldsService)); }, token: OccRequestsOptimizerService, providedIn: "root" });
    OccRequestsOptimizerService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OccRequestsOptimizerService);
    return OccRequestsOptimizerService;
}());
export { OccRequestsOptimizerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtcmVxdWVzdHMtb3B0aW1pemVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUNMLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBS2xEO0lBQ0UscUNBQ1ksSUFBZ0IsRUFDaEIsU0FBMkI7UUFEM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRUo7Ozs7O09BS0c7SUFDSCxvREFBYyxHQUFkLFVBQ0Usa0JBQXVDLEVBQ3ZDLFdBQTRDO1FBRjlDLGlCQTZDQztRQXpDQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztTQUM5QztRQUVELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUxRSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDaEMsVUFBQyxFQUtBO2dCQUxBLGtCQUtBLEVBTEMsV0FBRyxFQUFFLHdCQUFnQjtZQU1yQixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFdEQsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsNERBQTREO2dCQUM1RCxNQUFNLENBQUMsSUFBSSx1QkFDTixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUM5QixLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUN2QixDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsMEJBQTBCO2dCQUMxQiw0Q0FBNEM7Z0JBQzVDLElBQU0sT0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBELGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO29CQUM3QixNQUFNLENBQUMsSUFBSSx1QkFDTixTQUFTLENBQUMsVUFBVSxLQUN2QixLQUFLLEVBQUUsT0FBSyxDQUFDLElBQUksQ0FDZixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxhQUFhLENBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUN0RCxJQUNELENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FDRixDQUFDO1FBRUYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBdkRpQixVQUFVO2dCQUNMLGdCQUFnQjs7O0lBSDVCLDJCQUEyQjtRQUh2QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csMkJBQTJCLENBMER2QztzQ0F6RUQ7Q0F5RUMsQUExREQsSUEwREM7U0ExRFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2NvcGVkRGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL3Njb3BlZC1kYXRhJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBleHRyYWN0RmllbGRzIH0gZnJvbSAnLi4vdXRpbHMvb2NjLWZpZWxkcyc7XG5pbXBvcnQge1xuICBPY2NGaWVsZHNNb2RlbCxcbiAgT2NjRmllbGRzU2VydmljZSxcbiAgU2NvcGVkRGF0YVdpdGhVcmwsXG59IGZyb20gJy4vb2NjLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRmllbGRzOiBPY2NGaWVsZHNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogT3B0aW1pemUgb2NjIGVuZHBvaW50IGNhbGxzIG1lcmdpbmcgcmVxdWVzdHMgdG8gdGhlIHNhbWUgdXJsIGJ5IG1lcmdpbmcgZmllbGQgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVkRGF0YVdpdGhVcmxzXG4gICAqIEBwYXJhbSBkYXRhRmFjdG9yeVxuICAgKi9cbiAgc2NvcGVkRGF0YUxvYWQ8VD4oXG4gICAgc2NvcGVkRGF0YVdpdGhVcmxzOiBTY29wZWREYXRhV2l0aFVybFtdLFxuICAgIGRhdGFGYWN0b3J5PzogKHVybDogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPFQ+XG4gICk6IFNjb3BlZERhdGE8VD5bXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoIWRhdGFGYWN0b3J5KSB7XG4gICAgICBkYXRhRmFjdG9yeSA9IHVybCA9PiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXJnZWRVcmxzID0gdGhpcy5vY2NGaWVsZHMuZ2V0T3B0aW1hbFVybEdyb3VwcyhzY29wZWREYXRhV2l0aFVybHMpO1xuXG4gICAgT2JqZWN0LmVudHJpZXMobWVyZ2VkVXJscykuZm9yRWFjaChcbiAgICAgIChbdXJsLCBncm91cGVkTW9kZWxzU2V0XTogW1xuICAgICAgICBzdHJpbmcsXG4gICAgICAgIHtcbiAgICAgICAgICBbc2NvcGU6IHN0cmluZ106IE9jY0ZpZWxkc01vZGVsO1xuICAgICAgICB9XG4gICAgICBdKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwZWRNb2RlbHMgPSBPYmplY3QudmFsdWVzKGdyb3VwZWRNb2RlbHNTZXQpO1xuXG4gICAgICAgIGlmIChncm91cGVkTW9kZWxzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIC8vIG9ubHkgb25lIHNjb3BlIGZvciB1cmwsIHdlIGNhbiBwYXNzIHRoZSBkYXRhIHN0cmFpZ2h0YXdheVxuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIC4uLmdyb3VwZWRNb2RlbHNbMF0uc2NvcGVkRGF0YSxcbiAgICAgICAgICAgIGRhdGEkOiBkYXRhRmFjdG9yeSh1cmwpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG11bHRpcGxlIHNjb3BlcyBwZXIgdXJsXG4gICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCB0aGUgbW9kZWwgcGVyIGVhY2ggc2NvcGVcbiAgICAgICAgICBjb25zdCBkYXRhJCA9IGRhdGFGYWN0b3J5KHVybCkucGlwZShzaGFyZVJlcGxheSgxKSk7XG5cbiAgICAgICAgICBncm91cGVkTW9kZWxzLmZvckVhY2gobW9kZWxEYXRhID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgLi4ubW9kZWxEYXRhLnNjb3BlZERhdGEsXG4gICAgICAgICAgICAgIGRhdGEkOiBkYXRhJC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChkYXRhID0+IGV4dHJhY3RGaWVsZHM8VD4oZGF0YSwgbW9kZWxEYXRhLmZpZWxkcykpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=