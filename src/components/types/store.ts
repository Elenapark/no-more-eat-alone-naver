import { Coordinates } from './map';

interface Menu {
  name: string;
  price: string;
}

export interface StoreProps {
  nid: number;
  season: number;
  episode: number;
  characteristic: string;
  name: string;
  coordinates: Coordinates;
  foodKind: string;
  address: string;
  phone: string;
  images: string[];
  description: string;
  menus: Menu[];
}
