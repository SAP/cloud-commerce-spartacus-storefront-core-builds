import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/facade/global-message.service';
import { CartVoucherConnector } from '../../connectors/voucher/cart-voucher.connector';
import { CartActions } from '../actions/index';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartVoucherEffects {
    private actions$;
    private cartVoucherConnector;
    private messageService;
    constructor(actions$: Actions, cartVoucherConnector: CartVoucherConnector, messageService: GlobalMessageService);
    addCartVoucher$: Observable<CartActions.CartVoucherAction | CartActions.LoadCart | CartActions.CartProcessesDecrement>;
    removeCartVoucher$: Observable<CartActions.CartVoucherAction | CartActions.CartProcessesDecrement | CartActions.LoadCart>;
    private showGlobalMessage;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartVoucherEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartVoucherEffects>;
}

//# sourceMappingURL=cart-voucher.effect.d.ts.map