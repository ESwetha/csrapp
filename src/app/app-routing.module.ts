import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActivityComponent } from './pages/create-activity/create-activity.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'create-event',
    component:CreateEventComponent,
    pathMatch:'full',
  },
  {
    path:'create-activity',
    component:CreateActivityComponent,
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
