import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartConnector } from '../../connectors/cart/cart.connector';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
import { StateWithMultiCart } from '../multi-cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class CartEffects {
    private actions$;
    private cartConnector;
    private store;
    private contextChange$;
    loadCart$: Observable<CartActions.LoadCartFail | CartActions.LoadCartSuccess | CartActions.ClearExpiredCoupons | DeprecatedCartActions.ClearCart | CartActions.RemoveCart>;
    createCart$: Observable<CartActions.MergeCartSuccess | CartActions.CreateCartSuccess | CartActions.CreateCartFail | CartActions.SetTempCart>;
    mergeCart$: Observable<CartActions.CreateCart>;
    refresh$: Observable<CartActions.LoadCart | CartActions.CartProcessesDecrement>;
    refreshWithoutProcesses$: Observable<CartActions.LoadCart>;
    resetCartDetailsOnSiteContextChange$: Observable<DeprecatedCartActions.ResetCartDetails | CartActions.ResetMultiCartDetails>;
    addEmail$: Observable<CartActions.AddEmailToCartSuccess | CartActions.AddEmailToCartFail | CartActions.LoadCart>;
    deleteCart$: Observable<any>;
    constructor(actions$: Actions, cartConnector: CartConnector, store: Store<StateWithMultiCart>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY2FydC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjtcbiAgICBwcml2YXRlIHN0b3JlO1xuICAgIHByaXZhdGUgY29udGV4dENoYW5nZSQ7XG4gICAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0IHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydD47XG4gICAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydEZhaWwgfCBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydD47XG4gICAgbWVyZ2VDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0PjtcbiAgICByZWZyZXNoJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5Mb2FkQ2FydCB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQ+O1xuICAgIHJlZnJlc2hXaXRob3V0UHJvY2Vzc2VzJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5Mb2FkQ2FydD47XG4gICAgcmVzZXRDYXJ0RGV0YWlsc09uU2l0ZUNvbnRleHRDaGFuZ2UkOiBPYnNlcnZhYmxlPERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzIHwgQ2FydEFjdGlvbnMuUmVzZXRNdWx0aUNhcnREZXRhaWxzPjtcbiAgICBhZGRFbWFpbCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsIHwgQ2FydEFjdGlvbnMuTG9hZENhcnQ+O1xuICAgIGRlbGV0ZUNhcnQkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+KTtcbn1cbiJdfQ==