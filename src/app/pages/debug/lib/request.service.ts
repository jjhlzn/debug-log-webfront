import { Request } from './request.model';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService {

  baseUrl = "http://localhost:4000/api/v1"

  constructor(private http: Http) {
  }

  search(params: URLSearchParams) {

    return this.http.get(`${this.baseUrl}/requests`, {search: params})
      .toPromise()
      .then(res => res.json());
  }
}
