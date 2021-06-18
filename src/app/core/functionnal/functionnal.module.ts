import { NgModule } from '@angular/core';
import { MessageService } from './message.service';
import { TaskService } from './task.service';

@NgModule({
  providers: [MessageService, TaskService]
})
export class FunctionnalModule {}
