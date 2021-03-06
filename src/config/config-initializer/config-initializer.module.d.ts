import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializerService } from './config-initializer.service';
import { ConfigInitializer } from './config-initializer';
export declare function configInitializerFactory(configInitializer: ConfigInitializerService, initializers: ConfigInitializer[]): () => Promise<void>;
export declare function locationInitializedFactory(configInitializer: ConfigInitializerService): Promise<any>;
export declare class ConfigInitializerModule {
    static forRoot(): ModuleWithProviders<ConfigInitializerModule>;
}
