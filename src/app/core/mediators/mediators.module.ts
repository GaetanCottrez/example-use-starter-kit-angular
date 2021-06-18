import { NgModule } from '@angular/core';
import { MessagesPipe } from './pipes/messages.pipe';
import { TaskGuards } from './guards/task.guards';
import { MessagesGuard } from './guards/messages.guard';
import { AuthGuard } from './guards/auth.guard';
import { ViewMediatorService } from './vm/view-mediator.service';

@NgModule({
  declarations: [MessagesPipe],
  providers: [TaskGuards, MessagesGuard, AuthGuard, ViewMediatorService],
  exports: [MessagesPipe]
})
export class MediatorsModule {}
