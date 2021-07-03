import { NgModule } from '@angular/core';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule
} from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ViewHomeComponent, ViewTemplateComponent, ViewAboutComponent],
  imports: [
    FeatureModule,
    SharedModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbMenuModule,
    RouterModule
  ],
  exports: [ViewHomeComponent, ViewTemplateComponent, ViewAboutComponent]
})
export class ViewModule {}
