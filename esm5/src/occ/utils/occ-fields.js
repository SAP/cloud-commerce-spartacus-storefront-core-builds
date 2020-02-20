import { __read, __spread } from "tslib";
import { deepMerge, isObject } from '../../config/utils/deep-merge';
/**
 * Merge occ fields parameters
 *
 * @param fields Fields definition as string or object
 */
export function mergeFields(fields) {
    var parsedFields = fields.map(function (f) {
        return typeof f === 'string' ? parseFields(f) : f;
    });
    var mergedFields = optimizeFields(deepMerge.apply(void 0, __spread([{}], parsedFields)));
    return stringifyFields(mergedFields);
}
/**
 * Optimize fields definition by removing not needed groups
 *
 * @param fields
 */
export function optimizeFields(fields) {
    if (fields === void 0) { fields = {}; }
    var keys = Object.keys(fields);
    if (keys.includes('FULL')) {
        delete fields['DEFAULT'];
        delete fields['BASIC'];
    }
    else if (keys.includes('DEFAULT')) {
        delete fields['BASIC'];
    }
    Object.keys(fields).forEach(function (key) {
        fields[key] = optimizeFields(fields[key]);
    });
    return fields;
}
/**
 * Parse string field definition to an AST object
 *
 * @param fields Fields string definition
 * @param startIndex Used for recurrence
 */
export function parseFields(fields, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var parsedFields = {};
    var i = startIndex;
    while (i < fields.length) {
        if (fields[i] === ',') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            startIndex = i + 1;
        }
        else if (fields[i] === '(') {
            var subFields = parseFields(fields, i + 1);
            if (Array.isArray(subFields)) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = subFields[0];
                startIndex = subFields[1];
                i = startIndex - 1;
            }
            else {
                return parsedFields;
            }
        }
        else if (fields[i] === ')') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            return [parsedFields, i + 1];
        }
        i++;
    }
    if (startIndex < fields.length) {
        parsedFields[fields.substr(startIndex, i - startIndex)] = {};
    }
    return parsedFields;
}
/**
 * Convert AST object fields definition to string representation
 *
 * @param fields
 */
export function stringifyFields(fields) {
    return Object.keys(fields)
        .map(function (key) {
        var subFields = stringifyFields(fields[key]);
        return subFields ? key + "(" + subFields + ")" : key;
    })
        .join(',');
}
/**
 * Extract part of the object described by fields definition
 *
 * @param data
 * @param fields
 */
