import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_DATA } from '../multi-cart-state';
export const REMOVE_TEMP_CART = '[Multi Cart] Remove Temp Cart';
export const CREATE_MULTI_CART = '[Multi Cart] Create Cart';
export const CREATE_MULTI_CART_FAIL = '[Multi Cart] Create Cart Fail';
export const CREATE_MULTI_CART_SUCCESS = '[Multi Cart] Create Cart Success';
export const LOAD_MULTI_CART = '[Multi Cart] Load Cart';
export const LOAD_MULTI_CART_FAIL = '[Multi Cart] Load Cart Fail';
export const LOAD_MULTI_CART_SUCCESS = '[Multi Cart] Load Cart Success';
export const MERGE_MULTI_CART = '[Multi Cart] Merge Cart';
export const MERGE_MULTI_CART_SUCCESS = '[Multi Cart] Merge Cart Success';
export const RESET_MULTI_CART_DETAILS = '[Multi Cart] Reset Cart Details';
export const SET_TEMP_CART = '[Multi Cart] Set Temp Cart';
export const REMOVE_CART = '[Multi Cart] Remove Cart';
export const ADD_EMAIL_TO_MULTI_CART = '[Multi Cart] Add Email';
export const ADD_EMAIL_TO_MULTI_CART_FAIL = '[Multi Cart] Add Email Fail';
export const ADD_EMAIL_TO_MULTI_CART_SUCCESS = '[Multi Cart] Add Email Success';
export const CART_PROCESSES_INCREMENT = '[Multi Cart] Cart Processes Increment';
export const CART_PROCESSES_DECREMENT = '[Multi Cart] Cart Processes Decrement';
export const SET_ACTIVE_CART_ID = '[Multi Cart] Set Active Cart Id';
export const CLEAR_MULTI_CART_STATE = '[Multi Cart] Clear Cart State';
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
export class RemoveTempCart extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = REMOVE_TEMP_CART;
    }
}
export class SetTempCart extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId, payload.cart);
        this.payload = payload;
        this.type = SET_TEMP_CART;
    }
}
export class CreateMultiCart extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = CREATE_MULTI_CART;
    }
}
export class CreateMultiCartFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = CREATE_MULTI_CART_FAIL;
    }
}
export class CreateMultiCartSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = CREATE_MULTI_CART_SUCCESS;
    }
}
export class LoadMultiCart extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = LOAD_MULTI_CART;
    }
}
export class LoadMultiCartFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = LOAD_MULTI_CART_FAIL;
    }
}
export class LoadMultiCartSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = LOAD_MULTI_CART_SUCCESS;
    }
}
export class MergeMultiCart {
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_MULTI_CART;
    }
}
export class MergeMultiCartSuccess extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.oldCartId);
        this.payload = payload;
        this.type = MERGE_MULTI_CART_SUCCESS;
    }
}
export class ResetMultiCartDetails extends EntityProcessesLoaderResetAction {
    constructor() {
        super(MULTI_CART_DATA, undefined);
        this.type = RESET_MULTI_CART_DETAILS;
    }
}
export class RemoveCart extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload);
        this.payload = payload;
        this.type = REMOVE_CART;
    }
}
export class AddEmailToMultiCart extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_MULTI_CART;
    }
}
export class AddEmailToMultiCartFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_MULTI_CART_FAIL;
    }
}
export class AddEmailToMultiCartSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_MULTI_CART_SUCCESS;
    }
}
export class CartProcessesIncrement extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload);
        this.payload = payload;
        this.type = CART_PROCESSES_INCREMENT;
    }
}
export class CartProcessesDecrement extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload);
        this.payload = payload;
        this.type = CART_PROCESSES_DECREMENT;
    }
}
export class SetActiveCartId {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CART_ID;
    }
}
export class ClearMultiCartState extends EntityRemoveAction {
    constructor() {
        super(MULTI_CART_DATA, null);
        this.type = CLEAR_MULTI_CART_STATE;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsOEJBQThCLEVBQzlCLGdDQUFnQyxHQUNqQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRywrQkFBK0IsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUM1RCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQztBQUN0RSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUU1RSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsd0JBQXdCLENBQUM7QUFDeEQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsNkJBQTZCLENBQUM7QUFDbEUsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsZ0NBQWdDLENBQUM7QUFFeEUsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7QUFDMUQsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFFMUUsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFFMUUsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLDRCQUE0QixDQUFDO0FBRTFELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztBQUV0RCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyx3QkFBd0IsQ0FBQztBQUNoRSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyw2QkFBNkIsQ0FBQztBQUMxRSxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUVoRixNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUNoRixNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUVoRixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxpQ0FBaUMsQ0FBQztBQUVwRSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQztBQUV0RTs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFFcEQsWUFBbUIsT0FBK0I7UUFDaEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFEMUIsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFEekMsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBR2pDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxXQUFZLFNBQVEsbUJBQW1CO0lBRWxELFlBQW1CLE9BQTJDO1FBQzVELEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUc5QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxnQkFBZ0I7SUFFbkQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBRXZELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFEMUIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG1CQUFtQjtJQUU3RCxZQUFtQixPQUF3RDtRQUN6RSxLQUFLLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFEdkQsWUFBTyxHQUFQLE9BQU8sQ0FBaUQ7UUFEbEUsU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBRzFDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxhQUFjLFNBQVEsZ0JBQWdCO0lBRWpELFlBQW1CLE9BQTJDO1FBQzVELEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRHRCLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRyxlQUFlLENBQUM7SUFHaEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUVyRCxZQUFtQixPQUF3QztRQUN6RCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRHJDLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBRGxELFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUdyQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1CO0lBRTNELFlBQW1CLE9BQXdEO1FBQ3pFLEtBQUssQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUR2RCxZQUFPLEdBQVAsT0FBTyxDQUFpRDtRQURsRSxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFHeEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBQ0MsQ0FBQztDQUNwQztBQUVELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxrQkFBa0I7SUFFM0QsWUFDUyxPQUE4RDtRQUVyRSxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUZuQyxZQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFLekMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGdDQUFnQztJQUV6RTtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFGM0IsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxVQUFXLFNBQVEsa0JBQWtCO0lBRWhELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUc1QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBRXZELFlBQ1MsT0FBMEQ7UUFFakUsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFGaEMsWUFBTyxHQUFQLE9BQU8sQ0FBbUQ7UUFGMUQsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBS3hDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7SUFFM0QsWUFBbUIsT0FBdUQ7UUFDeEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQURyQyxZQUFPLEdBQVAsT0FBTyxDQUFnRDtRQURqRSxTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFHN0MsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjtJQUVqRSxZQUFtQixPQUEyQztRQUM1RCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUR0QixZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFHaEQsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDhCQUE4QjtJQUV4RSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsOEJBQThCO0lBRXhFLFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNFLENBQUM7Q0FDdkM7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCO0lBRXpEO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUZ0QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQge1xuICBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbixcbiAgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlSZW1vdmVBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfREFUQSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1RFTVBfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gUmVtb3ZlIFRlbXAgQ2FydCc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfTVVMVElfQ0FSVCA9ICdbTXVsdGkgQ2FydF0gQ3JlYXRlIENhcnQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIENyZWF0ZSBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9NVUxUSV9DQVJUX1NVQ0NFU1MgPSAnW011bHRpIENhcnRdIENyZWF0ZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBMb2FkIENhcnQnO1xuZXhwb3J0IGNvbnN0IExPQURfTVVMVElfQ0FSVF9GQUlMID0gJ1tNdWx0aSBDYXJ0XSBMb2FkIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9NVUxUSV9DQVJUX1NVQ0NFU1MgPSAnW011bHRpIENhcnRdIExvYWQgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IE1FUkdFX01VTFRJX0NBUlQgPSAnW011bHRpIENhcnRdIE1lcmdlIENhcnQnO1xuZXhwb3J0IGNvbnN0IE1FUkdFX01VTFRJX0NBUlRfU1VDQ0VTUyA9ICdbTXVsdGkgQ2FydF0gTWVyZ2UgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX01VTFRJX0NBUlRfREVUQUlMUyA9ICdbTXVsdGkgQ2FydF0gUmVzZXQgQ2FydCBEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9URU1QX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBUZW1wIENhcnQnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwnO1xuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19NVUxUSV9DQVJUX0ZBSUwgPSAnW011bHRpIENhcnRdIEFkZCBFbWFpbCBGYWlsJztcbmV4cG9ydCBjb25zdCBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9TVUNDRVNTID0gJ1tNdWx0aSBDYXJ0XSBBZGQgRW1haWwgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQgPSAnW011bHRpIENhcnRdIENhcnQgUHJvY2Vzc2VzIEluY3JlbWVudCc7XG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBEZWNyZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgU0VUX0FDVElWRV9DQVJUX0lEID0gJ1tNdWx0aSBDYXJ0XSBTZXQgQWN0aXZlIENhcnQgSWQnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfTVVMVElfQ0FSVF9TVEFURSA9ICdbTXVsdGkgQ2FydF0gQ2xlYXIgQ2FydCBTdGF0ZSc7XG5cbi8qKlxuICogVG8ga2VlcCB0cmFjayBvZiBjYXJ0IGNyZWF0aW9uIHByb2Nlc3Mgd2UgdXNlIGNhcnQgd2l0aCBgdGVtcC0ke3V1aWR9YCBpZC5cbiAqIEFmdGVyIGNyZWF0aW5nIGNhcnQgd2Ugc3dpdGNoIHRvIGVudGl0eSB3aXRoIGBjb2RlYCBvciBgZ3VpZGAuXG4gKiBXZSBuZWVkIGB0ZW1wLSR7dXVpZH1gIGNhcnQgZW50aXRpZXMgZm9yIGxvYWRpbmcvZXJyb3Igc3RhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdmVUZW1wQ2FydCBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfVEVNUF9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB0ZW1wQ2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC50ZW1wQ2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0VGVtcENhcnQgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9URU1QX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHRlbXBDYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQsIHBheWxvYWQuY2FydCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQudGVtcENhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQudGVtcENhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZU11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHVzZXJJZDogc3RyaW5nOyBleHRyYURhdGE/OiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRNdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX01VTFRJX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IGVycm9yPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE11bHRpQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTVVMVElfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0OiBDYXJ0OyB1c2VySWQ6IHN0cmluZzsgZXh0cmFEYXRhPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIGdldENhcnRJZEJ5VXNlcklkKHBheWxvYWQuY2FydCwgcGF5bG9hZC51c2VySWQpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VNdWx0aUNhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTUVSR0VfTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIE1lcmdlTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9NVUxUSV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IG9sZENhcnRJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdXNlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQub2xkQ2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRNdWx0aUNhcnREZXRhaWxzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUNhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9NdWx0aUNhcnRGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfRU1BSUxfVE9fTVVMVElfQ0FSVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0VNQUlMX1RPX01VTFRJX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0luY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZUNhcnRJZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQUNUSVZFX0NBUlRfSUQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhck11bHRpQ2FydFN0YXRlIGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX01VTFRJX0NBUlRfU1RBVEU7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgbnVsbCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlDYXJ0QWN0aW9ucyA9XG4gIHwgUmVtb3ZlVGVtcENhcnRcbiAgfCBTZXRUZW1wQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydFxuICB8IENyZWF0ZU11bHRpQ2FydEZhaWxcbiAgfCBDcmVhdGVNdWx0aUNhcnRTdWNjZXNzXG4gIHwgTG9hZE11bHRpQ2FydFxuICB8IExvYWRNdWx0aUNhcnRGYWlsXG4gIHwgTG9hZE11bHRpQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZU11bHRpQ2FydFxuICB8IE1lcmdlTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IFJlc2V0TXVsdGlDYXJ0RGV0YWlsc1xuICB8IFJlbW92ZUNhcnRcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0XG4gIHwgQWRkRW1haWxUb011bHRpQ2FydEZhaWxcbiAgfCBBZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2Vzc1xuICB8IENhcnRQcm9jZXNzZXNJbmNyZW1lbnRcbiAgfCBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gIHwgU2V0QWN0aXZlQ2FydElkXG4gIHwgQ2xlYXJNdWx0aUNhcnRTdGF0ZTtcbiJdfQ==