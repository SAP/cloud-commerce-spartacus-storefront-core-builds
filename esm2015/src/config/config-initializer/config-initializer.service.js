import { __awaiter, __decorate, __param } from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
import { BehaviorSubject } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';
import { deepMerge } from '../utils/deep-merge';
import { Config, RootConfig } from '../config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../config-tokens";
import * as i2 from "./config-initializer";
/**
 * Provides support for CONFIG_INITIALIZERS
 */
let ConfigInitializerService = class ConfigInitializerService {
    constructor(config, initializerGuard, rootConfig) {
        this.config = config;
        this.initializerGuard = initializerGuard;
        this.rootConfig = rootConfig;
        this.ongoingScopes$ = new BehaviorSubject(undefined);
    }
    /**
     * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
     */
    get isStable() {
        return (!this.initializerGuard ||
            (this.ongoingScopes$.value && this.ongoingScopes$.value.length === 0));
    }
    /**
     * Recommended way to get config for code that can run before app will finish
     * initialization (APP_INITIALIZERS, selected service constructors)
     *
     * Used without parameters waits for the whole config to become stable
     *
     * Parameters allow to describe which part of the config should be stable using
     * string describing config part, e.g.:
     * 'siteContext', 'siteContext.language', etc.
     *
     * @param scopes String describing parts of the config we want to be sure are stable
     */
    getStableConfig(...scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isStable) {
                return this.config;
            }
            return this.ongoingScopes$
                .pipe(filter((ongoingScopes) => ongoingScopes && this.areReady(scopes, ongoingScopes)), take(1), mapTo(this.config))
                .toPromise();
        });
    }
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @param scopes
     */
    finishScopes(scopes) {
        const newScopes = [...this.ongoingScopes$.value];
        for (const scope of scopes) {
            newScopes.splice(newScopes.indexOf(scope), 1);
        }
        this.ongoingScopes$.next(newScopes);
    }
    /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @param scopes
     * @param ongoingScopes
     */
    areReady(scopes, ongoingScopes) {
        if (!scopes.length) {
            return !ongoingScopes.length;
        }
        for (const scope of scopes) {
            for (const ongoingScope of ongoingScopes) {
                if (this.scopesOverlap(scope, ongoingScope)) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Check if two scopes overlap.
     *
     * Example of scopes that overlap:
     * 'test' and 'test', 'test.a' and 'test', 'test' and 'test.a'
     *
     * Example of scopes that do not overlap:
     * 'test' and 'testA', 'test.a' and 'test.b', 'test.nested' and 'test.nest'
     *
     * @param a ScopeA
     * @param b ScopeB
     */
    scopesOverlap(a, b) {
        if (b.length > a.length) {
            [a, b] = [b, a];
        }
        return a.startsWith(b) && (a[b.length] || '.') === '.';
    }
    /**
     * @internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     */
    initialize(initializers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ongoingScopes$.value) {
                // guard for double initialization
                return;
            }
            const ongoingScopes = [];
            const asyncConfigs = [];
            for (const initializer of initializers || []) {
                if (!initializer) {
                    continue;
                }
                if (!initializer.scopes || !initializer.scopes.length) {
                    throw new Error('CONFIG_INITIALIZER should provide scope!');
                }
                if (isDevMode() && !this.areReady(initializer.scopes, ongoingScopes)) {
                    console.warn('More than one CONFIG_INITIALIZER is initializing the same config scope.');
                }
                ongoingScopes.push(...initializer.scopes);
                asyncConfigs.push((() => __awaiter(this, void 0, void 0, function* () {
                    const initializerConfig = yield initializer.configFactory();
                    // contribute configuration to rootConfig
                    deepMerge(this.rootConfig, initializerConfig);
                    // contribute configuration to global config
                    deepMerge(this.config, initializerConfig);
                    this.finishScopes(initializer.scopes);
                }))());
            }
            this.ongoingScopes$.next(ongoingScopes);
            if (asyncConfigs.length) {
                yield Promise.all(asyncConfigs);
            }
        });
    }
};
ConfigInitializerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG_INITIALIZER_FORROOT_GUARD,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [RootConfig,] }] }
];
ConfigInitializerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigInitializerService_Factory() { return new ConfigInitializerService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.CONFIG_INITIALIZER_FORROOT_GUARD, 8), i0.ɵɵinject(i1.RootConfig)); }, token: ConfigInitializerService, providedIn: "root" });
ConfigInitializerService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(Config)),
    __param(1, Optional()),
    __param(1, Inject(CONFIG_INITIALIZER_FORROOT_GUARD)),
    __param(2, Inject(RootConfig))
], ConfigInitializerService);
export { ConfigInitializerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsZ0NBQWdDLEdBRWpDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUV0RDs7R0FFRztBQUlILElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBQ25DLFlBQzRCLE1BQVcsRUFHM0IsZ0JBQWdCLEVBQ0ksVUFBZTtRQUpuQixXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBQTtRQUNJLGVBQVUsR0FBVixVQUFVLENBQUs7UUFHckMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVyxTQUFTLENBQUMsQ0FBQztJQUZqRSxDQUFDO0lBSUo7O09BRUc7SUFDSCxJQUFJLFFBQVE7UUFDVixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3RCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUN0RSxDQUFDO0lB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R0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTFDLFlBQVksQ0FBQyxJQUFJLENBQ2YsQ0FBQyxHQUFTLEVBQUU7b0JBQ1YsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDNUQseUNBQXlDO29CQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO29CQUM5Qyw0Q0FBNEM7b0JBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQ0wsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFeEMsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN2QixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDO0tBQUE7Q0FDRixDQUFBOzs0Q0FwSkksTUFBTSxTQUFDLE1BQU07NENBQ2IsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQ0FBZ0M7NENBRXZDLE1BQU0sU0FBQyxVQUFVOzs7QUFOVCx3QkFBd0I7SUFIcEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUdHLFdBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2QsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUE7SUFFeEMsV0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7R0FOVix3QkFBd0IsQ0FzSnBDO1NBdEpZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQsXG4gIENvbmZpZ0luaXRpYWxpemVyLFxufSBmcm9tICcuL2NvbmZpZy1pbml0aWFsaXplcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwVG8sIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IENvbmZpZywgUm9vdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy10b2tlbnMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIHN1cHBvcnQgZm9yIENPTkZJR19JTklUSUFMSVpFUlNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ29uZmlnKSBwcm90ZWN0ZWQgY29uZmlnOiBhbnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJEKVxuICAgIHByb3RlY3RlZCBpbml0aWFsaXplckd1YXJkLFxuICAgIEBJbmplY3QoUm9vdENvbmZpZykgcHJvdGVjdGVkIHJvb3RDb25maWc6IGFueVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIG9uZ29pbmdTY29wZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGNvbmZpZyBpcyBzdGFibGUsIGkuZS4gYWxsIENPTkZJR19JTklUSUFMSVpFUlMgcmVzb2x2ZWQgY29ycmVjdGx5XG4gICAqL1xuICBnZXQgaXNTdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmluaXRpYWxpemVyR3VhcmQgfHxcbiAgICAgICh0aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlICYmIHRoaXMub25nb2luZ1Njb3BlcyQudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb21tZW5kZWQgd2F5IHRvIGdldCBjb25maWcgZm9yIGNvZGUgdGhhdCBjYW4gcnVuIGJlZm9yZSBhcHAgd2lsbCBmaW5pc2hcbiAgICogaW5pdGlhbGl6YXRpb24gKEFQUF9JTklUSUFMSVpFUlMsIHNlbGVjdGVkIHNlcnZpY2UgY29uc3RydWN0b3JzKVxuICAgKlxuICAgKiBVc2VkIHdpdGhvdXQgcGFyYW1ldGVycyB3YWl0cyBmb3IgdGhlIHdob2xlIGNvbmZpZyB0byBiZWNvbWUgc3RhYmxlXG4gICAqXG4gICAqIFBhcmFtZXRlcnMgYWxsb3cgdG8gZGVzY3JpYmUgd2hpY2ggcGFydCBvZiB0aGUgY29uZmlnIHNob3VsZCBiZSBzdGFibGUgdXNpbmdcbiAgICogc3RyaW5nIGRlc2NyaWJpbmcgY29uZmlnIHBhcnQsIGUuZy46XG4gICAqICdzaXRlQ29udGV4dCcsICdzaXRlQ29udGV4dC5sYW5ndWFnZScsIGV0Yy5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlcyBTdHJpbmcgZGVzY3JpYmluZyBwYXJ0cyBvZiB0aGUgY29uZmlnIHdlIHdhbnQgdG8gYmUgc3VyZSBhcmUgc3RhYmxlXG4gICAqL1xuICBhc3luYyBnZXRTdGFibGVDb25maWcoLi4uc2NvcGVzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuaXNTdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub25nb2luZ1Njb3BlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKG9uZ29pbmdTY29wZXMpID0+XG4gICAgICAgICAgICBvbmdvaW5nU2NvcGVzICYmIHRoaXMuYXJlUmVhZHkoc2NvcGVzLCBvbmdvaW5nU2NvcGVzKVxuICAgICAgICApLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXBUbyh0aGlzLmNvbmZpZylcbiAgICAgIClcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHByb3ZpZGVkIHNjb3BlcyBmcm9tIGN1cnJlbnRseSBvbmdvaW5nU2NvcGVzXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHByb3RlY3RlZCBmaW5pc2hTY29wZXMoc2NvcGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG5ld1Njb3BlcyA9IFsuLi50aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlXTtcbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgbmV3U2NvcGVzLnNwbGljZShuZXdTY29wZXMuaW5kZXhPZihzY29wZSksIDEpO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQobmV3U2NvcGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiBwcm92aWRlZCBzY29wZXMgYXJlIG5vdCBwYXJ0IG9mIG9uZ29pbmdTY29wZXNcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKiBAcGFyYW0gb25nb2luZ1Njb3Blc1xuICAgKi9cbiAgcHJvdGVjdGVkIGFyZVJlYWR5KHNjb3Blczogc3RyaW5nW10sIG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKCFzY29wZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gIW9uZ29pbmdTY29wZXMubGVuZ3RoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgZm9yIChjb25zdCBvbmdvaW5nU2NvcGUgb2Ygb25nb2luZ1Njb3Blcykge1xuICAgICAgICBpZiAodGhpcy5zY29wZXNPdmVybGFwKHNjb3BlLCBvbmdvaW5nU2NvcGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBzY29wZXMgb3ZlcmxhcC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiBzY29wZXMgdGhhdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0JywgJ3Rlc3QuYScgYW5kICd0ZXN0JywgJ3Rlc3QnIGFuZCAndGVzdC5hJ1xuICAgKlxuICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IGRvIG5vdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0QScsICd0ZXN0LmEnIGFuZCAndGVzdC5iJywgJ3Rlc3QubmVzdGVkJyBhbmQgJ3Rlc3QubmVzdCdcbiAgICpcbiAgICogQHBhcmFtIGEgU2NvcGVBXG4gICAqIEBwYXJhbSBiIFNjb3BlQlxuICAgKi9cbiAgcHJvdGVjdGVkIHNjb3Blc092ZXJsYXAoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoYi5sZW5ndGggPiBhLmxlbmd0aCkge1xuICAgICAgW2EsIGJdID0gW2IsIGFdO1xuICAgIH1cbiAgICByZXR1cm4gYS5zdGFydHNXaXRoKGIpICYmIChhW2IubGVuZ3RoXSB8fCAnLicpID09PSAnLic7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqXG4gICAqIE5vdCBhIHBhcnQgb2YgYSBwdWJsaWMgQVBJLCB1c2VkIGJ5IEFQUF9JTklUSUFMSVpFUiB0byBpbml0aWFsaXplIGFsbCBwcm92aWRlZCBDT05GSUdfSU5JVElBTElaRVJTXG4gICAqXG4gICAqL1xuICBhc3luYyBpbml0aWFsaXplKGluaXRpYWxpemVycz86IENvbmZpZ0luaXRpYWxpemVyW10pIHtcbiAgICBpZiAodGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZSkge1xuICAgICAgLy8gZ3VhcmQgZm9yIGRvdWJsZSBpbml0aWFsaXphdGlvblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhc3luY0NvbmZpZ3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpbml0aWFsaXplciBvZiBpbml0aWFsaXplcnMgfHwgW10pIHtcbiAgICAgIGlmICghaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWluaXRpYWxpemVyLnNjb3BlcyB8fCAhaW5pdGlhbGl6ZXIuc2NvcGVzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPTkZJR19JTklUSUFMSVpFUiBzaG91bGQgcHJvdmlkZSBzY29wZSEnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGV2TW9kZSgpICYmICF0aGlzLmFyZVJlYWR5KGluaXRpYWxpemVyLnNjb3Blcywgb25nb2luZ1Njb3BlcykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdNb3JlIHRoYW4gb25lIENPTkZJR19JTklUSUFMSVpFUiBpcyBpbml0aWFsaXppbmcgdGhlIHNhbWUgY29uZmlnIHNjb3BlLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb25nb2luZ1Njb3Blcy5wdXNoKC4uLmluaXRpYWxpemVyLnNjb3Blcyk7XG5cbiAgICAgIGFzeW5jQ29uZmlncy5wdXNoKFxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluaXRpYWxpemVyQ29uZmlnID0gYXdhaXQgaW5pdGlhbGl6ZXIuY29uZmlnRmFjdG9yeSgpO1xuICAgICAgICAgIC8vIGNvbnRyaWJ1dGUgY29uZmlndXJhdGlvbiB0byByb290Q29uZmlnXG4gICAgICAgICAgZGVlcE1lcmdlKHRoaXMucm9vdENvbmZpZywgaW5pdGlhbGl6ZXJDb25maWcpO1xuICAgICAgICAgIC8vIGNvbnRyaWJ1dGUgY29uZmlndXJhdGlvbiB0byBnbG9iYWwgY29uZmlnXG4gICAgICAgICAgZGVlcE1lcmdlKHRoaXMuY29uZmlnLCBpbml0aWFsaXplckNvbmZpZyk7XG4gICAgICAgICAgdGhpcy5maW5pc2hTY29wZXMoaW5pdGlhbGl6ZXIuc2NvcGVzKTtcbiAgICAgICAgfSkoKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5vbmdvaW5nU2NvcGVzJC5uZXh0KG9uZ29pbmdTY29wZXMpO1xuXG4gICAgaWYgKGFzeW5jQ29uZmlncy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFzeW5jQ29uZmlncyk7XG4gICAgfVxuICB9XG59XG4iXX0=