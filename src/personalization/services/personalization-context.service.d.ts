import { Observable } from 'rxjs';
import { PersonalizationConfig } from '../config/personalization-config';
import { PersonalizationContext } from '../model/personalization-context.model';
import { CmsService } from '../../cms/facade/cms.service';
import * as ɵngcc0 from '@angular/core';
export declare class PersonalizationContextService {
    protected config: PersonalizationConfig;
    protected cmsService: CmsService;
    constructor(config: PersonalizationConfig, cmsService: CmsService);
    getPersonalizationContext(): Observable<PersonalizationContext>;
    private buildPersonalizationContext;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PersonalizationContextService>;
}

//# sourceMappingURL=personalization-context.service.d.ts.map