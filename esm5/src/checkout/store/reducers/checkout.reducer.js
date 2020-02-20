import { __assign } from "tslib";
import { CheckoutActions } from './../actions/index';
export var initialState = {
    address: {},
    deliveryMode: {
        supported: {},
        selected: '',
    },
    paymentDetails: {},
    orderDetails: {},
};
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CheckoutActions.ADD_DELIVERY_ADDRESS_SUCCESS:
        case CheckoutActions.SET_DELIVERY_ADDRESS_SUCCESS: {
            var address = action.payload;
            return __assign(__assign({}, state), { address: address });
        }
        case CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
            var supportedModes = action.payload;
            if (!supportedModes) {
                return state;
            }
            var supported = supportedModes.reduce(function (modes, mode) {
                var _a;
                return __assign(__assign({}, modes), (_a = {}, _a[mode.code] = mode, _a));
            }, __assign({}, state.deliveryMode.supported));
            return __assign(__assign({}, state), { deliveryMode: __assign(__assign({}, state.deliveryMode), { supported: supported }) });
        }
        case CheckoutActions.SET_DELIVERY_MODE_SUCCESS: {
            var selected = action.payload;
            return __assign(__assign({}, state), { deliveryMode: __assign(__assign({}, state.deliveryMode), { selected: selected }) });
        }
        case CheckoutActions.CREATE_PAYMENT_DETAILS_SUCCESS:
        case CheckoutActions.SET_PAYMENT_DETAILS_SUCCESS: {
            return __assign(__assign({}, state), { paymentDetails: action.payload });
        }
        case CheckoutActions.CREATE_PAYMENT_DETAILS_FAIL: {
            var paymentDetails = action.payload;
            if (paymentDetails['hasError']) {
                return __assign(__assign({}, state), { paymentDetails: paymentDetails });
            }
            return state;
        }
        case CheckoutActions.PLACE_ORDER_SUCCESS: {
            var orderDetails = action.payload;
            return __assign(__assign({}, state), { orderDetails: orderDetails });
        }
        case CheckoutActions.CLEAR_CHECKOUT_DATA: {
            return initialState;
        }
        case CheckoutActions.CLEAR_CHECKOUT_STEP: {
            var stepNumber = action.payload;
            switch (stepNumber) {
                case 1: {
                    return __assign(__assign({}, state), { address: {} });
                }
                case 2: {
                    return __assign(__assign({}, state), { deliveryMode: __assign(__assign({}, state.deliveryMode), { supported: {}, selected: '' }) });
                }
                case 3: {
                    return __assign(__assign({}, state), { paymentDetails: {} });
                }
            }
            return state;
        }
        case CheckoutActions.CLEAR_SUPPORTED_DELIVERY_MODES:
        case CheckoutActions.CHECKOUT_CLEAR_MISCS_DATA: {
            return __assign(__assign({}, state), { deliveryMode: __assign(__assign({}, state.deliveryMode), { supported: {} }) });
        }
        case CheckoutActions.LOAD_CHECKOUT_DETAILS_SUCCESS: {
            return __assign(__assign({}, state), { address: action.payload.deliveryAddress, deliveryMode: __assign(__assign({}, state.deliveryMode), { selected: action.payload.deliveryMode && action.payload.deliveryMode.code }), paymentDetails: action.payload.paymentInfo });
        }
        case CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS: {
            return __assign(__assign({}, state), { address: {} });
        }
        case CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE: {
            return __assign(__assign({}, state), { deliveryMode: __assign(__assign({}, state.deliveryMode), { selected: '' }) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9jaGVja291dC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUF1QjtJQUM5QyxPQUFPLEVBQUUsRUFBRTtJQUNYLFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFlBQVksRUFBRSxFQUFFO0NBQ2pCLENBQUM7QUFFRixNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUUwQztJQUgxQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUtwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxlQUFlLENBQUMsNEJBQTRCLENBQUM7UUFDbEQsS0FBSyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNqRCxJQUFNLE9BQU8sR0FBWSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRXhDLDZCQUNLLEtBQUssS0FDUixPQUFPLFNBQUEsSUFDUDtTQUNIO1FBRUQsS0FBSyxlQUFlLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUMxRCxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxJQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUNyQyxVQUFDLEtBQXVDLEVBQUUsSUFBa0I7O2dCQUMxRCw2QkFDSyxLQUFLLGdCQUNQLElBQUksQ0FBQyxJQUFJLElBQUcsSUFBSSxPQUNqQjtZQUNKLENBQUMsZUFFSSxLQUFLLENBQUMs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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGUsIE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwc1N0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi8uLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlID0ge1xuICBhZGRyZXNzOiB7fSxcbiAgZGVsaXZlcnlNb2RlOiB7XG4gICAgc3VwcG9ydGVkOiB7fSxcbiAgICBzZWxlY3RlZDogJycsXG4gIH0sXG4gIHBheW1lbnREZXRhaWxzOiB7fSxcbiAgb3JkZXJEZXRhaWxzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOlxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNoZWNrb3V0QWN0aW9uXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YVxuKTogQ2hlY2tvdXRTdGVwc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M6XG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgYWRkcmVzczogQWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkcmVzcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgc3VwcG9ydGVkTW9kZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlmICghc3VwcG9ydGVkTW9kZXMpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdXBwb3J0ZWQgPSBzdXBwb3J0ZWRNb2Rlcy5yZWR1Y2UoXG4gICAgICAgIChtb2RlczogeyBbY29kZTogc3RyaW5nXTogRGVsaXZlcnlNb2RlIH0sIG1vZGU6IERlbGl2ZXJ5TW9kZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5tb2RlcyxcbiAgICAgICAgICAgIFttb2RlLmNvZGVdOiBtb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUuc3VwcG9ydGVkLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGVsaXZlcnlNb2RlOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZGVsaXZlcnlNb2RlLFxuICAgICAgICAgIHN1cHBvcnRlZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUzoge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTOlxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLlNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBheW1lbnREZXRhaWxzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMOiB7XG4gICAgICBjb25zdCBwYXltZW50RGV0YWlscyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKHBheW1lbnREZXRhaWxzWydoYXNFcnJvciddKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcGF5bWVudERldGFpbHMsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5QTEFDRV9PUkRFUl9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBvcmRlckRldGFpbHM6IE9yZGVyID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcmRlckRldGFpbHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RBVEE6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfU1RFUDoge1xuICAgICAgY29uc3Qgc3RlcE51bWJlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3dpdGNoIChzdGVwTnVtYmVyKSB7XG4gICAgICAgIGNhc2UgMToge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHt9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUuZGVsaXZlcnlNb2RlLFxuICAgICAgICAgICAgICBzdXBwb3J0ZWQ6IHt9LFxuICAgICAgICAgICAgICBzZWxlY3RlZDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwYXltZW50RGV0YWlsczoge30sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ0xFQVJfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTOlxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkNIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEE6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUsXG4gICAgICAgICAgc3VwcG9ydGVkOiB7fSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkxPQURfQ0hFQ0tPVVRfREVUQUlMU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkcmVzczogYWN0aW9uLnBheWxvYWQuZGVsaXZlcnlBZGRyZXNzLFxuICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUsXG4gICAgICAgICAgc2VsZWN0ZWQ6XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5kZWxpdmVyeU1vZGUgJiYgYWN0aW9uLnBheWxvYWQuZGVsaXZlcnlNb2RlLmNvZGUsXG4gICAgICAgIH0sXG4gICAgICAgIHBheW1lbnREZXRhaWxzOiBhY3Rpb24ucGF5bG9hZC5wYXltZW50SW5mbyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZHJlc3M6IHt9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGVsaXZlcnlNb2RlOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZGVsaXZlcnlNb2RlLFxuICAgICAgICAgIHNlbGVjdGVkOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19