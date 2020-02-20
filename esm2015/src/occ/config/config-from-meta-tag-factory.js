import { Meta } from '@angular/platform-browser';
import { provideConfigFactory } from '../../config/config.module';
export const OCC_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
export const OCC_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
export const MEDIA_BASE_URL_META_TAG_NAME = 'media-backend-base-url';
export const MEDIA_BASE_URL_META_TAG_PLACEHOLDER = 'MEDIA_BACKEND_BASE_URL_VALUE';
export function occServerConfigFromMetaTagFactory(meta) {
    const baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { occ: { baseUrl } } }
        : {};
}
export function mediaServerConfigFromMetaTagFactory(meta) {
    const baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { media: { baseUrl } } }
        : {};
}
function getMetaTagContent(name, meta) {
    const metaTag = meta.getTag(`name="${name}"`);
    return metaTag && metaTag.content;
}
export function provideConfigFromMetaTags() {
    return [
        provideConfigFactory(occServerConfigFromMetaTagFactory, [Meta]),
        provideConfigFactory(mediaServerConfigFromMetaTagFactory, [Meta]),
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZyb20tbWV0YS10YWctZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnL2NvbmZpZy1mcm9tLW1ldGEtdGFnLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2xFLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHLHNCQUFzQixDQUFDO0FBQ2pFLE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFHLDRCQUE0QixDQUFDO0FBQzlFLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHLHdCQUF3QixDQUFDO0FBQ3JFLE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUM5Qyw4QkFBOEIsQ0FBQztBQUVqQyxNQUFNLFVBQVUsaUNBQWlDLENBQUMsSUFBVTtJQUMxRCxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxPQUFPLE9BQU8sSUFBSSxPQUFPLEtBQUssaUNBQWlDO1FBQzdELENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7UUFDbkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUM7QUFFRCxNQUFNLFVBQVUsbUNBQW1DLENBQUMsSUFBVTtJQUM1RCxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxPQUFPLE9BQU8sSUFBSSxPQUFPLEtBQUssbUNBQW1DO1FBQy9ELENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLElBQVksRUFBRSxJQUFVO0lBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDcEMsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsT0FBTztRQUNMLG9CQUFvQixDQUFDLGlDQUFpQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0Qsb0JBQW9CLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsRSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnRmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4vb2NjLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfTkFNRSA9ICdvY2MtYmFja2VuZC1iYXNlLXVybCc7XG5leHBvcnQgY29uc3QgT0NDX0JBU0VfVVJMX01FVEFfVEFHX1BMQUNFSE9MREVSID0gJ09DQ19CQUNLRU5EX0JBU0VfVVJMX1ZBTFVFJztcbmV4cG9ydCBjb25zdCBNRURJQV9CQVNFX1VSTF9NRVRBX1RBR19OQU1FID0gJ21lZGlhLWJhY2tlbmQtYmFzZS11cmwnO1xuZXhwb3J0IGNvbnN0IE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX1BMQUNFSE9MREVSID1cbiAgJ01FRElBX0JBQ0tFTkRfQkFTRV9VUkxfVkFMVUUnO1xuXG5leHBvcnQgZnVuY3Rpb24gb2NjU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5KG1ldGE6IE1ldGEpOiBPY2NDb25maWcge1xuICBjb25zdCBiYXNlVXJsID0gZ2V0TWV0YVRhZ0NvbnRlbnQoT0NDX0JBU0VfVVJMX01FVEFfVEFHX05BTUUsIG1ldGEpO1xuICByZXR1cm4gYmFzZVVybCAmJiBiYXNlVXJsICE9PSBPQ0NfQkFTRV9VUkxfTUVUQV9UQUdfUExBQ0VIT0xERVJcbiAgICA/IHsgYmFja2VuZDogeyBvY2M6IHsgYmFzZVVybCB9IH0gfVxuICAgIDoge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVNlcnZlckNvbmZpZ0Zyb21NZXRhVGFnRmFjdG9yeShtZXRhOiBNZXRhKTogT2NjQ29uZmlnIHtcbiAgY29uc3QgYmFzZVVybCA9IGdldE1ldGFUYWdDb250ZW50KE1FRElBX0JBU0VfVVJMX01FVEFfVEFHX05BTUUsIG1ldGEpO1xuICByZXR1cm4gYmFzZVVybCAmJiBiYXNlVXJsICE9PSBNRURJQV9CQVNFX1VSTF9NRVRBX1RBR19QTEFDRUhPTERFUlxuICAgID8geyBiYWNrZW5kOiB7IG1lZGlhOiB7IGJhc2VVcmwgfSB9IH1cbiAgICA6IHt9O1xufVxuXG5mdW5jdGlvbiBnZXRNZXRhVGFnQ29udGVudChuYW1lOiBzdHJpbmcsIG1ldGE6IE1ldGEpIHtcbiAgY29uc3QgbWV0YVRhZyA9IG1ldGEuZ2V0VGFnKGBuYW1lPVwiJHtuYW1lfVwiYCk7XG4gIHJldHVybiBtZXRhVGFnICYmIG1ldGFUYWcuY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGcm9tTWV0YVRhZ3MoKTogUHJvdmlkZXJbXSB7XG4gIHJldHVybiBbXG4gICAgcHJvdmlkZUNvbmZpZ0ZhY3Rvcnkob2NjU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5LCBbTWV0YV0pLFxuICAgIHByb3ZpZGVDb25maWdGYWN0b3J5KG1lZGlhU2VydmVyQ29uZmlnRnJvbU1ldGFUYWdGYWN0b3J5LCBbTWV0YV0pLFxuICBdO1xufVxuIl19