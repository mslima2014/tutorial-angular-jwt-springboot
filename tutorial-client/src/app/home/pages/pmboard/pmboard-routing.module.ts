import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmboardComponent } from './pmboard.component';

const routes: Routes = [{path: '', component: PmboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmboardRoutingModule { }
