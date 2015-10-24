import {Component, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

import {Test1} from './Test1';
import {Test2} from './Test2';
import {Test3} from './Test3';

@Component({
    selector: 'my-app',
    template: '<test1></test1><router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES, Test1, Test2]
})

@RouteConfig([
  {path: '/', as: 'Home', component: Test1},
  {path: '/Test2', as: 'Test2', component: Test2},
  {path: '/Test3', as: 'Test3', component: Test3}   
])

class AppComponent { }

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]); 