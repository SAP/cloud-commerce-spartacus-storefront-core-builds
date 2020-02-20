import { Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { Cart } from '../../model/cart.model';
import { StateWithCart } from '../store/cart-state';
/**
 * @deprecated since version 1.4
 * Replace particular methods usage with replacements from other services
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartDataService {
    protected store: Store<StateWithCart>;
    protected authService: AuthService;
    private _userId;
    private _cart;
    constructor(store: Store<StateWithCart>, authService: AuthService);
    get hasCart(): boolean;
    /**
     * @deprecated since version 1.4
     * Use `getOccUserId` from `AuthService` instead
     */
    get userId(): string;
    /**
     * @deprecated since version 1.4
     * Use `getActive` from `ActiveCartService` instead
     */
    get cart(): Cart;
    /**
     * @deprecated since version 1.4
     * Use `getActiveCartId` from `ActiveCartService` instead
     */
    get cartId(): string;
    /**
     * @deprecated since version 1.4
     * Use `isGuestCart` from `ActiveCartService` instead
     */
    get isGuestCart(): boolean;
    private isEmail;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartDataService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartDataService>;
}

//# sourceMappingURL=cart-data.service.d.ts.map