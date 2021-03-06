import { UserActions } from '../actions/index';
export const initialState = {};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS:
        case UserActions.CANCEL_REPLENISHMENT_ORDER_SUCCESS: {
            return action.payload ? action.payload : initialState;
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL3JlZHVjZXJzL3JlcGxlbmlzaG1lbnQtb3JkZXItZGV0YWlscy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQXVCLEVBQUUsQ0FBQztBQUVuRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUFtRDtJQUVuRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsd0NBQXdDLENBQUM7UUFDMUQsS0FBSyxXQUFXLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUNuRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN2RDtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1AsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcGxlbmlzaG1lbnRPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3JlcGxlbmlzaG1lbnQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUmVwbGVuaXNobWVudE9yZGVyID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBVc2VyQWN0aW9ucy5SZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzQWN0aW9uXG4pOiBSZXBsZW5pc2htZW50T3JkZXIge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVc2VyQWN0aW9ucy5MT0FEX1JFUExFTklTSE1FTlRfT1JERVJfREVUQUlMU19TVUNDRVNTOlxuICAgIGNhc2UgVXNlckFjdGlvbnMuQ0FOQ0VMX1JFUExFTklTSE1FTlRfT1JERVJfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkID8gYWN0aW9uLnBheWxvYWQgOiBpbml0aWFsU3RhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufVxuIl19