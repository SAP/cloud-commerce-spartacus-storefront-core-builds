import { CheckoutActions } from './../actions/index';
export const initialState = {
    poNumber: { po: undefined, costCenter: undefined },
    address: {},
    deliveryMode: {
        supported: {},
        selected: '',
    },
    paymentDetails: {},
    orderDetails: {},
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case CheckoutActions.SET_PAYMENT_TYPE_SUCCESS: {
            const cart = action.payload;
            return Object.assign(Object.assign({}, state), { poNumber: Object.assign(Object.assign({}, state.poNumber), { po: cart.purchaseOrderNumber }) });
        }
        case CheckoutActions.SET_COST_CENTER_SUCCESS: {
            return Object.assign(Object.assign({}, state), { poNumber: Object.assign(Object.assign({}, state.poNumber), { costCenter: action.payload }) });
        }
        case CheckoutActions.ADD_DELIVERY_ADDRESS_SUCCESS:
        case CheckoutActions.SET_DELIVERY_ADDRESS_SUCCESS: {
            const address = action.payload;
            return Object.assign(Object.assign({}, state), { address });
        }
        case CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS: {
            const supportedModes = action.payload;
            if (!supportedModes) {
                return state;
            }
            const supported = supportedModes.reduce((modes, mode) => {
                return Object.assign(Object.assign({}, modes), { [mode.code]: mode });
            }, Object.assign({}, state.deliveryMode.supported));
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { supported }) });
        }
        case CheckoutActions.SET_DELIVERY_MODE_SUCCESS: {
            const selected = action.payload;
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { selected }) });
        }
        case CheckoutActions.CREATE_PAYMENT_DETAILS_SUCCESS:
        case CheckoutActions.SET_PAYMENT_DETAILS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { paymentDetails: action.payload });
        }
        case CheckoutActions.CREATE_PAYMENT_DETAILS_FAIL: {
            const paymentDetails = action.payload;
            if (paymentDetails['hasError']) {
                return Object.assign(Object.assign({}, state), { paymentDetails });
            }
            return state;
        }
        case CheckoutActions.PLACE_ORDER_SUCCESS:
        case CheckoutActions.SCHEDULE_REPLENISHMENT_ORDER_SUCCESS: {
            const orderDetails = action.payload;
            return Object.assign(Object.assign({}, state), { orderDetails });
        }
        case CheckoutActions.CLEAR_CHECKOUT_DATA: {
            return initialState;
        }
        case CheckoutActions.CLEAR_CHECKOUT_STEP: {
            const stepNumber = action.payload;
            switch (stepNumber) {
                case 1: {
                    return Object.assign(Object.assign({}, state), { address: {} });
                }
                case 2: {
                    return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { supported: {}, selected: '' }) });
                }
                case 3: {
                    return Object.assign(Object.assign({}, state), { paymentDetails: {} });
                }
            }
            return state;
        }
        case CheckoutActions.CLEAR_SUPPORTED_DELIVERY_MODES:
        case CheckoutActions.CHECKOUT_CLEAR_MISCS_DATA: {
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { supported: {} }) });
        }
        case CheckoutActions.LOAD_CHECKOUT_DETAILS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { address: action.payload.deliveryAddress, deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { selected: action.payload.deliveryMode && action.payload.deliveryMode.code }), paymentDetails: action.payload.paymentInfo });
        }
        case CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS: {
            return Object.assign(Object.assign({}, state), { address: {} });
        }
        case CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE: {
            return Object.assign(Object.assign({}, state), { deliveryMode: Object.assign(Object.assign({}, state.deliveryMode), { selected: '' }) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L3N0b3JlL3JlZHVjZXJzL2NoZWNrb3V0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBdUI7SUFDOUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFO0lBQ2xELE9BQU8sRUFBRSxFQUFFO0lBQ1gsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsWUFBWSxFQUFFLEVBQUU7Q0FDakIsQ0FBQztBQUVGLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BSTZDO0lBRTdDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sSUFBSSxHQUFTLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbEMsdUNBQ0ssS0FBSyxLQUNSLFFBQVEsa0NBQ0gsS0FBSyxDQUFDLFFBQVEsS0FDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsT0FFOUI7U0FDSDtRQUVELEtBQUssZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDNUMsdUNBQ0ssS0FBSyxLQUNSLFFBQVEsa0NBQ0gsS0FBSyxDQUFDLFFBQVEsS0FDakIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLE9BRTVCO1NBQ0g7UUFFRCxLQUFLLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQztRQUNsRCxLQUFLLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lB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QUFDLFlBQVksS0FDckIsUUFBUSxFQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksS0FFbkUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUMxQztTQUNIO1FBRUQsS0FBSyxlQUFlLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUNwRCx1Q0FDSyxLQUFLLEtBQ1IsT0FBTyxFQUFFLEVBQUUsSUFDWDtTQUNIO1FBRUQsS0FBSyxlQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUNqRCx1Q0FDSyxLQUFLLEtBQ1IsWUFBWSxrQ0FDUCxLQUFLLENBQUMsWUFBWSxLQUNyQixRQUFRLEVBQUUsRUFBRSxPQUVkO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZSwgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBSZXBsZW5pc2htZW50T3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9yZXBsZW5pc2htZW50LW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcHNTdGF0ZSB9IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4vLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSA9IHtcbiAgcG9OdW1iZXI6IHsgcG86IHVuZGVmaW5lZCwgY29zdENlbnRlcjogdW5kZWZpbmVkIH0sXG4gIGFkZHJlc3M6IHt9LFxuICBkZWxpdmVyeU1vZGU6IHtcbiAgICBzdXBwb3J0ZWQ6IHt9LFxuICAgIHNlbGVjdGVkOiAnJyxcbiAgfSxcbiAgcGF5bWVudERldGFpbHM6IHt9LFxuICBvcmRlckRldGFpbHM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246XG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRBY3Rpb25cbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DaGVja291dENsZWFyTWlzY3NEYXRhXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudFR5cGVTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuUmVwbGVuaXNobWVudE9yZGVyQWN0aW9uc1xuKTogQ2hlY2tvdXRTdGVwc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLlNFVF9QQVlNRU5UX1RZUEVfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY2FydDogQ2FydCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvTnVtYmVyOiB7XG4gICAgICAgICAgLi4uc3RhdGUucG9OdW1iZXIsXG4gICAgICAgICAgcG86IGNhcnQucHVyY2hhc2VPcmRlck51bWJlcixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuU0VUX0NPU1RfQ0VOVEVSX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb051bWJlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnBvTnVtYmVyLFxuICAgICAgICAgIGNvc3RDZW50ZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5BRERfREVMSVZFUllfQUREUkVTU19TVUNDRVNTOlxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLlNFVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGFkZHJlc3M6IEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkxPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHN1cHBvcnRlZE1vZGVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoIXN1cHBvcnRlZE1vZGVzKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3VwcG9ydGVkID0gc3VwcG9ydGVkTW9kZXMucmVkdWNlKFxuICAgICAgICAobW9kZXM6IHsgW2NvZGU6IHN0cmluZ106IERlbGl2ZXJ5TW9kZSB9LCBtb2RlOiBEZWxpdmVyeU1vZGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubW9kZXMsXG4gICAgICAgICAgICBbbW9kZS5jb2RlXTogbW9kZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZGVsaXZlcnlNb2RlLnN1cHBvcnRlZCxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzdXBwb3J0ZWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLlNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUsXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkNSRUFURV9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUzpcbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5TRVRfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYXltZW50RGV0YWlsczogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkNSRUFURV9QQVlNRU5UX0RFVEFJTFNfRkFJTDoge1xuICAgICAgY29uc3QgcGF5bWVudERldGFpbHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlmIChwYXltZW50RGV0YWlsc1snaGFzRXJyb3InXSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHBheW1lbnREZXRhaWxzLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuUExBQ0VfT1JERVJfU1VDQ0VTUzpcbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5TQ0hFRFVMRV9SRVBMRU5JU0hNRU5UX09SREVSX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IG9yZGVyRGV0YWlsczogT3JkZXIgfCBSZXBsZW5pc2htZW50T3JkZXIgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG9yZGVyRGV0YWlscyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ0xFQVJfQ0hFQ0tPVVRfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9TVEVQOiB7XG4gICAgICBjb25zdCBzdGVwTnVtYmVyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzd2l0Y2ggKHN0ZXBOdW1iZXIpIHtcbiAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkcmVzczoge30sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUsXG4gICAgICAgICAgICAgIHN1cHBvcnRlZDoge30sXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzOiB7fSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVM6XG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzdXBwb3J0ZWQ6IHt9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuTE9BRF9DSEVDS09VVF9ERVRBSUxTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRyZXNzOiBhY3Rpb24ucGF5bG9hZC5kZWxpdmVyeUFkZHJlc3MsXG4gICAgICAgIGRlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIC4uLnN0YXRlLmRlbGl2ZXJ5TW9kZSxcbiAgICAgICAgICBzZWxlY3RlZDpcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmRlbGl2ZXJ5TW9kZSAmJiBhY3Rpb24ucGF5bG9hZC5kZWxpdmVyeU1vZGUuY29kZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGF5bWVudERldGFpbHM6IGFjdGlvbi5wYXlsb2FkLnBheW1lbnRJbmZvLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWRkcmVzczoge30sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkNMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5kZWxpdmVyeU1vZGUsXG4gICAgICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=