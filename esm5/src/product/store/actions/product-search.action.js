export var SEARCH_PRODUCTS = '[Product] Search Products';
export var SEARCH_PRODUCTS_FAIL = '[Product] Search Products Fail';
export var SEARCH_PRODUCTS_SUCCESS = '[Product] Search Products Success';
export var GET_PRODUCT_SUGGESTIONS = '[Product] Get Product Suggestions';
export var GET_PRODUCT_SUGGESTIONS_SUCCESS = '[Product] Get Product Suggestions Success';
export var GET_PRODUCT_SUGGESTIONS_FAIL = '[Product] Get Product Suggestions Fail';
export var CLEAR_PRODUCT_SEARCH_RESULT = '[Product] Clear Product Search Result';
var SearchProducts = /** @class */ (function () {
    function SearchProducts(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS;
    }
    return SearchProducts;
}());
export { SearchProducts };
var SearchProductsFail = /** @class */ (function () {
    function SearchProductsFail(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_FAIL;
    }
    return SearchProductsFail;
}());
export { SearchProductsFail };
var SearchProductsSuccess = /** @class */ (function () {
    function SearchProductsSuccess(payload, auxiliary) {
        this.payload = payload;
        this.auxiliary = auxiliary;
        this.type = SEARCH_PRODUCTS_SUCCESS;
    }
    return SearchProductsSuccess;
}());
export { SearchProductsSuccess };
var GetProductSuggestions = /** @class */ (function () {
    function GetProductSuggestions(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS;
    }
    return GetProductSuggestions;
}());
export { GetProductSuggestions };
var GetProductSuggestionsSuccess = /** @class */ (function () {
    function GetProductSuggestionsSuccess(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_SUCCESS;
    }
    return GetProductSuggestionsSuccess;
}());
export { GetProductSuggestionsSuccess };
var GetProductSuggestionsFail = /** @class */ (function () {
    function GetProductSuggestionsFail(payload) {
        this.payload = payload;
        this.type = GET_PRODUCT_SUGGESTIONS_FAIL;
    }
    return GetProductSuggestionsFail;
}());
export { GetProductSuggestionsFail };
var ClearProductSearchResult = /** @class */ (function () {
    function ClearProductSearchResult(payload) {
        if (payload === void 0) { payload = {
            clearPageResults: false,
            clearSearchboxResults: false,
        }; }
        this.payload = payload;
        this.type = CLEAR_PRODUCT_SEARCH_RESULT;
    }
    return ClearProductSearchResult;
}());
export { ClearProductSearchResult };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXNlYXJjaC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0EsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLDJCQUEyQixDQUFDO0FBQzNELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLGdDQUFnQyxDQUFDO0FBQ3JFLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLG1DQUFtQyxDQUFDO0FBQzNFLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLG1DQUFtQyxDQUFDO0FBQzNFLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUMxQywyQ0FBMkMsQ0FBQztBQUM5QyxNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FDdkMsd0NBQXdDLENBQUM7QUFDM0MsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQ3RDLHVDQUF1QyxDQUFDO0FBRTFDO0lBRUUsd0JBQ1MsT0FBMEQsRUFDMUQsU0FBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBbUQ7UUFDMUQsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUhuQixTQUFJLEdBQUcsZUFBZSxDQUFDO0lBSTdCLENBQUM7SUFDTixxQkFBQztBQUFELENBQUMsQUFORCxJQU1DOztBQUVEO0lBRUUsNEJBQW1CLE9BQW1CLEVBQVMsU0FBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFEekQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ2dDLENBQUM7SUFDeEUseUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUVFLCtCQUFtQixPQUEwQixFQUFTLFNBQW1CO1FBQXRELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQURoRSxTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFDb0MsQ0FBQztJQUMvRSw0QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBRUUsK0JBQW1CLE9BQXFEO1FBQXJELFlBQU8sR0FBUCxPQUFPLENBQThDO1FBRC9ELFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUNtQyxDQUFDO0lBQzlFLDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFFRSxzQ0FBbUIsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUQvQixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFDTCxDQUFDO0lBQzlDLG1DQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFFRSxtQ0FBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFDSixDQUFDO0lBQzVDLGdDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFFRSxrQ0FDUyxPQUdOO1FBSE0sd0JBQUEsRUFBQTtZQUNMLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIscUJBQXFCLEVBQUUsS0FBSztTQUM3QjtRQUhNLFlBQU8sR0FBUCxPQUFPLENBR2I7UUFMTSxTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFNekMsQ0FBQztJQUNOLCtCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFcnJvck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDbGVhclNlYXJjaCxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFN1Z2dlc3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMnO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUU19GQUlMID0gJ1tQcm9kdWN0XSBTZWFyY2ggUHJvZHVjdHMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1MgPSAnW1Byb2R1Y3RdIFNlYXJjaCBQcm9kdWN0cyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9TVUdHRVNUSU9OUyA9ICdbUHJvZHVjdF0gR2V0IFByb2R1Y3QgU3VnZ2VzdGlvbnMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX1NVQ0NFU1MgPVxuICAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1NVR0dFU1RJT05TX0ZBSUwgPVxuICAnW1Byb2R1Y3RdIEdldCBQcm9kdWN0IFN1Z2dlc3Rpb25zIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENMRUFSX1BST0RVQ1RfU0VBUkNIX1JFU1VMVCA9XG4gICdbUHJvZHVjdF0gQ2xlYXIgUHJvZHVjdCBTZWFyY2ggUmVzdWx0JztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFByb2R1Y3RzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgcXVlcnlUZXh0OiBzdHJpbmc7IHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnIH0sXG4gICAgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUHJvZHVjdHNGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFQVJDSF9QUk9EVUNUU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQcm9kdWN0c1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VBUkNIX1BST0RVQ1RTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9kdWN0U2VhcmNoUGFnZSwgcHVibGljIGF1eGlsaWFyeT86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRQcm9kdWN0U3VnZ2VzdGlvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHRlcm06IHN0cmluZzsgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFN1Z2dlc3Rpb25bXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEdldFByb2R1Y3RTdWdnZXN0aW9uc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gR0VUX1BST0RVQ1RfU1VHR0VTVElPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVycm9yTW9kZWwpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhclByb2R1Y3RTZWFyY2hSZXN1bHQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfUFJPRFVDVF9TRUFSQ0hfUkVTVUxUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogQ2xlYXJTZWFyY2ggPSB7XG4gICAgICBjbGVhclBhZ2VSZXN1bHRzOiBmYWxzZSxcbiAgICAgIGNsZWFyU2VhcmNoYm94UmVzdWx0czogZmFsc2UsXG4gICAgfVxuICApIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgUHJvZHVjdFNlYXJjaEFjdGlvbiA9XG4gIHwgU2VhcmNoUHJvZHVjdHNcbiAgfCBTZWFyY2hQcm9kdWN0c0ZhaWxcbiAgfCBTZWFyY2hQcm9kdWN0c1N1Y2Nlc3NcbiAgfCBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNcbiAgfCBHZXRQcm9kdWN0U3VnZ2VzdGlvbnNTdWNjZXNzXG4gIHwgR2V0UHJvZHVjdFN1Z2dlc3Rpb25zRmFpbFxuICB8IENsZWFyUHJvZHVjdFNlYXJjaFJlc3VsdDtcbiJdfQ==