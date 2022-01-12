import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    this.checkCurrentTheme();
  }

  changeTheme(theme: string){
    let url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    let links = document.querySelectorAll('selector');
    
    links.forEach( elem => {
      elem.classList.remove('working');

      let btnTheme = elem.getAttribute('data-theme');

      let btnThemeUrl = `./assets/css/colors/${btnTheme}.css`

      let currentTheme = this.linkTheme?.getAttribute('href');

      if(btnTheme === currentTheme){
        elem.classList.add('working');
      }
    })
  }

}