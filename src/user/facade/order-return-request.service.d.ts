import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { ReturnRequest, ReturnRequestEntryInputList, ReturnRequestList, ReturnRequestModification } from '../../model/order.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class OrderReturnRequestService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected userIdService: UserIdService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, userIdService: UserIdService);
    /**
     * Create order return request
     * @param orderCode an order code
     * @param returnRequestInput order return request entry input
     */
    createOrderReturnRequest(returnRequestInput: ReturnRequestEntryInputList): void;
    /**
     * Return an order return request
     */
    getOrderReturnRequest(): Observable<ReturnRequest>;
    /**
     * Gets order return request list
     */
    getOrderReturnRequestList(pageSize: number): Observable<ReturnRequestList>;
    /**
     * Loads order return request detail
     * @param returnRequestCode
     */
    loadOrderReturnRequestDetail(returnRequestCode: string): void;
    /**
     * Loads order return request list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    loadOrderReturnRequestList(pageSize: number, currentPage?: number, sort?: string): void;
    /**
     * Cleaning order return request list
     */
    clearOrderReturnRequestList(): void;
    /**
     * Get the order return request loading flag
     */
    getReturnRequestLoading(): Observable<boolean>;
    /**
     * Get the order return request success flag
     */
    getReturnRequestSuccess(): Observable<boolean>;
    /**
     * Cleaning order return request details
     */
    clearOrderReturnRequestDetail(): void;
    cancelOrderReturnRequest(returnRequestCode: string, returnRequestModification: ReturnRequestModification): void;
    /**
     * Returns the cancel return request loading flag
     */
    getCancelReturnRequestLoading(): Observable<boolean>;
    /**
     * Returns the cancel return request success flag
     */
    getCancelReturnRequestSuccess(): Observable<boolean>;
    /**
     * Resets the cancel return request process flags
     */
    resetCancelReturnRequestProcessState(): void;
}
