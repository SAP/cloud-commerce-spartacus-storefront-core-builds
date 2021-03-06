import { Injectable, Injector } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
import { SiteContextConfig } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
export class SiteContextParamsService {
    constructor(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    getContextParameters() {
        if (this.config.context) {
            return Object.keys(this.config.context).filter((param) => param !== 'urlParameters');
        }
        return [];
    }
    getUrlEncodingParameters() {
        return (this.config.context && this.config.context.urlParameters) || [];
    }
    getParamValues(param) {
        return getContextParameterValues(this.config, param);
    }
    getParamDefaultValue(param) {
        return getContextParameterDefault(this.config, param);
    }
    getSiteContextService(param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    }
    getValue(param) {
        let value;
        const service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe((val) => (value = val))
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    }
    setValue(param, value) {
        const service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    }
    /**
     * Get active values for all provided context parameters
     *
     * @param params Context parameters
     *
     * @returns Observable emitting array of all passed active context values
     */
    getValues(params) {
        if (params.length === 0) {
            return of([]);
        }
        return combineLatest(params.map((param) => this.getSiteContextService(param)
            .getActive()
            .pipe(distinctUntilChanged()))).pipe(filter((value) => value.every((param) => !!param)));
    }
}
SiteContextParamsService.decorators = [
    { type: Injectable }
];
SiteContextParamsService.ctorParameters = () => [
    { type: SiteContextConfig },
    { type: Injector },
    { type: ContextServiceMap }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc2l0ZS1jb250ZXh0L3NlcnZpY2VzL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUNMLDBCQUEwQixFQUMxQix5QkFBeUIsR0FDMUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUdyRSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQ1UsTUFBeUIsRUFDekIsUUFBa0IsRUFDbEIsVUFBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUNwQyxDQUFDO0lBRUosb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUM1QyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FDckMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBYTtRQUNoQyxPQUFPLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxLQUFhLENBQUM7UUFFbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztpQkFDakMsV0FBVyxFQUFFLENBQUM7U0FDbEI7UUFFRCxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDbkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFTLENBQUMsTUFBZ0I7UUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO1FBRUQsT0FBTyxhQUFhLENBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNuQixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO2FBQzlCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQ2hDLENBQ0YsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQTNFRixVQUFVOzs7WUFKRixpQkFBaUI7WUFQTCxRQUFRO1lBU3BCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0LFxuICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzLFxufSBmcm9tICcuLi9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlTWFwIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXBcbiAgKSB7fVxuXG4gIGdldENvbnRleHRQYXJhbWV0ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGV4dCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLmNvbnRleHQpLmZpbHRlcihcbiAgICAgICAgKHBhcmFtKSA9PiBwYXJhbSAhPT0gJ3VybFBhcmFtZXRlcnMnXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRVcmxFbmNvZGluZ1BhcmFtZXRlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuY29udGV4dCAmJiB0aGlzLmNvbmZpZy5jb250ZXh0LnVybFBhcmFtZXRlcnMpIHx8IFtdO1xuICB9XG5cbiAgZ2V0UGFyYW1WYWx1ZXMocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyh0aGlzLmNvbmZpZywgcGFyYW0pO1xuICB9XG5cbiAgZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBwYXJhbSk7XG4gIH1cblxuICBnZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW06IHN0cmluZyk6IFNpdGVDb250ZXh0PGFueT4ge1xuICAgIGlmICh0aGlzLnNlcnZpY2VNYXBbcGFyYW1dKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4odGhpcy5zZXJ2aWNlTWFwW3BhcmFtXSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWwpID0+ICh2YWx1ZSA9IHZhbCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLmdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtKTtcbiAgfVxuXG4gIHNldFZhbHVlKHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY3RpdmUgdmFsdWVzIGZvciBhbGwgcHJvdmlkZWQgY29udGV4dCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbXMgQ29udGV4dCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGUgZW1pdHRpbmcgYXJyYXkgb2YgYWxsIHBhc3NlZCBhY3RpdmUgY29udGV4dCB2YWx1ZXNcbiAgICovXG4gIGdldFZhbHVlcyhwYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICBwYXJhbXMubWFwKChwYXJhbSkgPT5cbiAgICAgICAgdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pXG4gICAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgIClcbiAgICApLnBpcGUoZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuZXZlcnkoKHBhcmFtKSA9PiAhIXBhcmFtKSkpO1xuICB9XG59XG4iXX0=