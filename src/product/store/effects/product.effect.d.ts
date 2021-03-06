import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
export declare class ProductEffects {
    private actions$;
    private productConnector;
    private contextChange$;
    loadProduct$: (({ scheduler, debounce }?: any) => Observable<ProductActions.LoadProductSuccess | ProductActions.LoadProductFail>) & import("@ngrx/effects").CreateEffectMetadata;
    private productLoadEffect;
    constructor(actions$: Actions, productConnector: ProductConnector);
}
