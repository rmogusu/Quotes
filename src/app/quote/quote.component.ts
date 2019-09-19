import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {  
  quotes: Quote[] = [

 new Quote('Success', 'Success usually comes to those who are too busy to be looking for it.', 'Henry David Thoreau', new Date(2019, 8 - 1, 23),0,0),
  new Quote('Failure ', 'Giving up is the only sure way to fail.', 'Gena Showalter', new Date(2019, 8 - 1, 15),0,0),
  new Quote('Fear', 'Everything you want is on the other side of fear.', 'Jack Canfield', new Date(2019, 8 - 1, 12),0,0),
  new Quote('Wisdom', 'Knowing yourself is the beginning of all wisdom.', 'Aristotle', new Date(2019, 8 - 1, 10),0,0),
  new Quote('Passion ', 'Passion is the genesis of genius.', 'Tony Robbins', new Date(2019, 8 - 1, 19),0,0),
  new Quote('Investment ', 'Never invest in a business you cannot understand.', 'Warren Buffett', new Date(2019, 8 - 1, 17),0,0)
];
toggleDetails(index) {
  this.quotes[index].showCompleteDate = !this.quotes[index].showCompleteDate;
}
deleteQuote(isComplete, index) {
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)
    if (toDelete) {
      this.quotes.splice(index, 1)

    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
