import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }


    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: ['']
            },
            {
                label: 'Portal',
                icon: 'pi pi-fw pi-box',
                routerLink: ['/portal']
            },
            {
                label: 'Links',
                icon: 'pi pi-fw pi-link',
                items: [
                    {label: 'Github', icon: 'pi pi-fw pi-github'},
                    {label: 'SwaggerHub', icon: 'pi pi-fw pi-compass'}
                ]
            }
        ];
    }

}
