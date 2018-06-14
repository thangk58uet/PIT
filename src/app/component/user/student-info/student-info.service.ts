import { HttpClientCustom } from '../../../common/service/httpclient.service';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StudentInfoService {

  constructor(private http: HttpClientCustom) { }
  getListStudent(params?): Observable<any> {
    const url = `/userInfo`;
    return this.http.get(url,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
  getStudentDetail(id): Observable<any> {
    const url = `/userInfo/${id}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }
  editStudentDetail(params?): Observable<Response> {
    return this.http.put(`/userInfo/${params.id}`,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}
