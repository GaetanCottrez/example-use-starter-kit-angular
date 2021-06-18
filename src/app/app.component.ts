import { Component } from '@angular/core';
import { ViewMediatorService } from './core/mediators/vm/view-mediator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  constructor(public vm: ViewMediatorService) {}
}
