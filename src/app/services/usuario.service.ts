import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';
import { catchError, map, Observable, tap , of} from 'rxjs';
import { Router } from '@angular/router';

const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor( 
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.googleInit();
  }

  googleInit(){

    return new Promise<void>(resolve => {
      gapi.load('auth2', () =>{
        this.auth2 = gapi.auth2.init({
          client_id: '890367675918-3104hib3fl5pvk7paqv2i5ql4c2qaebi.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });

        resolve();
      });
    })

  }

  logOut(){
    localStorage.removeItem('token');
    this.auth2.signOut().then( () => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    });
  }

  validarToken(): Observable<boolean>{
    let token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, 
    { headers: 
      {
        'x-token': token
      }
    })
    .pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      }),
      map(resp => true),
      catchError( error => of(false))
    )
  }

  crearUsuario( formData: RegisterForm ) {
    return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      )
  }

  login( formData: LoginForm ){
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      )
  }

  loginGoogle( token: any ){
    return this.http.post(`${base_url}/login/google`, {token})
      .pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      )
  }

}
