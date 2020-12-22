import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../../../cart/store/actions/index';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserActions } from '../../../user/store/actions/index';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutCostCenterConnector } from '../../connectors/cost-center/checkout-cost-center.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutEffects {
    private actions$;
    private checkoutDeliveryConnector;
    private checkoutPaymentConnector;
    private checkoutCostCenterConnector;
    private checkoutConnector;
    private contextChange$;
    addDeliveryAddress$: Observable<UserActions.LoadUserAddresses | CheckoutActions.SetDeliveryAddress | CheckoutActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<CheckoutActions.SetDeliveryAddressSuccess | CheckoutActions.ClearSupportedDeliveryModes | CheckoutActions.ClearCheckoutDeliveryMode | CheckoutActions.ResetLoadSupportedDeliveryModesProcess | CheckoutActions.LoadSupportedDeliveryModes | CheckoutActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<CheckoutActions.LoadSupportedDeliveryModesSuccess | CheckoutActions.LoadSupportedDeliveryModesFail>;
    clearCheckoutMiscsDataOnLanguageChange$: Observable<CheckoutActions.CheckoutClearMiscsData | CheckoutActions.ResetLoadSupportedDeliveryModesProcess | CheckoutActions.ResetLoadPaymentTypesProcess>;
    clearDeliveryModesOnCurrencyChange$: Observable<CheckoutActions.ClearSupportedDeliveryModes>;
    clearCheckoutDataOnLogout$: Observable<CheckoutActions.ClearCheckoutData>;
    clearCheckoutDataOnLogin$: Observable<CheckoutActions.ClearCheckoutData>;
    setDeliveryMode$: Observable<CheckoutActions.SetDeliveryModeSuccess | CheckoutActions.SetDeliveryModeFail | CartActions.LoadCart>;
    createPaymentDetails$: Observable<UserActions.LoadUserPaymentMethods | CheckoutActions.CreatePaymentDetailsSuccess | CheckoutActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<CheckoutActions.SetPaymentDetailsSuccess | CheckoutActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<CheckoutActions.PlaceOrderSuccess | GlobalMessageActions.AddMessage | CheckoutActions.PlaceOrderFail | CartActions.RemoveCart>;
    loadCheckoutDetails$: Observable<CheckoutActions.LoadCheckoutDetailsSuccess | CheckoutActions.LoadCheckoutDetailsFail>;
    reloadDetailsOnMergeCart$: Observable<CheckoutActions.LoadCheckoutDetails>;
    clearCheckoutDeliveryAddress$: Observable<CheckoutActions.ClearCheckoutDeliveryAddressFail | CheckoutActions.ClearCheckoutDeliveryAddressSuccess>;
    clearCheckoutDeliveryMode$: Observable<CheckoutActions.ClearCheckoutDeliveryModeFail | CheckoutActions.ClearCheckoutDeliveryModeSuccess | CartActions.LoadCart>;
    setCostCenter$: Observable<CheckoutActions.SetCostCenterSuccess | CheckoutActions.SetCostCenterFail | CheckoutActions.ClearCheckoutDeliveryAddress | CartActions.LoadCart>;
    constructor(actions$: Actions, checkoutDeliveryConnector: CheckoutDeliveryConnector, checkoutPaymentConnector: CheckoutPaymentConnector, checkoutCostCenterConnector: CheckoutCostCenterConnector, checkoutConnector: CheckoutConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CheckoutEffects>;
}

//# sourceMappingURL=checkout.effect.d.ts.map