import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { sortBy as _sortBy } from 'lodash';

import { Category, ProductsByCategory } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getCategories$ = (): Observable<Category[]> => {
    return of(DATA.map(v => v.category)).pipe(
      map(data => _sortBy(data, 'rank')),
      delay(1000)
    );
  }

  getProducts$ = (category: Category): Observable<ProductsByCategory> => {
    return of(DATA.find(v => v.category.id === category.id).products).pipe(
      map(data => _sortBy(data, 'rank')),
      map(data => {
        return {
          category,
          products: DATA.find(v => v.category.id === category.id).products
        };
      }),
      (delay(1250))
    );
  }
}

const DATA = [
  {
    category: { id: 1, label: 'Beverages', rank: 2 },
    products: [
      { id: 11, label: 'Water', rank: 1 },
      { id: 16, label: 'Health Drink, Supplement', rank: 2 },
      { id: 12, label: 'Tea', rank: 3 },
      { id: 13, label: 'Coffee', rank: 4 },
      { id: 15, label: 'Energy & Soft Drinks', rank: 5 },
      { id: 14, label: 'Fruit Juices & Drinks', rank: 6 },
    ]
  },
  {
    category: { id: 2, label: 'Bakery, Cake & Diary', rank: 1 },
    products: [
      { id: 21, label: 'Dairy', rank: 1 },
      { id: 22, label: 'Breads & Buns', rank: 2 },
      { id: 23, label: 'Cookies, Rusk & Khari', rank: 3 },
      { id: 24, label: 'Bakery Snacks', rank: 4 },
      { id: 25, label: 'Cakes & Pastries', rank: 5 },
      { id: 26, label: 'Ice Creams & Desserts', rank: 6 },
      { id: 27, label: 'Gourmet Breads', rank: 7 },
    ]
  }
];

