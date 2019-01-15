import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Quotes } from '../quotes/quotes';
// import { QuoteSamples } from './../quotes/sample-quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {

  quotesForm: FormGroup;

  votes: number;

  timeDiff: any;

  userQuote = new Quotes ('Enter Your Name', 'Author\'s Name', 'Enter Quote', this.defaultVote(), this.defaultVote(), this.currentDate());
  @Output() newQuotes = new EventEmitter<Quotes>();

  publish() {
    this.newQuotes.emit(this.userQuote);

    this.quotesForm.reset();
  }

  currentDate() {
    return new Date();
  }

  defaultVote() {
    this.votes = 0;
    return this.votes;
  }

  ngOnInit() {
  }

}
