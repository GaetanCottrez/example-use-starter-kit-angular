import {
  Component,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent implements OnInit {
  @Input() footer: boolean = true;
  online: boolean = true;
  modal: boolean = false;
  @Output() pause = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:keyup.control.m')
  showModal(evt: Event) {
    this.modal = true;
    this.pause.emit(this.modal);
    setTimeout(() => {
      this.modal = false;
      this.pause.emit(this.modal);
    }, 3000);
  }
}
