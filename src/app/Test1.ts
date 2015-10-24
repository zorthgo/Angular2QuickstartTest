import {Component, bootstrap} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'test1',
    template: `
        <h1> Test 1 </h1>
        <a [router-link]="['/Test2', {id: 9}]">Test2 Link</a>
    `,
    directives: [RouterLink] 
})
export class Test1 { }