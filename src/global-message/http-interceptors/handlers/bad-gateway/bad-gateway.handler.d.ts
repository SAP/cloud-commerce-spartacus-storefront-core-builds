import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
export declare class BadGatewayHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
    getPriority(): Priority;
}
