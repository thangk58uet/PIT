import { HttpClientCustom } from '../../../common/service/httpclient.service';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ReportService {

  private API = environment.apiUrl;
  constructor(private http: HttpClientCustom) {
  }

  getlistReport(userName: string): Observable<any> {
    const url = `/listReport?sender=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  addReport (params?): Observable<Response> {
    return this.http.post('/listReport', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getReportDetail(id): Observable<any> {
    const url = `/listReport/${id}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  setPointReport(params?): Observable<Response> {
    return this.http.put(`/listReport/${params.id}`,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}
