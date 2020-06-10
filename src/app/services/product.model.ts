import { ID } from '@datorama/akita';
export type ProductColor = 'blue' | 'green' | 'gray';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  discount?: number;
  currency?: string;
  img_url?: string;
  colors?: ProductColor[];
}

export interface ProductFilter {
  color?: ProductColor;
}
