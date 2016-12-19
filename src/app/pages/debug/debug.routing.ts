import { Routes, RouterModule }  from '@angular/router';

import { Debug } from './debug.component';
import { Logs } from './components/logs/logs.component';
import { Requests } from './components/requests/requests.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Debug,
    children: [
      { path: 'logs', component: Logs },
      { path: 'requests', component: Requests }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
