import { Component } from '@angular/core';
import { ThemeService } from '../../core/theme/theme.service';
import {selectErrorTodo} from "../../core/store/selectors/todo.selectors";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../core/store/interfaces/app-state";

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent {
  private error$: Observable<any>;
  public error: any = false;
  constructor(public store: Store<AppState>, private themeService: ThemeService) {
    this.error$ = this.store.select(selectErrorTodo);
    this.error$.subscribe(state => this.error = state)
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
