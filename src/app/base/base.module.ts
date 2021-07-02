import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './base-button/base-button.component';

@NgModule({
  declarations: [
    BaseButtonComponent,
  ],
	imports: [CommonModule],
  exports: [
    BaseButtonComponent,
  ]
})
export class BaseModule {}
