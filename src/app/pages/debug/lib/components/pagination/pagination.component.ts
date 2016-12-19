import { Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { Request } from '../../lib/request.model';
import { URLSearchParams } from '@angular/http';

import { RequestService } from '../../lib/request.service';
import { Pagination } from './pagination.model';

var moment = require('moment');

@Component({
  selector: 'pagination',
  encapsulation: ViewEncapsulation.None,
  template: require('./pagination.html'),
  styles: []
})
export class PaginationComponent {

  @Input() pagination: Pagination
  @Output() clickPageEvent = new EventEmitter()


}
