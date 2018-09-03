import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, merge } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';

import {
  AppState,
  LoadCategories,
  getCategories,
  getProducts,
  LoadProducts
} from '../../store';
import { Category, ProductsByCategory } from '../../models';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'mutilselect-dropdown',
  templateUrl: './mutilselect-dropdown.component.html',
  styleUrls: ['./mutilselect-dropdown.component.css']
})
export class MutilselectDropdownComponent implements OnInit {
  orderForm: FormGroup;
  categories$: Observable<Category[]>;
  products$: Observable<ProductsByCategory[]>;

  constructor(
    private formBuilder: FormBuilder,
    private bottomSheet: MatBottomSheet,
    private store: Store<AppState>
  ) {
    this.initForm();
    this.categories$ = this.store.select(getCategories);
  }

  initForm() {
    this.orderForm = this.formBuilder.group({
      categorySelect: [null, Validators.required],
      productSelect: [{ value: null, disabled: true }, Validators.required]
    });

    const fromStore$ = this.store.select(getProducts).pipe(
      withLatestFrom(this.orderForm.get('categorySelect').valueChanges),
      map(([fromStore, fromForm]) => {
        return fromStore.filter(s => fromForm.find(f => f.id === s.category.id));
      })
    );

    const fromForm$ = this.orderForm.get('categorySelect').valueChanges.pipe(
      withLatestFrom(this.store.select(getProducts)),
      tap(([fromForm, fromStore]: [Category[], ProductsByCategory[]]) => {
        const categories = fromForm.filter(f => !fromStore.find(s => s.category.id === f.id));
        /*
        User selects one Category at at time and we dispatch action to load products for that Category.
        So, we assume the filtered 'categories' array above to be of length 1 max.
        */
        if (categories.length === 1) {
          this.store.dispatch(new LoadProducts(categories[0]));
        } else if (categories.length > 1) {
          console.error('MutilselectDropdownComponent', 'Filtered multiple LoadProducts dispatch actions');
        }
      }),
      map(([fromForm, fromStore]) => {
        return fromStore.filter(s => fromForm.find(f => f.id === s.category.id));
      })
    );

    // emit outputs as one observable
    this.products$ = merge(
      fromStore$, fromForm$
    ).pipe(
      tap(products => {
        const action = (products.length === 0) ? 'disable' : 'enable';
        this.orderForm.get('productSelect')[action]();
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(new LoadCategories());
  }

  onClear() {
    this.orderForm.reset();
  }

  onSubmit() {
    this.bottomSheet.open(BottomSheetComponent, {
      data: this.orderForm.value.productSelect
    });
  }

  ngForTrackByFn = (index, item) => {
    return item.id;
  }

}
