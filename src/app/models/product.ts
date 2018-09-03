import { Category } from './category';

export interface Product {
  id: number;
  label: string;
}

export interface ProductsByCategory {
  category: Category;
  products: Product[];
}
