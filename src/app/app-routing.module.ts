import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredComponent } from './secured/secured.component';
import { AuthGuard } from './core/auth.guard';
import { NotsecuredComponent } from './notsecured/notsecured.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsAdminGuard } from './core/is-admin.guard';
import { IsConnectedGuard } from './core/is-connected.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'secured',
    component: SecuredComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'notsecured',
    component: NotsecuredComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsConnectedGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
