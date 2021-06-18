import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';

@NgModule({
  declarations: [MessageComponent, MessageListComponent, MessageItemComponent],
  imports: [SharedModule],
  exports: [MessageComponent]
})
export class MessageModule {}
