import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'feature-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @ViewChild(MessageListComponent) item: MessageListComponent | null = null;
  constructor() {}

  ngOnInit(): void {}
}