export function extractFields(data, fields) {
    var parsedFields = typeof fields === 'string' ? parseFields(fields) : fields;
    return getObjectPart(data, parsedFields);
}
function getObjectPart(data, fields) {
    if (!isObject(data)) {
        return data;
    }
    var keys = Object.keys(fields);
    if (keys.length === 0 ||
        // we should not extract parts of the object with ambiguous fields definitions
        keys.find(function (el) { return el === 'BASIC' || el === 'DEFAULT' || el === 'FULL'; })) {
        return data;
    }
    var result = {};
    keys.forEach(function (key) {
        if (data.hasOwnProperty(key)) {
            result[key] = getObjectPart(data[key], fields[key]);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvdXRpbHMvb2NjLWZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRTs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUEyQjtJQUNyRCxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztRQUMvQixPQUFBLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQTFDLENBQTBDLENBQzNDLENBQUM7SUFDRixJQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsU0FBUyx5QkFBQyxFQUFFLEdBQUssWUFBWSxHQUFFLENBQUM7SUFDcEUsT0FBTyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQW1CO0lBQW5CLHVCQUFBLEVBQUEsV0FBbUI7SUFDaEQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEI7U0FBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbkMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEI7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdB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WUFBWSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFJLElBQU8sRUFBRSxNQUFjO0lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFakMsSUFDRSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDakIsOEVBQThFO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssT0FBTyxJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksRUFBRSxLQUFLLE1BQU0sRUFBbkQsQ0FBbUQsQ0FBQyxFQUNwRTtRQUNBLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFNLE1BQU0sR0FBRyxFQUFPLENBQUM7SUFFdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7UUFDZCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwTWVyZ2UsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuXG4vKipcbiAqIE1lcmdlIG9jYyBmaWVsZHMgcGFyYW1ldGVyc1xuICpcbiAqIEBwYXJhbSBmaWVsZHMgRmllbGRzIGRlZmluaXRpb24gYXMgc3RyaW5nIG9yIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VGaWVsZHMoZmllbGRzOiAoc3RyaW5nIHwgb2JqZWN0KVtdKTogc3RyaW5nIHtcbiAgY29uc3QgcGFyc2VkRmllbGRzID0gZmllbGRzLm1hcChmID0+XG4gICAgdHlwZW9mIGYgPT09ICdzdHJpbmcnID8gcGFyc2VGaWVsZHMoZikgOiBmXG4gICk7XG4gIGNvbnN0IG1lcmdlZEZpZWxkcyA9IG9wdGltaXplRmllbGRzKGRlZXBNZXJnZSh7fSwgLi4ucGFyc2VkRmllbGRzKSk7XG4gIHJldHVybiBzdHJpbmdpZnlGaWVsZHMobWVyZ2VkRmllbGRzKTtcbn1cblxuLyoqXG4gKiBPcHRpbWl6ZSBmaWVsZHMgZGVmaW5pdGlvbiBieSByZW1vdmluZyBub3QgbmVlZGVkIGdyb3Vwc1xuICpcbiAqIEBwYXJhbSBmaWVsZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wdGltaXplRmllbGRzKGZpZWxkczogb2JqZWN0ID0ge30pOiBvYmplY3Qge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZmllbGRzKTtcbiAgaWYgKGtleXMuaW5jbHVkZXMoJ0ZVTEwnKSkge1xuICAgIGRlbGV0ZSBmaWVsZHNbJ0RFRkFVTFQnXTtcbiAgICBkZWxldGUgZmllbGRzWydCQVNJQyddO1xuICB9IGVsc2UgaWYgKGtleXMuaW5jbHVkZXMoJ0RFRkFVTFQnKSkge1xuICAgIGRlbGV0ZSBmaWVsZHNbJ0JBU0lDJ107XG4gIH1cbiAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgZmllbGRzW2tleV0gPSBvcHRpbWl6ZUZpZWxkcyhmaWVsZHNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFBhcnNlIHN0cmluZyBmaWVsZCBkZWZpbml0aW9uIHRvIGFuIEFTVCBvYmplY3RcbiAqXG4gKiBAcGFyYW0gZmllbGRzIEZpZWxkcyBzdHJpbmcgZGVmaW5pdGlvblxuICogQHBhcmFtIHN0YXJ0SW5kZXggVXNlZCBmb3IgcmVjdXJyZW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWVsZHMoXG4gIGZpZWxkczogc3RyaW5nLFxuICBzdGFydEluZGV4ID0gMFxuKTogW29iamVjdCwgbnVtYmVyXSB8IG9iamVjdCB7XG4gIGNvbnN0IHBhcnNlZEZpZWxkcyA9IHt9O1xuXG4gIGxldCBpID0gc3RhcnRJbmRleDtcbiAgd2hpbGUgKGkgPCBmaWVsZHMubGVuZ3RoKSB7XG4gICAgaWYgKGZpZWxkc1tpXSA9PT0gJywnKSB7XG4gICAgICBpZiAoaSA+IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgcGFyc2VkRmllbGRzW2ZpZWxkcy5zdWJzdHIoc3RhcnRJbmRleCwgaSAtIHN0YXJ0SW5kZXgpXSA9IHt9O1xuICAgICAgfVxuICAgICAgc3RhcnRJbmRleCA9IGkgKyAxO1xuICAgIH0gZWxzZSBpZiAoZmllbGRzW2ldID09PSAnKCcpIHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkcyA9IHBhcnNlRmllbGRzKGZpZWxkcywgaSArIDEpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3ViRmllbGRzKSkge1xuICAgICAgICBwYXJzZWRGaWVsZHNbZmllbGRzLnN1YnN0cihzdGFydEluZGV4LCBpIC0gc3RhcnRJbmRleCldID0gc3ViRmllbGRzWzBdO1xuICAgICAgICBzdGFydEluZGV4ID0gc3ViRmllbGRzWzFdO1xuICAgICAgICBpID0gc3RhcnRJbmRleCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VkRmllbGRzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmllbGRzW2ldID09PSAnKScpIHtcbiAgICAgIGlmIChpID4gc3RhcnRJbmRleCkge1xuICAgICAgICBwYXJzZWRGaWVsZHNbZmllbGRzLnN1YnN0cihzdGFydEluZGV4LCBpIC0gc3RhcnRJbmRleCldID0ge307XG4gICAgICB9XG4gICAgICByZXR1cm4gW3BhcnNlZEZpZWxkcywgaSArIDFdO1xuICAgIH1cbiAgICBpKys7XG4gIH1cblxuICBpZiAoc3RhcnRJbmRleCA8IGZpZWxkcy5sZW5ndGgpIHtcbiAgICBwYXJzZWRGaWVsZHNbZmllbGRzLnN1YnN0cihzdGFydEluZGV4LCBpIC0gc3RhcnRJbmRleCldID0ge307XG4gIH1cblxuICByZXR1cm4gcGFyc2VkRmllbGRzO1xufVxuXG4vKipcbiAqIENvbnZlcnQgQVNUIG9iamVjdCBmaWVsZHMgZGVmaW5pdGlvbiB0byBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAqXG4gKiBAcGFyYW0gZmllbGRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlGaWVsZHMoZmllbGRzOiBvYmplY3QpOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZmllbGRzKVxuICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkcyA9IHN0cmluZ2lmeUZpZWxkcyhmaWVsZHNba2V5XSk7XG4gICAgICByZXR1cm4gc3ViRmllbGRzID8gYCR7a2V5fSgke3N1YkZpZWxkc30pYCA6IGtleTtcbiAgICB9KVxuICAgIC5qb2luKCcsJyk7XG59XG5cbi8qKlxuICogRXh0cmFjdCBwYXJ0IG9mIHRoZSBvYmplY3QgZGVzY3JpYmVkIGJ5IGZpZWxkcyBkZWZpbml0aW9uXG4gKlxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSBmaWVsZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RGaWVsZHM8VD4oZGF0YTogVCwgZmllbGRzOiBzdHJpbmcgfCBvYmplY3QpOiBUIHtcbiAgY29uc3QgcGFyc2VkRmllbGRzID1cbiAgICB0eXBlb2YgZmllbGRzID09PSAnc3RyaW5nJyA/IHBhcnNlRmllbGRzKGZpZWxkcykgOiBmaWVsZHM7XG4gIHJldHVybiBnZXRPYmplY3RQYXJ0PFQ+KGRhdGEsIHBhcnNlZEZpZWxkcyk7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdFBhcnQ8VD4oZGF0YTogVCwgZmllbGRzOiBvYmplY3QpOiBUIHtcbiAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZpZWxkcyk7XG5cbiAgaWYgKFxuICAgIGtleXMubGVuZ3RoID09PSAwIHx8XG4gICAgLy8gd2Ugc2hvdWxkIG5vdCBleHRyYWN0IHBhcnRzIG9mIHRoZSBvYmplY3Qgd2l0aCBhbWJpZ3VvdXMgZmllbGRzIGRlZmluaXRpb25zXG4gICAga2V5cy5maW5kKGVsID0+IGVsID09PSAnQkFTSUMnIHx8IGVsID09PSAnREVGQVVMVCcgfHwgZWwgPT09ICdGVUxMJylcbiAgKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7fSBhcyBUO1xuXG4gIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZ2V0T2JqZWN0UGFydChkYXRhW2tleV0sIGZpZWxkc1trZXldKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=