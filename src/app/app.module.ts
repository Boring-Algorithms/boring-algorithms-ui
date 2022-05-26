
// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Prime NG
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {TabMenuModule} from 'primeng/tabmenu';

// Custom
import { TopMenuComponent } from './src/navigation/top-menu/top-menu.component';
import { HomePageComponent } from './src/pages/home-page/home-page.component';
import { PortalPageComponent } from './src/pages/portal-page/portal-page.component';
import { DashboardComponent } from './src/portal/dashboard/dashboard.component';
import { ChallengesComponent } from './src/portal/challenges/challenges.component';
import { TestExecutionsComponent } from './src/portal/test-executions/test-executions.component';
import { TestInputsComponent } from './src/portal/test-inputs/test-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomePageComponent,
    PortalPageComponent,
    DashboardComponent,
    ChallengesComponent,
    TestExecutionsComponent,
    TestInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
