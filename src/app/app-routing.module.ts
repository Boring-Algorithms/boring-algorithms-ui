import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './src/pages/home-page/home-page.component';
import { PortalPageComponent } from './src/pages/portal-page/portal-page.component';
import { ChallengesComponent } from './src/portal/challenges/challenges.component';
import { DashboardComponent } from './src/portal/dashboard/dashboard.component';
import { TestExecutionsComponent } from './src/portal/test-executions/test-executions.component';
import { TestInputsComponent } from './src/portal/test-inputs/test-inputs.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'portal', component: PortalPageComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'challenges', component: ChallengesComponent },
      {path: 'test-executions', component: TestExecutionsComponent },
      {path: 'test-inputs', component: TestInputsComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
