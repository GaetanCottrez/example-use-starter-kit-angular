import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalModule } from './technical/technical.module';
import { FunctionnalModule } from './functionnal/functionnal.module';
import { MediatorsModule } from './mediators/mediators.module';
import {
  APP_MEDIATOR,
  APP_NET_PROVIDER,
  APP_STORAGE_PROVIDER
} from './mediators/app.tokens';
import { StorageService } from './technical/storage.service';
import { NetService } from './technical/net.service';
import { ViewMediatorService } from './mediators/vm/view-mediator.service';

@NgModule({
  providers: [
    { provide: APP_NET_PROVIDER, useExisting: NetService },
    { provide: APP_STORAGE_PROVIDER, useExisting: StorageService },
    { provide: APP_MEDIATOR, useExisting: ViewMediatorService }
  ],
  declarations: [],
  imports: [CommonModule, TechnicalModule, FunctionnalModule, MediatorsModule]
})
export class CoreModule {}
