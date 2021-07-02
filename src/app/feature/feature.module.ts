import { NgModule } from '@angular/core';
import {TodoComponent} from "./todo/todo.component";
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSelectModule
} from "@nebular/theme";
import {TodoItemComponent} from "./todo/todo-item/todo-item.component";
import {CommonModule} from "@angular/common";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TodoComponent,
    TodoItemComponent
  ],
  imports: [
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbListModule,
    NbCheckboxModule,
    NbSelectModule,
    FormsModule,
    CommonModule
  ],
  exports: [TodoComponent]
})
export class FeatureModule {}
