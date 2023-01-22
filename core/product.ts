
import {Colors} from './colors'
export interface Product {
  id: number;
  name: string;
  imageUrls: string[];
  price: number;
  colors: Colors[];

}
