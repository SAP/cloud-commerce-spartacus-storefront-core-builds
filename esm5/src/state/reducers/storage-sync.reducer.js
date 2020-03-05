import { INIT, UPDATE } from '@ngrx/store';
import { deepMerge } from '../../config/utils/deep-merge';
import { StorageSyncType } from '../config/state-config';
import { filterKeysByType, getStateSlice } from '../utils/get-state-slice';
export function getStorageSyncReducer(winRef, config) {
    if (!winRef.nativeWindow ||
        !config ||
        !config.state ||
        !config.state.storageSync ||
        !config.state.storageSync.keys) {
        return function (reducer) { return reducer; };
    }
    var storageSyncConfig = config.state.storageSync;
    return function (reducer) {
        return function (state, action) {
            var newState = reducer(state, action);
            if (action.type === INIT || action.type === UPDATE) {
                var rehydratedState = rehydrate(config, winRef);
                return deepMerge({}, newState, rehydratedState);
            }
            if (action.type !== INIT) {
                // handle local storage
                var localStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                var localStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.LOCAL_STORAGE);
                var localStorageStateSlices = getStateSlice(localStorageKeys, localStorageExclusionKeys, newState);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                var sessionStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                var sessionStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.SESSION_STORAGE);
                var sessionStorageStateSlices = getStateSlice(sessionStorageKeys, sessionStorageExclusionKeys, newState);
                persistToStorage(config.state.storageSync.sessionStorageKeyName, sessionStorageStateSlices, winRef.sessionStorage);
            }
            return newState;
        };
    };
}
export function rehydrate(config, winRef) {
    var localStorageValue = readFromStorage(winRef.localStorage, config.state.storageSync.localStorageKeyName);
    var sessionStorageValue = readFromStorage(winRef.sessionStorage, config.state.storageSync.sessionStorageKeyName);
    return deepMerge(localStorageValue, sessionStorageValue);
}
export function exists(value) {
    if (value != null) {
        if (typeof value === 'object') {
            return Object.keys(value).length !== 0;
        }
        return value !== '';
    }
    return false;
}
export function getStorage(storageType, winRef) {
    var storage;
    switch (storageType) {
        case StorageSyncType.LOCAL_STORAGE: {
            storage = winRef.localStorage;
            break;
        }
        case StorageSyncType.SESSION_STORAGE: {
            storage = winRef.sessionStorage;
            break;
        }
        case StorageSyncType.NO_STORAGE: {
            storage = undefined;
            break;
        }
        default: {
            storage = winRef.sessionStorage;
        }
    }
    return storage;
}
export function persistToStorage(configKey, value, storage) {
    if (!isSsr(storage) && value) {
        storage.setItem(configKey, JSON.stringify(value));
    }
}
export function readFromStorage(storage, key) {
    if (isSsr(storage)) {
        return;
    }
    var storageValue = storage.getItem(key);
    if (!storageValue) {
        return;
    }
    return JSON.parse(storageValue);
}
export function isSsr(storage) {
    return !Boolean(storage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF5QixJQUFJLEVBQWUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNFLE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsTUFBaUIsRUFDakIsTUFBb0I7SUFFcEIsSUFDRSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1FBQ3BCLENBQUMsTUFBTTtRQUNQLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDYixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVztRQUN6QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDOUI7UUFDQSxPQUFPLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQztLQUMzQjtJQUVELElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFFbkQsT0FBTyxVQUFDLE9BQWlDO1FBQ3ZDLE9BQU8sVUFBQyxLQUFLLEVBQUUsTUFBTTtZQUNuQixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXhDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ2xELElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFD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T0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDakM7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLFNBQWlCLEVBQ2pCLEtBQVUsRUFDVixPQUFnQjtJQUVoQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkQ7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUFnQixFQUFFLEdBQVc7SUFDM0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEIsT0FBTztLQUNSO0lBRUQsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU87S0FDUjtJQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBQyxPQUFnQjtJQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIsIElOSVQsIE1ldGFSZWR1Y2VyLCBVUERBVEUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RvcmFnZVN5bmNUeXBlIH0gZnJvbSAnLi4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBmaWx0ZXJLZXlzQnlUeXBlLCBnZXRTdGF0ZVNsaWNlIH0gZnJvbSAnLi4vdXRpbHMvZ2V0LXN0YXRlLXNsaWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2VTeW5jUmVkdWNlcjxUPihcbiAgd2luUmVmOiBXaW5kb3dSZWYsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pOiBNZXRhUmVkdWNlcjxULCBBY3Rpb24+IHtcbiAgaWYgKFxuICAgICF3aW5SZWYubmF0aXZlV2luZG93IHx8XG4gICAgIWNvbmZpZyB8fFxuICAgICFjb25maWcuc3RhdGUgfHxcbiAgICAhY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYy5rZXlzXG4gICkge1xuICAgIHJldHVybiByZWR1Y2VyID0+IHJlZHVjZXI7XG4gIH1cblxuICBjb25zdCBzdG9yYWdlU3luY0NvbmZpZyA9IGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYztcblxuICByZXR1cm4gKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPik6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPiA9PiB7XG4gICAgcmV0dXJuIChzdGF0ZSwgYWN0aW9uKTogVCA9PiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCB8fCBhY3Rpb24udHlwZSA9PT0gVVBEQVRFKSB7XG4gICAgICAgIGNvbnN0IHJlaHlkcmF0ZWRTdGF0ZSA9IHJlaHlkcmF0ZShjb25maWcsIHdpblJlZik7XG4gICAgICAgIHJldHVybiBkZWVwTWVyZ2Uoe30sIG5ld1N0YXRlLCByZWh5ZHJhdGVkU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgIT09IElOSVQpIHtcbiAgICAgICAgLy8gaGFuZGxlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IGZpbHRlcktleXNCeVR5cGUoXG4gICAgICAgICAgc3RvcmFnZVN5bmNDb25maWcua2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VFeGNsdXNpb25LZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5leGNsdWRlS2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgbG9jYWxTdG9yYWdlS2V5cyxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VFeGNsdXNpb25LZXlzLFxuICAgICAgICAgIG5ld1N0YXRlXG4gICAgICAgICk7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWUsXG4gICAgICAgICAgbG9jYWxTdG9yYWdlU3RhdGVTbGljZXMsXG4gICAgICAgICAgd2luUmVmLmxvY2FsU3RvcmFnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGhhbmRsZSBzZXNzaW9uIHN0b3JhZ2VcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VLZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VFeGNsdXNpb25LZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5leGNsdWRlS2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlc3Npb25TdG9yYWdlU3RhdGVTbGljZXMgPSBnZXRTdGF0ZVNsaWNlKFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlS2V5cyxcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZUV4Y2x1c2lvbktleXMsXG4gICAgICAgICAgbmV3U3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMuc2Vzc2lvblN0b3JhZ2VLZXlOYW1lLFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlU3RhdGVTbGljZXMsXG4gICAgICAgICAgd2luUmVmLnNlc3Npb25TdG9yYWdlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVoeWRyYXRlPFQ+KGNvbmZpZzogU3RhdGVDb25maWcsIHdpblJlZjogV2luZG93UmVmKTogVCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5sb2NhbFN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWVcbiAgKTtcbiAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VWYWx1ZSA9IHJlYWRGcm9tU3RvcmFnZShcbiAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZVxuICApO1xuXG4gIHJldHVybiBkZWVwTWVyZ2UobG9jYWxTdG9yYWdlVmFsdWUsIHNlc3Npb25TdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RzKHZhbHVlOiBPYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggIT09IDA7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSAhPT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZShcbiAgc3RvcmFnZVR5cGU6IFN0b3JhZ2VTeW5jVHlwZSxcbiAgd2luUmVmOiBXaW5kb3dSZWZcbik6IFN0b3JhZ2Uge1xuICBsZXQgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzd2l0Y2ggKHN0b3JhZ2VUeXBlKSB7XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5sb2NhbFN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLk5PX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdG9yYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFRvU3RvcmFnZShcbiAgY29uZmlnS2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBhbnksXG4gIHN0b3JhZ2U6IFN0b3JhZ2Vcbik6IHZvaWQge1xuICBpZiAoIWlzU3NyKHN0b3JhZ2UpICYmIHZhbHVlKSB7XG4gICAgc3RvcmFnZS5zZXRJdGVtKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZyb21TdG9yYWdlKHN0b3JhZ2U6IFN0b3JhZ2UsIGtleTogc3RyaW5nKTogYW55IHtcbiAgaWYgKGlzU3NyKHN0b3JhZ2UpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZVZhbHVlID0gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGlmICghc3RvcmFnZVZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3NyKHN0b3JhZ2U6IFN0b3JhZ2UpOiBib29sZWFuIHtcbiAgcmV0dXJuICFCb29sZWFuKHN0b3JhZ2UpO1xufVxuIl19