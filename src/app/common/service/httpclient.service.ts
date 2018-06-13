import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Response} from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable()
export class HttpClientCustom {

  constructor(private router: Router,
              private http: Http,
              private cookieService: CookieService) {
  }

  createAuthorizationHeader(headers: Headers) {
    if (sessionStorage.getItem('token')) {
      headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    }
  }

  get(url, params?) {
    // if (!this.cookieService.get('userName')) {
    //   this.router.navigate(['/login/']);
    //   return new Observable();
    // } else {
      const headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.get(API_URL + url, {
        headers: headers,
        params: params
      });
    //}
  }

  post(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(API_URL + url, data, {
      headers: headers
    });
  }

  postImg(url, data) {
    const headers = new Headers();

    headers.append('Accept', '*/*');
    this.createAuthorizationHeader(headers);
    return this.http.post(API_URL + url, data, {
      headers: headers
    });
  }

  put(url, body: any) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(API_URL + url, body, {
      headers: headers
    });
  }

  delete(url) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(API_URL + url, {
      headers: headers
    });
  }
}
