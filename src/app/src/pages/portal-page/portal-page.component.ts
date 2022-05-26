import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.less']
})
export class PortalPageComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/portal/dashboard']},
      {label: 'Challenges', icon: 'pi pi-fw pi-star', routerLink: ['/portal/challenges']},
      {label: 'Tests Executions', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/portal/test-executions']},
      {label: 'Tests Inputs', icon: 'pi pi-fw pi-sign-in', routerLink: ['/portal/test-inputs']},
    ];
  }

}
