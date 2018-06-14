import { Injectable } from '@angular/core';
import { HttpClientCustom } from './httpclient.service';
import { environment } from '../../../environments/environment';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginService {

  role: string = '';
  userName: string = '';
  password: string = '';
  userID: string = '';
  nickName: string = '';
  constructor(private http: HttpClientCustom) {
  }


  getAccountUser(userName: string, passWord: string): Observable<any> {
    const url = `/userAccount?userName=${userName}&passWord=${passWord}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  addMail (params?): Observable<Response> {
    return this.http.post('/listMail', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getListMail(userName: string): Observable<any> {
    const url = `/listMail?receiver=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getMailDetail(id): Observable<any> {
    const url = `/listMail/${id}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  editMailDetail(params?): Observable<Response> {
    return this.http.put(`/listMail/${params.id}`,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  changePasswordUser(params?): Observable<Response> {
    return this.http.put(`/userAccount/${params.id}`,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}
