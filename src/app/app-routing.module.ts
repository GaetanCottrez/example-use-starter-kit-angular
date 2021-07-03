import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHomeComponent } from './view/view-home/view-home.component';
import { ViewAboutComponent } from './view/view-about/view-about.component';

const routes: Routes = [
  {
    path: '',
    component: ViewHomeComponent
  },
  {
    path: 'about',
    component: ViewAboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
