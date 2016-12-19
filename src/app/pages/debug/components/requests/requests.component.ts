import { Component, ViewEncapsulation } from '@angular/core';
import { Request } from '../../lib/request.model';
import { URLSearchParams } from '@angular/http';

import { RequestService } from '../../lib/request.service';

import { Pagination } from '../../lib/components/pagination/pagination.model';

var moment = require('moment');

@Component({
  selector: 'requests',
  encapsulation: ViewEncapsulation.None,
  template: require('./requests.html'),
  styles: [require('./requests.css')]
})
export class Requests {
  app: any
  startTime: any
  endTime: any
  requests: Request[]

  pagination: Pagination = new Pagination()

  constructor(private requestService: RequestService) {
    this.startTime = moment()
    this.endTime = moment()
    this.app = "order"
    this.retriveRequests();
  }

  //点按分页
  clickPage(page) {
    this.retriveRequests();
  }

  private retriveRequests() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('startTime', this.startTime.format('YYYY-MM-DD HH:mm:ss'));
    params.set('endTime',  this.endTime.format('YYYY-MM-DD HH:mm:ss'));
    params.set('page', this.pagination.currentPage + '');
    params.set('pageLimit', this.pagination.limit + '');
    params.set("app", this.app);

    this.requestService.search(params).then(resp => {
      this.requests = resp['data'];

      this.pagination.set(resp.totalCount, resp.page);
    });
  }
}
