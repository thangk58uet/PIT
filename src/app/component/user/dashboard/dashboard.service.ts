import { HttpClientCustom } from '../../../common/service/httpclient.service';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DashboardService {
  private API = environment.apiUrl;
  constructor(private http: HttpClientCustom) {
  }

  getData(params?): Observable<any> {
    const url = `/employees`;
    return this.http.get(url,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
  getDataPartner(userName): Observable<any> {
    const url = `/employees?partner=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }
  postData (params?): Observable<Response> {
    return this.http.post('/employees', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
  deleteData(id): Observable<any> {
    const url = `/employees/${id}`;
    return this.http.delete(url);
  }
  getDataById(id): Observable<any> {
    const url = `/employees/${id}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getUserInfo(userName): Observable<any> {
    const url = `/userInfo?userName=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  followPartner (params?): Observable<Response> {
    return this.http.post('/listFollow', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}
