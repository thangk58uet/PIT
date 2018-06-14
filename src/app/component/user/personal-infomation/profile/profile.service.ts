import { Injectable } from '@angular/core';
import { HttpClientCustom } from '../../../../common/service/httpclient.service';
import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ProfileService {

  constructor(private http: HttpClientCustom) { }

  getUserInfo(userName): Observable<any> {
    const url = `/userInfo?userName=${userName}`;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
    }));
  }

  editUserInfo(params?): Observable<Response> {
    return this.http.put(`/userInfo/${params.id}`,params).pipe(map((res: Response) => {
      return res.json();
    }));
  }
}

