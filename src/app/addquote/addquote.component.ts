import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})

export class AddquoteComponent implements OnInit {
  quotes: Quote[] = [];
  content: string;
  author: string;

  constructor() { }

  ngOnInit() {
  }

  addquote(form){
    let new_quote = new Quote();
    new_quote.content = this.content;
    new_quote.author = this.author;
    new_quote.ranking = 0;
    this.quotes.push(new_quote);
    this.sortquotes();
    form.reset();
    }

  
  add(idx){
    this.quotes[idx].ranking += 1;
    this.sortquotes();
    
  }

  subtract(idx){
    this.quotes[idx].ranking -= 1;
    this.sortquotes();
  }

  delete(idx){
    this.quotes.splice(idx,1);
    this.sortquotes();
  }

  sortquotes(){
    this.quotes.sort(function(a, b){
      return b.ranking - a.ranking;
    })
  }

  }
