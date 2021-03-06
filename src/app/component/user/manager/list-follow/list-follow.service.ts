import { Injectable } from '@angular/core';
import { HttpClientCustom } from '../../../../common/service/httpclient.service';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ListFollowService {

  constructor(private http: HttpClientCustom) { }

  getListStudentFollow(userName: string): Observable<any> {
    const url = `/listFollow?userName=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getListPartnerFollow(userName: string): Observable<any> {
    const url = `/listFollow?partner=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }


  addRequestInterAtSchool (params?): Observable<Response> {
    return this.http.post('/listFollow', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  addRequestInterAtOtherPartner (params?): Observable<Response> {
    return this.http.post('/listFollow', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getStudentFollowInfo(id): Observable<any> {
    const url = `/listFollow/${id}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  changeStatusStudentFollow(params?): Observable<Response> {
    return this.http.put(`/listFollow/${params.id}`,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getUserInfo(userName): Observable<any> {
    const url = `/userInfo?userName=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}
