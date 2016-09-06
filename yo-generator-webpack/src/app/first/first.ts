import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'first'
  selector: 'first',  // <first></first>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [require('./first.css')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./first.html')
})
export class First {
  // TypeScript public modifiers
  constructor(public http: Http) {

  }

  ngOnInit() {
    console.log('hello first component');
  }

}
