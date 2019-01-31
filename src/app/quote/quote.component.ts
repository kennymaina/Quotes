import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
        new Quote('nesh','watch movie','jurrasic world',new Date(2019,1,7)),
        new Quote('king','trick us','thick twice beauty',new Date(2019,1,7)),
        new Quote('batman','romain','do you remember',new Date(2019,1,7)),
        new Quote('krol','coco','rocky rock on',new Date(2019,1,7)),
        new Quote('krol','chapman','always top',new Date(2019,1,7)),

]


deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`are you sure you want to do this ${this.quotes[index].name}`)
      this.quotes.splice(index,1);
      }
      }

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}



addNewQuote(quote){
  let goalLength = this.quotes.length;
  quote.id=goalLength+1;
  // quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}

  constructor() { }

  ngOnInit() {
  }

}
