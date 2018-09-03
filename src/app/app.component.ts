import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <mat-toolbar color="primary">
        {{ title }}
      </mat-toolbar>
      <mutilselect-dropdown></mutilselect-dropdown>
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'Example of cascading, multi-select dropdowns in Angular with NgRx Store';

  constructor() { }

  ngOnInit() {
  }

}
