import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote('nesh','watch movie','jurrasic world',new Date(2019,1,7)),
    new Quote('king','trick us','thick twice beauty',new Date(2019,1,7)),
    new Quote('batman','romain','do you remember',new Date(2019,1,7)),
    new Quote('krol','coco','rocky rock on',new Date(2019,1,7)),
    new Quote('krol','chapman','always top',new Date(2019,1,7)),

  ]

constructor(){

  this.quotes = [];
}
}