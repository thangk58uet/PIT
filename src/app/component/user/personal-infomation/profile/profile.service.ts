import { Injectable } from '@angular/core';
import { HttpClientCustom } from '../../../../common/service/httpclient.service';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ProfileService {

  constructor(private http: HttpClientCustom) { }

  getDataShoolManagement(params?): Observable<any> {
    const url = `/schoolManagement`;
    return this.http.get(url, params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  editDataShoolManagement(params?): Observable<Response> {
    return this.http.put('/schoolManagement', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getDataStudentManagement(params?): Observable<any> {
    const url = `/studentManagement`;
    return this.http.get(url, params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  editDataStudentManagement(params?): Observable<Response> {
    return this.http.put(`/studentManagement/${params.id}`, params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}

