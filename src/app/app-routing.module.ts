import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgosComponent } from './algos/algos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlgoDetailComponent } from './algo-detail/algo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'algos', component: DashboardComponent },
  { path: 'detail/:id', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

