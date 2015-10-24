import {Component, bootstrap} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'test3',
    template: `
        <h1> Test 3 </h1>
        <a [router-link]="['/Test2', {id: 6}]">Test2 Link</a>
    `,
    directives: [RouterLink]
})
export class Test3 { } 