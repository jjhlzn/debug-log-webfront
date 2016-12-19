import { NgModule }   from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule }  from '@angular/common';
//import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './debug.routing';

import { DateTimePipe } from './lib/dateTime.pipe';

import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Debug } from './debug.component';
import { Logs } from './components/logs';
import { Requests } from './components/requests';

import { PaginationComponent } from './lib/components/pagination/pagination.component';

import { LogService } from './lib/log.service';
import { RequestService } from './lib/request.service';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    RatingModule,
    routing,
    HttpModule
  ],
  declarations: [
    Debug,
    Logs,
    Requests,
    DateTimePipe,
    PaginationComponent
  ],
  providers: [
    LogService,
    RequestService
  ]
})
export default class DebugModule {
}
