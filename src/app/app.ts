import {Component, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {Test1} from './Test1';
import {Test2} from './Test2';
import {Test3} from './Test3';

@Component({
    selector: 'my-app',
    template: ` <a [router-link]="['/Home']">Test1 Link</a>
                <a [router-link]="['/Test2', {id: 3}]">Test2 Link</a>
                <a [router-link]="['/Test3']">Test3 Link</a>
                <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, Test1, Test2,Test3]
})

@RouteConfig([
  {path: '/',          component: Test1, as: 'Home'},
  {path: '/Test2/:id', component: Test2, as: 'Test2'},
  {path: '/Test3',     component: Test3, as: 'Test3'}
    
])

class AppComponent {
  constructor() { }
 }

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]); 