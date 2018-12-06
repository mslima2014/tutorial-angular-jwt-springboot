import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    { path: '', redirectTo: 'landing', pathMatch: 'prefix' },
    { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
    { path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule' },
    { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
    { path: 'pmboard', loadChildren: './pages/pmboard/pmboard.module#PmboardModule' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
