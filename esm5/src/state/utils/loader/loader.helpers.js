import { filter } from 'rxjs/operators';
export function ofLoaderLoad(entityType) {
    return filter(function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            action.meta.loader.load;
    });
}
export function ofLoaderFail(entityType) {
    return filter(function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            action.meta.loader.error;
    });
}
export function ofLoaderSuccess(entityType) {
    return filter(function (action) {
        return action.meta &&
            action.meta.loader &&
            action.meta.entityType === entityType &&
            !action.meta.loader.load &&
            !action.meta.loader.error;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmhlbHBlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt4QyxNQUFNLFVBQVUsWUFBWSxDQUMxQixVQUFrQjtJQUVsQixPQUFPLE1BQU0sQ0FDWCxVQUFDLE1BQXdCO1FBQ3ZCLE9BQUEsTUFBTSxDQUFDLElBQUk7WUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVTtZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO0lBSHZCLENBR3VCLENBQzFCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsVUFBa0I7SUFFbEIsT0FBTyxNQUFNLENBQ1gsVUFBQyxNQUF3QjtRQUN2QixPQUFBLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVU7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztJQUh4QixDQUd3QixDQUMzQixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQzdCLFVBQWtCO0lBRWxCLE9BQU8sTUFBTSxDQUNYLFVBQUMsTUFBd0I7UUFDdkIsT0FBQSxNQUFNLENBQUMsSUFBSTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3JDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN4QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7SUFKekIsQ0FJeUIsQ0FDNUIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEVudGl0eUxvYWRBY3Rpb24gfSBmcm9tICcuLi9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZnVuY3Rpb24gb2ZMb2FkZXJMb2FkKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxFbnRpdHlMb2FkQWN0aW9uPiB7XG4gIHJldHVybiBmaWx0ZXIoXG4gICAgKGFjdGlvbjogRW50aXR5TG9hZEFjdGlvbikgPT5cbiAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICBhY3Rpb24ubWV0YS5sb2FkZXIgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUgPT09IGVudGl0eVR5cGUgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmxvYWRlci5sb2FkXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZkxvYWRlckZhaWwoXG4gIGVudGl0eVR5cGU6IHN0cmluZ1xuKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPEVudGl0eUxvYWRBY3Rpb24+IHtcbiAgcmV0dXJuIGZpbHRlcihcbiAgICAoYWN0aW9uOiBFbnRpdHlMb2FkQWN0aW9uKSA9PlxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmxvYWRlciAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSAmJlxuICAgICAgYWN0aW9uLm1ldGEubG9hZGVyLmVycm9yXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZkxvYWRlclN1Y2Nlc3MoXG4gIGVudGl0eVR5cGU6IHN0cmluZ1xuKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPEVudGl0eUxvYWRBY3Rpb24+IHtcbiAgcmV0dXJuIGZpbHRlcihcbiAgICAoYWN0aW9uOiBFbnRpdHlMb2FkQWN0aW9uKSA9PlxuICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmxvYWRlciAmJlxuICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSAmJlxuICAgICAgIWFjdGlvbi5tZXRhLmxvYWRlci5sb2FkICYmXG4gICAgICAhYWN0aW9uLm1ldGEubG9hZGVyLmVycm9yXG4gICk7XG59XG4iXX0=