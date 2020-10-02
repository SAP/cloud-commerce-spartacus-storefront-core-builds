import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/index';
import { UserConsentService } from '../../../user/facade/user-consent.service';
import { UserActions } from '../../../user/store/actions/index';
import { AnonymousConsentsConfig } from '../../config/anonymous-consents-config';
import { AnonymousConsentTemplatesConnector } from '../../connectors/anonymous-consent-templates.connector';
import { AnonymousConsentsService } from '../../facade/index';
import { AnonymousConsentsActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentsEffects {
    private actions$;
    private anonymousConsentTemplatesConnector;
    private authService;
    private anonymousConsentsConfig;
    private anonymousConsentService;
    private userConsentService;
    checkConsentVersions$: Observable<AnonymousConsentsActions.LoadAnonymousConsentTemplates | AnonymousConsentsActions.LoadAnonymousConsentTemplatesFail | Observable<never>>;
    loadAnonymousConsentTemplates$: Observable<AnonymousConsentsActions.AnonymousConsentsActions>;
    transferAnonymousConsentsToUser$: Observable<UserActions.TransferAnonymousConsent | Observable<never>>;
    giveRequiredConsentsToUser$: Observable<UserActions.GiveUserConsent | Observable<never>>;
    constructor(actions$: Actions, anonymousConsentTemplatesConnector: AnonymousConsentTemplatesConnector, authService: AuthService, anonymousConsentsConfig: AnonymousConsentsConfig, anonymousConsentService: AnonymousConsentsService, userConsentService: UserConsentService);
    /**
     * Compares the given versions and determines if there's a mismatch,
     * in which case `true` is returned.
     *
     * @param currentVersions versions of the current consents
     * @param newVersions versions of the new consents
     */
    private detectUpdatedVersion;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentsEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AnonymousConsentsEffects>;
}

//# sourceMappingURL=anonymous-consents.effect.d.ts.map