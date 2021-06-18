import { NgModule } from '@angular/core';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [
    ViewHomeComponent,
    ViewTemplateComponent,
    ViewAboutComponent,
    ViewMessageComponent,
    ViewTaskComponent
  ],
  imports: [FeatureModule, SharedModule],
  exports: [
    ViewHomeComponent,
    ViewTemplateComponent,
    ViewAboutComponent,
    ViewMessageComponent,
    ViewTaskComponent
  ]
})
export class ViewModule {}
