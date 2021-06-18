import { NgModule } from '@angular/core';
import { NetService } from './net.service';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [],
  providers: [NetService, StorageService]
})
export class TechnicalModule {}
