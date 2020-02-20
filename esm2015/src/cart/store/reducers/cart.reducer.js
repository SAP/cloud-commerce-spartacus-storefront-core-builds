import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
export const initialState = {
    content: {},
    entries: {},
    refresh: false,
    cartMergeComplete: false,
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case DeprecatedCartActions.MERGE_CART: {
            return Object.assign(Object.assign({}, state), { cartMergeComplete: false });
        }
        case DeprecatedCartActions.MERGE_CART_SUCCESS: {
            return Object.assign(Object.assign({}, state), { cartMergeComplete: true, refresh: true });
        }
        case DeprecatedCartActions.LOAD_CART_SUCCESS:
        case DeprecatedCartActions.CREATE_CART_SUCCESS: {
            const content = Object.assign({}, action.payload);
            let entries = {};
            if (content.entries) {
                entries = content.entries.reduce((entryMap, entry) => {
                    return Object.assign(Object.assign({}, entryMap), { 
                        /*
                        If we refresh the page from cart details page, 2 load cart
                        Actions gets dispatched. One is non-detail, and the second is detailed.
                        In the case where the detailed once get resolved first, we merge the existing
                        data with the new data from the response (to not delete existing detailed data).
                        */
                        [entry.product.code]: state.entries && state.entries[entry.product.code]
                            ? Object.assign(Object.assign({}, state.entries[entry.product.code]), entry) : entry });
                }, Object.assign({}, entries));
                delete content['entries'];
            }
            return Object.assign(Object.assign({}, state), { content,
                entries, refresh: false });
        }
        case CartActions.CART_ADD_VOUCHER_SUCCESS:
        case CartActions.CART_REMOVE_VOUCHER_SUCCESS:
        case CartActions.CART_REMOVE_ENTRY_SUCCESS:
        case CartActions.CART_UPDATE_ENTRY_SUCCESS:
        case CartActions.CART_ADD_ENTRY_SUCCESS:
        case DeprecatedCartActions.ADD_EMAIL_TO_CART_SUCCESS: {
            return Object.assign(Object.assign({}, state), { refresh: true });
        }
        case DeprecatedCartActions.RESET_CART_DETAILS: {
            return {
                content: {
                    guid: state.content.guid,
                    code: state.content.code,
                    user: state.content.user,
                },
                entries: {},
                refresh: false,
                cartMergeComplete: false,
            };
        }
        case DeprecatedCartActions.CLEAR_CART: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFjO0lBQ3JDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsS0FBSztJQUNkLGlCQUFpQixFQUFFLEtBQUs7Q0FDekIsQ0FBQztBQUVGLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BR2lDO0lBRWpDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLHVDQUNLLEtBQUssS0FDUixpQkFBaUIsRUFBRSxLQUFLLElBQ3hCO1NBQ0g7UUFFRCxLQUFLLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsdUNBQ0ssS0FBSyxLQUNSLGlCQUFpQixFQUFFLElBQUksRUFDdkIsT0FBTyxFQUFFLElBQUksSUFDYjtTQUNIO1FBRUQsS0FBSyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQztRQUM3QyxLQUFLLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDOUMsTUFBTSxPQUFPLHFCQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQztZQUN0QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQzlCLENBQUMsUUFBaUMsRUFBRSxLQUFpQixFQUFFLEVBQUU7b0JBQ3ZELHVDQUNLLFFBQVE7d0JBQ1g7Ozs7OzBCQUtFO3dCQUNGLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDbEIsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUNoRCxDQUFDLGlDQUNNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FDakMsS0FBSyxFQUVaLENBQUMsQ0FBQyxLQUFLLElBQ1g7Z0JBQ0osQ0FBQyxvQkFFSSxPQUFPLEVBRWIsQ0FBQztnQkFDRixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtZQUNELHVDQUNLLEtBQUssS0FDUixPQUFPO2dCQUNQLE9BQU8sRUFDUCxPQUFPLEVBQUUsS0FBSyxJQUNkO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztRQUMxQyxLQUFLLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQztRQUM3QyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQyxLQUFLLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztRQUN4QyxLQUFLLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDcEQsdUNBQ0ssS0FBSyxLQUNSLE9BQU8sRUFBRSxJQUFJLElBQ2I7U0FDSDtRQUVELEtBQUsscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3QyxPQUFPO2dCQUNMLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO29CQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsS0FBSztnQkFDZCxpQkFBaUIsRUFBRSxLQUFLO2FBQ3pCLENBQUM7U0FDSDtRQUVELEtBQUsscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFN0YXRlIH0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENhcnRTdGF0ZSA9IHtcbiAgY29udGVudDoge30sXG4gIGVudHJpZXM6IHt9LFxuICByZWZyZXNoOiBmYWxzZSxcbiAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246XG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0QWN0aW9uXG4gICAgfCBDYXJ0QWN0aW9ucy5DYXJ0RW50cnlBY3Rpb25cbiAgICB8IENhcnRBY3Rpb25zLkNhcnRWb3VjaGVyQWN0aW9uXG4pOiBDYXJ0U3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IHRydWUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxPQURfQ0FSVF9TVUNDRVNTOlxuICAgIGNhc2UgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkNSRUFURV9DQVJUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB7IC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBsZXQgZW50cmllcyA9IHt9O1xuICAgICAgaWYgKGNvbnRlbnQuZW50cmllcykge1xuICAgICAgICBlbnRyaWVzID0gY29udGVudC5lbnRyaWVzLnJlZHVjZShcbiAgICAgICAgICAoZW50cnlNYXA6IHsgW2NvZGU6IHN0cmluZ106IGFueSB9LCBlbnRyeTogT3JkZXJFbnRyeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uZW50cnlNYXAsXG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIElmIHdlIHJlZnJlc2ggdGhlIHBhZ2UgZnJvbSBjYXJ0IGRldGFpbHMgcGFnZSwgMiBsb2FkIGNhcnRcbiAgICAgICAgICAgICAgQWN0aW9ucyBnZXRzIGRpc3BhdGNoZWQuIE9uZSBpcyBub24tZGV0YWlsLCBhbmQgdGhlIHNlY29uZCBpcyBkZXRhaWxlZC5cbiAgICAgICAgICAgICAgSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGRldGFpbGVkIG9uY2UgZ2V0IHJlc29sdmVkIGZpcnN0LCB3ZSBtZXJnZSB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgICAgZGF0YSB3aXRoIHRoZSBuZXcgZGF0YSBmcm9tIHRoZSByZXNwb25zZSAodG8gbm90IGRlbGV0ZSBleGlzdGluZyBkZXRhaWxlZCBkYXRhKS5cbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgW2VudHJ5LnByb2R1Y3QuY29kZV06XG4gICAgICAgICAgICAgICAgc3RhdGUuZW50cmllcyAmJiBzdGF0ZS5lbnRyaWVzW2VudHJ5LnByb2R1Y3QuY29kZV1cbiAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmVudHJpZXNbZW50cnkucHJvZHVjdC5jb2RlXSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiBlbnRyeSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5lbnRyaWVzLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZGVsZXRlIGNvbnRlbnRbJ2VudHJpZXMnXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DQVJUX0FERF9WT1VDSEVSX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1M6XG4gICAgY2FzZSBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRGVwcmVjYXRlZENhcnRBY3Rpb25zLlJFU0VUX0NBUlRfREVUQUlMUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgIGd1aWQ6IHN0YXRlLmNvbnRlbnQuZ3VpZCxcbiAgICAgICAgICBjb2RlOiBzdGF0ZS5jb250ZW50LmNvZGUsXG4gICAgICAgICAgdXNlcjogc3RhdGUuY29udGVudC51c2VyLFxuICAgICAgICB9LFxuICAgICAgICBlbnRyaWVzOiB7fSxcbiAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICAgIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ0xFQVJfQ0FSVDoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=