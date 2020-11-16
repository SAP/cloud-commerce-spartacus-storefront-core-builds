export class TimeUtils {
    /**
     * Returns the local timezone in a format that can be appended to a date-like string.
     * @param invert (default: false): returns the opposite operator relative to the local timezone
     *
     * @example
     * When locale is set to a CEST timezone, `getLocalTimezoneOffset()` returns '+02:00'
     * and `getLocalTimezoneOffset(true)` returns '-02:00'
     */
    static getLocalTimezoneOffset(invert) {
        const offset = new Date().getTimezoneOffset() * -1;
        const hours = Math.abs(Math.floor(offset / 60))
            .toString()
            .padStart(2, '0');
        const minutes = (offset % 60).toString().padStart(2, '0');
        const sign = offset >= 0 ? (invert ? `-` : `+`) : invert ? `+` : `-`;
        return `${sign}${hours}:${minutes}`;
    }
    static convertDateToDatetime(date, endOfDay) {
        return `${date}T${!endOfDay ? '00:00:00' : '23:59:59'}${TimeUtils.getLocalTimezoneOffset()}`;
    }
    static convertDatetimeToDate(datetime) {
        return new Date(`${datetime.substring(0, 19)}${TimeUtils.getLocalTimezoneOffset(true)}`)
            .toISOString()
            .substring(0, 10);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3V0aWwvdGltZS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sU0FBUztJQUNwQjs7Ozs7OztPQU9HO0lBQ0gsTUFBTSxDQUFDLHNCQUFzQixDQUFDLE1BQWdCO1FBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQzVDLFFBQVEsRUFBRTthQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNyRSxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQVksRUFBRSxRQUFrQjtRQUMzRCxPQUFPLEdBQUcsSUFBSSxJQUNaLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQzNCLEdBQUcsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFFBQWdCO1FBQzNDLE9BQU8sSUFBSSxJQUFJLENBQ2IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDeEU7YUFDRSxXQUFXLEVBQUU7YUFDYixTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaW1lVXRpbHMge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWwgdGltZXpvbmUgaW4gYSBmb3JtYXQgdGhhdCBjYW4gYmUgYXBwZW5kZWQgdG8gYSBkYXRlLWxpa2Ugc3RyaW5nLlxuICAgKiBAcGFyYW0gaW52ZXJ0IChkZWZhdWx0OiBmYWxzZSk6IHJldHVybnMgdGhlIG9wcG9zaXRlIG9wZXJhdG9yIHJlbGF0aXZlIHRvIHRoZSBsb2NhbCB0aW1lem9uZVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBXaGVuIGxvY2FsZSBpcyBzZXQgdG8gYSBDRVNUIHRpbWV6b25lLCBgZ2V0TG9jYWxUaW1lem9uZU9mZnNldCgpYCByZXR1cm5zICcrMDI6MDAnXG4gICAqIGFuZCBgZ2V0TG9jYWxUaW1lem9uZU9mZnNldCh0cnVlKWAgcmV0dXJucyAnLTAyOjAwJ1xuICAgKi9cbiAgc3RhdGljIGdldExvY2FsVGltZXpvbmVPZmZzZXQoaW52ZXJ0PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogLTE7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmFicyhNYXRoLmZsb29yKG9mZnNldCAvIDYwKSlcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBtaW51dGVzID0gKG9mZnNldCAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+PSAwID8gKGludmVydCA/IGAtYCA6IGArYCkgOiBpbnZlcnQgPyBgK2AgOiBgLWA7XG4gICAgcmV0dXJuIGAke3NpZ259JHtob3Vyc306JHttaW51dGVzfWA7XG4gIH1cblxuICBzdGF0aWMgY29udmVydERhdGVUb0RhdGV0aW1lKGRhdGU6IHN0cmluZywgZW5kT2ZEYXk/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7ZGF0ZX1UJHtcbiAgICAgICFlbmRPZkRheSA/ICcwMDowMDowMCcgOiAnMjM6NTk6NTknXG4gICAgfSR7VGltZVV0aWxzLmdldExvY2FsVGltZXpvbmVPZmZzZXQoKX1gO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnREYXRldGltZVRvRGF0ZShkYXRldGltZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICBgJHtkYXRldGltZS5zdWJzdHJpbmcoMCwgMTkpfSR7VGltZVV0aWxzLmdldExvY2FsVGltZXpvbmVPZmZzZXQodHJ1ZSl9YFxuICAgIClcbiAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAuc3Vic3RyaW5nKDAsIDEwKTtcbiAgfVxufVxuIl19