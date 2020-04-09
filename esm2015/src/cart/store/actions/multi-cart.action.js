import { EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAllAction } from '../../../state/utils/entity/entity.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
export const SET_TEMP_CART = '[Multi Cart] Set Temp Cart';
export const CART_PROCESSES_INCREMENT = '[Multi Cart] Cart Processes Increment';
export const CART_PROCESSES_DECREMENT = '[Multi Cart] Cart Processes Decrement';
export const SET_ACTIVE_CART_ID = '[Multi Cart] Set Active Cart Id';
export const CLEAR_CART_STATE = '[Cart] Clear Cart State';
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
export class SetTempCart extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId, payload.cart);
        this.payload = payload;
        this.type = SET_TEMP_CART;
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
/**
 * Clear whole cart store state: all entities + reset rest of the cart state.
 */
export class ClearCartState extends EntityRemoveAllAction {
    constructor() {
        super(MULTI_CART_DATA);
        this.type = CLEAR_CART_STATE;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsOEJBQThCLEdBQy9CLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyw0QkFBNEIsQ0FBQztBQUUxRCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUNoRixNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUVoRixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxpQ0FBaUMsQ0FBQztBQUVwRSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztBQUUxRDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLFdBQVksU0FBUSxtQkFBbUI7SUFFbEQsWUFBbUIsT0FBMkM7UUFDNUQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUR4QyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsYUFBYSxDQUFDO0lBRzlCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSw4QkFBOEI7SUFFeEUsWUFBbUIsT0FBZTtRQUNoQyxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFHekMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDhCQUE4QjtJQUV4RSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDRSxDQUFDO0NBQ3ZDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBZSxTQUFRLHFCQUFxQjtJQUV2RDtRQUNFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUZoQixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5U3VjY2Vzc0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlSZW1vdmVBbGxBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0RBVEEgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFNFVF9URU1QX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBUZW1wIENhcnQnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UID0gJ1tNdWx0aSBDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBJbmNyZW1lbnQnO1xuZXhwb3J0IGNvbnN0IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVCA9ICdbTXVsdGkgQ2FydF0gQ2FydCBQcm9jZXNzZXMgRGVjcmVtZW50JztcblxuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfQ0FSVF9JRCA9ICdbTXVsdGkgQ2FydF0gU2V0IEFjdGl2ZSBDYXJ0IElkJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUlRfU1RBVEUgPSAnW0NhcnRdIENsZWFyIENhcnQgU3RhdGUnO1xuXG4vKipcbiAqIFRvIGtlZXAgdHJhY2sgb2YgY2FydCBjcmVhdGlvbiBwcm9jZXNzIHdlIHVzZSBjYXJ0IHdpdGggYHRlbXAtJHt1dWlkfWAgaWQuXG4gKiBBZnRlciBjcmVhdGluZyBjYXJ0IHdlIHN3aXRjaCB0byBlbnRpdHkgd2l0aCBgY29kZWAgb3IgYGd1aWRgLlxuICogV2UgbmVlZCBgdGVtcC0ke3V1aWR9YCBjYXJ0IGVudGl0aWVzIGZvciBsb2FkaW5nL2Vycm9yIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgU2V0VGVtcENhcnQgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9URU1QX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHRlbXBDYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQsIHBheWxvYWQuY2FydCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRQcm9jZXNzZXNJbmNyZW1lbnQgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19ERUNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVDYXJ0SWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9DQVJUX0lEO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG4vKipcbiAqIENsZWFyIHdob2xlIGNhcnQgc3RvcmUgc3RhdGU6IGFsbCBlbnRpdGllcyArIHJlc2V0IHJlc3Qgb2YgdGhlIGNhcnQgc3RhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGVhckNhcnRTdGF0ZSBleHRlbmRzIEVudGl0eVJlbW92ZUFsbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DQVJUX1NUQVRFO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE11bHRpQ2FydEFjdGlvbnMgPVxuICB8IFNldFRlbXBDYXJ0XG4gIHwgQ2FydFByb2Nlc3Nlc0luY3JlbWVudFxuICB8IENhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgfCBTZXRBY3RpdmVDYXJ0SWRcbiAgfCBDbGVhckNhcnRTdGF0ZTtcbiJdfQ==