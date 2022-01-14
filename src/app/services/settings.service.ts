import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');


  constructor() { 

    let url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css' ;
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string){
    let url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme(){

    let links = document.querySelectorAll('.selector');

    const arrayd = Array.prototype.slice.call(
      document.getElementsByClassName('selector')
    );

    arrayd.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currenTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl === currenTheme) {
        elem.classList.add('working');
      }
    })
  }
}
