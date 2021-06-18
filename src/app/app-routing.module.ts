import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHomeComponent } from './view/view-home/view-home.component';
import { ViewTaskComponent } from './view/view-task/view-task.component';
import { ViewMessageComponent } from './view/view-message/view-message.component';
import { ViewAboutComponent } from './view/view-about/view-about.component';

const routes: Routes = [
  {
    path: '',
    component: ViewHomeComponent
  },
  {
    path: 'task',
    component: ViewTaskComponent
  },
  {
    path: 'message',
    component: ViewMessageComponent
  },
  {
    path: 'about',
    component: ViewAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
