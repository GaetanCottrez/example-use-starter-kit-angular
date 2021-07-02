import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './store/effects/todo.effects';
import {reducers, metaReducers} from "./store/reducers";
import {environment} from "../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TodoEffects]),
  ]
})
export class CoreModule {
}
