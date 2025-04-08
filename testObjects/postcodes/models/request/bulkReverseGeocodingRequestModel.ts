export interface BulkReverseGeocodingRequestModel {
    geolocations: Geolocation[];
}
  
export interface Geolocation {
    longitude: number;
    latitude: number;
    radius?: number;
    limit?: number;
}  