import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/'},
        { title: 'Gráficas', url: 'grafica1'},
        { title: 'rxjs', url: 'rxjs'},
        { title: 'Promesas', url: 'promesas'},
        { title: 'ProgressBar', url: 'progress'},
        
      ]
    }
  ];

  constructor() { }
}
