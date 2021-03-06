import { OrderHistoryList } from '../../../model/order.model';
import { StateUtils } from '../../../state/utils/index';
export declare const LOAD_USER_ORDERS = "[User] Load User Orders";
export declare const LOAD_USER_ORDERS_FAIL = "[User] Load User Orders Fail";
export declare const LOAD_USER_ORDERS_SUCCESS = "[User] Load User Orders Success";
export declare const CLEAR_USER_ORDERS = "[User] Clear User Orders";
export declare class LoadUserOrders extends StateUtils.LoaderLoadAction {
    payload: {
        userId: string;
        pageSize?: number;
        currentPage?: number;
        sort?: string;
        replenishmentOrderCode?: string;
    };
    readonly type = "[User] Load User Orders";
    constructor(payload: {
        userId: string;
        pageSize?: number;
        currentPage?: number;
        sort?: string;
        replenishmentOrderCode?: string;
    });
}
export declare class LoadUserOrdersFail extends StateUtils.LoaderFailAction {
    payload: any;
    readonly type = "[User] Load User Orders Fail";
    constructor(payload: any);
}
export declare class LoadUserOrdersSuccess extends StateUtils.LoaderSuccessAction {
    payload: OrderHistoryList;
    readonly type = "[User] Load User Orders Success";
    constructor(payload: OrderHistoryList);
}
export declare class ClearUserOrders extends StateUtils.LoaderResetAction {
    readonly type = "[User] Clear User Orders";
    constructor();
}
export declare type UserOrdersAction = LoadUserOrders | LoadUserOrdersFail | LoadUserOrdersSuccess | ClearUserOrders;
