import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

import { Product } from '../../models';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
  products: Product[];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.products = data;
  }

  ngOnInit() {
  }

}
