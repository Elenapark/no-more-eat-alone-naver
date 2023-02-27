type Lat = number;
type Lng = number;

export type Coordinates = [Lat, Lng];

export interface MarkerProps {
  coordinates: Coordinates;
  map: naver.maps.Map;
}
