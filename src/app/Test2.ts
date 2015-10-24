import {Component, bootstrap} from 'angular2/angular2';
import {RouterLink, RouteParams, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'test2',
    template: `
        <h1> Test 2 </h1>
        <a [router-link]="['/Test3']">Test Link 3</a>
    `,
    directives: [RouterLink]
})

export class Test2 {
    
    public id: string;
     
    constructor(params: RouteParams)
    {
        this.id = params.get('id');
        console.log('TEST: ' + this.id);
    }
}