import { HttpClientCustom } from '../../../common/service/httpclient.service';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SystemManagerService {

  constructor(private http: HttpClientCustom) { }
  getListAccount(params?): Observable<any> {
    const url = `/userAccount`;
    return this.http.get(url,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  getAccountDetail(id): Observable<any> {
    const url = `/userAccount/${id}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  editAccountDetail(params?): Observable<Response> {
    return this.http.put(`/userAccount/${params.id}`,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  deleteAccountDetail(id): Observable<any> {
    const url = `/userAccount/${id}`;
    return this.http.delete(url);
  }

  addAccount (params?): Observable<Response> {
    return this.http.post('/userAccount', params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}
