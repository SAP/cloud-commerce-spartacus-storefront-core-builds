export function occConfigValidator(config) {
    if (config.backend === undefined ||
        config.backend.occ === undefined ||
        config.backend.occ.baseUrl === undefined) {
        return 'Please configure backend.occ.baseUrl before using storefront library!';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvY29uZmlnL29jYy1jb25maWctdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFpQjtJQUNsRCxJQUNFLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUztRQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxTQUFTO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQ3hDO1FBQ0EsT0FBTyx1RUFBdUUsQ0FBQztLQUNoRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuL29jYy1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gb2NjQ29uZmlnVmFsaWRhdG9yKGNvbmZpZzogT2NjQ29uZmlnKSB7XG4gIGlmIChcbiAgICBjb25maWcuYmFja2VuZCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgY29uZmlnLmJhY2tlbmQub2NjID09PSB1bmRlZmluZWQgfHxcbiAgICBjb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCA9PT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHJldHVybiAnUGxlYXNlIGNvbmZpZ3VyZSBiYWNrZW5kLm9jYy5iYXNlVXJsIGJlZm9yZSB1c2luZyBzdG9yZWZyb250IGxpYnJhcnkhJztcbiAgfVxufVxuIl19