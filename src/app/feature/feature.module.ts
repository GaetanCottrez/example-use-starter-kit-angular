import { NgModule } from '@angular/core';
import { MessageModule } from './message/message.module';
import { TaskModule } from './task/task.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  exports: [MessageModule, TaskModule, AboutComponent]
})
export class FeatureModule {}
