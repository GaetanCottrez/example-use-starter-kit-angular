import { Component, OnInit } from '@angular/core';
import { ViewMediatorService } from '../../../core/mediators/vm/view-mediator.service';
import { ActionTypes } from '../../../core/mediators/action-types';

@Component({
  selector: 'feature-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(private vm: ViewMediatorService) {}

  ngOnInit(): void {
    this.refreshMessage();
  }

  public refreshMessage() {
    this.vm.dispatch({ type: ActionTypes.MESSAGE_LOAD_REQUEST, payload: null });
  }
}
