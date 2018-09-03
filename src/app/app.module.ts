import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { EFFECTS, REDUCERS, META_REDUCERS } from './store';
import {
  MutilselectDropdownComponent,
  BottomSheetComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    MutilselectDropdownComponent,
    BottomSheetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(REDUCERS, { metaReducers: META_REDUCERS }),
    EffectsModule.forRoot(EFFECTS),
    StoreDevtoolsModule.instrument()
  ],
  entryComponents: [
    BottomSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
