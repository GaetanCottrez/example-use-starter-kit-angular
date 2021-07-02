import { Component } from '@angular/core';
import {ThemeService} from "../../core/theme/theme.service";

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent {
  constructor(private themeService: ThemeService) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
