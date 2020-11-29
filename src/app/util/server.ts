import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {POST} from './app.constant';

@Injectable()
export class Server {

  constructor(private http: HttpClient) {

  }

  submitRequest = function(request): any {
    return new Observable((observer) => {
      const url = request.url;
      const params = request.params ? request.params : {};
      const payload = request.data ? request.data : {};
      const headers = request.headers ? request.headers : {};

      let httpFunc;
      if (request.type === POST) {
        httpFunc = this.http.post(url, payload, { });
      } else {
        httpFunc = this.http.get(url, { params });
      }

      httpFunc
        .subscribe(data => {
            observer.next(data);
          }
          , error => {
            observer.error(error);
          });
    });
  };

}
