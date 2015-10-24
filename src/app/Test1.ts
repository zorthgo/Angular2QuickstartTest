import {Component, bootstrap} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'test1',
    templateUrl: 'app/Test1.html',
    directives: [RouterLink] 
})
export class Test1 { }