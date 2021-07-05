import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';
import { metaReducers, reducers } from './store/reducers';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NetService } from './technical/net.service';
import { APP_NET_PROVIDER } from './interfaces/net-provider';

@NgModule({
  declarations: [],
  providers: [{ provide: APP_NET_PROVIDER, useExisting: NetService }],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TodoEffects])
  ]
})
export class CoreModule {}
