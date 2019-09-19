import { Component, OnInit ,Input,Output, EventEmitter,} from '@angular/core';
import { Quote} from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {  
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() Upvote = new EventEmitter();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
numberOfLikes = 0;
numberOfDislikes = 0;
likeButtonClick() {
  this.Upvote.emit(this.numberOfLikes);
  this.numberOfLikes++;
}

dislikeButtonClick() {
  this.numberOfDislikes++;
}


  constructor() { }

  ngOnInit() {
  }

}
