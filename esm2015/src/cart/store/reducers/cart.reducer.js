/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from './../actions';
/** @type {?} */
export const initialState = {
    content: {},
    entries: {},
    refresh: false,
    cartMergeComplete: false,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.MERGE_CART: {
            return Object.assign({}, state, { cartMergeComplete: false });
        }
        case fromAction.MERGE_CART_SUCCESS: {
            return Object.assign({}, state, { cartMergeComplete: true, refresh: true });
        }
        case fromAction.LOAD_CART_SUCCESS:
        case fromAction.CREATE_CART_SUCCESS: {
            /** @type {?} */
            const content = Object.assign({}, action.payload);
            /** @type {?} */
            let entries = {};
            if (content.entries) {
                entries = content.entries.reduce((entryMap, entry) => {
                    return Object.assign({}, entryMap, { [entry.product.code]: state.entries[entry.product.code]
                            ? Object.assign({}, state.entries[entry.product.code], entry) : entry });
                }, Object.assign({}, entries));
                delete content['entries'];
            }
            return Object.assign({}, state, { content,
                entries, refresh: false });
        }
        case fromAction.REMOVE_ENTRY_SUCCESS:
        case fromAction.UPDATE_ENTRY_SUCCESS:
        case fromAction.ADD_ENTRY_SUCCESS: {
            return Object.assign({}, state, { refresh: true });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssVUFBVSxNQUFNLGNBQWMsQ0FBQzs7QUFJM0MsTUFBTSxPQUFPLFlBQVksR0FBYztJQUNyQyxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEtBQUs7SUFDZCxpQkFBaUIsRUFBRSxLQUFLO0NBQ3pCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUEwRDtJQUUxRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUIseUJBQ0ssS0FBSyxJQUNSLGlCQUFpQixFQUFFLEtBQUssSUFDeEI7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEMseUJBQ0ssS0FBSyxJQUNSLGlCQUFpQixFQUFFLElBQUksRUFDdkIsT0FBTyxFQUFFLElBQUksSUFDYjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7a0JBQzdCLE9BQU8scUJBQVEsTUFBTSxDQUFDLE9BQU8sQ0FBRTs7Z0JBQ2pDLE9BQU8sR0FBRyxFQUFFO1lBQ2hCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUM5QixDQUFDLFFBQWlDLEVBQUUsS0FBaUIsRUFBRSxFQUFFO29CQUN2RCx5QkFDSyxRQUFRLElBT1gsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NEJBQ3JELENBQUMsbUJBQ00sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNqQyxLQUFLLEVBRVosQ0FBQyxDQUFDLEtBQUssSUFDVDtnQkFDSixDQUFDLG9CQUVJLE9BQU8sRUFFYixDQUFDO2dCQUNGLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QseUJBQ0ssS0FBSyxJQUNSLE9BQU87Z0JBQ1AsT0FBTyxFQUNQLE9BQU8sRUFBRSxLQUFLLElBQ2Q7U0FDSDtRQUVELEtBQUssVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLEtBQUssVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLEtBQUssVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDakMseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLElBQ2I7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2FydFN0YXRlIH0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDYXJ0U3RhdGUgPSB7XG4gIGNvbnRlbnQ6IHt9LFxuICBlbnRyaWVzOiB7fSxcbiAgcmVmcmVzaDogZmFsc2UsXG4gIGNhcnRNZXJnZUNvbXBsZXRlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkNhcnRBY3Rpb24gfCBmcm9tQWN0aW9uLkNhcnRFbnRyeUFjdGlvblxuKTogQ2FydFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5NRVJHRV9DQVJUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb24uTUVSR0VfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IHRydWUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX0NBUlRfU1VDQ0VTUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uQ1JFQVRFX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY29udGVudCA9IHsgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGxldCBlbnRyaWVzID0ge307XG4gICAgICBpZiAoY29udGVudC5lbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMgPSBjb250ZW50LmVudHJpZXMucmVkdWNlKFxuICAgICAgICAgIChlbnRyeU1hcDogeyBbY29kZTogc3RyaW5nXTogYW55IH0sIGVudHJ5OiBPcmRlckVudHJ5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5lbnRyeU1hcCxcbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgSWYgd2UgcmVmcmVzaCB0aGUgcGFnZSBmcm9tIGNhcnQgZGV0YWlscyBwYWdlLCAyIGxvYWQgY2FydFxuICAgICAgICAgICAgICBBY3Rpb25zIGdldHMgZGlzcGF0Y2hlZC4gT25lIGlzIG5vbi1kZXRhaWwsIGFuZCB0aGUgc2Vjb25kIGlzIGRldGFpbGVkLlxuICAgICAgICAgICAgICBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgZGV0YWlsZWQgb25jZSBnZXQgcmVzb2x2ZWQgZmlyc3QsIHdlIG1lcmdlIHRoZSBleGlzdGluZ1xuICAgICAgICAgICAgICBkYXRhIHdpdGggdGhlIG5ldyBkYXRhIGZyb20gdGhlIHJlc3BvbnNlICh0byBub3QgZGVsZXRlIGV4aXN0aW5nIGRldGFpbGVkIGRhdGEpLlxuICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBbZW50cnkucHJvZHVjdC5jb2RlXTogc3RhdGUuZW50cmllc1tlbnRyeS5wcm9kdWN0LmNvZGVdXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmVudHJpZXNbZW50cnkucHJvZHVjdC5jb2RlXSxcbiAgICAgICAgICAgICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBlbnRyeSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5lbnRyaWVzLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZGVsZXRlIGNvbnRlbnRbJ2VudHJpZXMnXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBlbnRyaWVzLFxuICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLlJFTU9WRV9FTlRSWV9TVUNDRVNTOlxuICAgIGNhc2UgZnJvbUFjdGlvbi5VUERBVEVfRU5UUllfU1VDQ0VTUzpcbiAgICBjYXNlIGZyb21BY3Rpb24uQUREX0VOVFJZX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=