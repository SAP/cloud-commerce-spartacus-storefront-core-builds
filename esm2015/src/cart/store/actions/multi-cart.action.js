import { EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, EntityProcessesLoaderResetAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
export const REMOVE_TEMP_CART = '[Multi Cart] Remove Temp Cart';
export const RESET_MULTI_CART_DETAILS = '[Multi Cart] Reset Cart Details';
export const SET_TEMP_CART = '[Multi Cart] Set Temp Cart';
export const REMOVE_CART = '[Multi Cart] Remove Cart';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsOEJBQThCLEVBQzlCLGdDQUFnQyxHQUNqQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRywrQkFBK0IsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxpQ0FBaUMsQ0FBQztBQUUxRSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsNEJBQTRCLENBQUM7QUFFMUQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLDBCQUEwQixDQUFDO0FBRXRELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLHVDQUF1QyxDQUFDO0FBQ2hGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLHVDQUF1QyxDQUFDO0FBRWhGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLGlDQUFpQyxDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLCtCQUErQixDQUFDO0FBRXRFOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sY0FBZSxTQUFRLGtCQUFrQjtJQUVwRCxZQUFtQixPQUErQjtRQUNoRCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUR6QyxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLFdBQVksU0FBUSxtQkFBbUI7SUFFbEQsWUFBbUIsT0FBMkM7UUFDNUQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUR4QyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsYUFBYSxDQUFDO0lBRzlCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxnQ0FBZ0M7SUFFekU7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRjNCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sVUFBVyxTQUFRLGtCQUFrQjtJQUVoRCxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxXQUFXLENBQUM7SUFHNUIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLDhCQUE4QjtJQUV4RSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUd6QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsOEJBQThCO0lBRXhFLFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNFLENBQUM7Q0FDdkM7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCO0lBRXpEO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUZ0QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5U3VjY2Vzc0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0xvYWRlclJlc2V0QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5UmVtb3ZlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5L2VudGl0eS5hY3Rpb24nO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9EQVRBIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfVEVNUF9DQVJUID0gJ1tNdWx0aSBDYXJ0XSBSZW1vdmUgVGVtcCBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IFJFU0VUX01VTFRJX0NBUlRfREVUQUlMUyA9ICdbTXVsdGkgQ2FydF0gUmVzZXQgQ2FydCBEZXRhaWxzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9URU1QX0NBUlQgPSAnW011bHRpIENhcnRdIFNldCBUZW1wIENhcnQnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlQgPSAnW011bHRpIENhcnRdIFJlbW92ZSBDYXJ0JztcblxuZXhwb3J0IGNvbnN0IENBUlRfUFJPQ0VTU0VTX0lOQ1JFTUVOVCA9ICdbTXVsdGkgQ2FydF0gQ2FydCBQcm9jZXNzZXMgSW5jcmVtZW50JztcbmV4cG9ydCBjb25zdCBDQVJUX1BST0NFU1NFU19ERUNSRU1FTlQgPSAnW011bHRpIENhcnRdIENhcnQgUHJvY2Vzc2VzIERlY3JlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFX0NBUlRfSUQgPSAnW011bHRpIENhcnRdIFNldCBBY3RpdmUgQ2FydCBJZCc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9NVUxUSV9DQVJUX1NUQVRFID0gJ1tNdWx0aSBDYXJ0XSBDbGVhciBDYXJ0IFN0YXRlJztcblxuLyoqXG4gKiBUbyBrZWVwIHRyYWNrIG9mIGNhcnQgY3JlYXRpb24gcHJvY2VzcyB3ZSB1c2UgY2FydCB3aXRoIGB0ZW1wLSR7dXVpZH1gIGlkLlxuICogQWZ0ZXIgY3JlYXRpbmcgY2FydCB3ZSBzd2l0Y2ggdG8gZW50aXR5IHdpdGggYGNvZGVgIG9yIGBndWlkYC5cbiAqIFdlIG5lZWQgYHRlbXAtJHt1dWlkfWAgY2FydCBlbnRpdGllcyBmb3IgbG9hZGluZy9lcnJvciBzdGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlbW92ZVRlbXBDYXJ0IGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9URU1QX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRlbXBDYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRUZW1wQ2FydCBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX1RFTVBfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdGVtcENhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQudGVtcENhcnRJZCwgcGF5bG9hZC5jYXJ0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRNdWx0aUNhcnREZXRhaWxzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfTVVMVElfQ0FSVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUNhcnQgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUFJPQ0VTU0VTX0lOQ1JFTUVOVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRQcm9jZXNzZXNEZWNyZW1lbnQgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlQ2FydElkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9BQ1RJVkVfQ0FSVF9JRDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyTXVsdGlDYXJ0U3RhdGUgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfTVVMVElfQ0FSVF9TVEFURTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBNdWx0aUNhcnRBY3Rpb25zID1cbiAgfCBSZW1vdmVUZW1wQ2FydFxuICB8IFNldFRlbXBDYXJ0XG4gIHwgUmVzZXRNdWx0aUNhcnREZXRhaWxzXG4gIHwgUmVtb3ZlQ2FydFxuICB8IENhcnRQcm9jZXNzZXNJbmNyZW1lbnRcbiAgfCBDYXJ0UHJvY2Vzc2VzRGVjcmVtZW50XG4gIHwgU2V0QWN0aXZlQ2FydElkXG4gIHwgQ2xlYXJNdWx0aUNhcnRTdGF0ZTtcbiJdfQ==