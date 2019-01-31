import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'watch movie','jurrasic world',new Date(2019,1,7)),
    new Quote(1,'trick us','thick twice beauty',new Date(2019,1,7)),
    new Quote(1,'romain','do you remember',new Date(2019,1,7)),
    new Quote(1,'coco','rocky rock on',new Date(2019,1,7)),
    new Quote(1,'chapman','always top',new Date(2019,1,7)),

  ]

constructor(){

  this.quotes = [];
}
}