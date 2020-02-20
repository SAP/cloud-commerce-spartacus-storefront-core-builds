import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ProductEffects {
    private actions$;
    private productConnector;
    private contextChange$;
    loadProduct$: ({ scheduler, debounce }?: any) => Observable<ProductActions.LoadProductFail | ProductActions.LoadProductSuccess>;
    private productLoadEffect;
    constructor(actions$: Actions, productConnector: ProductConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductEffects>;
}

//# sourceMappingURL=product.effect.d.ts.map