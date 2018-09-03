import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatListModule,
  MatGridListModule,
  MatBottomSheetModule
} from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatListModule,
  MatGridListModule,
  MatBottomSheetModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }
