import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  @Input() quoteList;
  @Output() add = new EventEmitter();
  @Output() subtract = new EventEmitter();
  @Output() delete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addRank(idx, num){
    this.add.emit(idx)
  }

  subtractRank(idx){
    console.log("hit subtract");
    this.subtract.emit(idx);
  }

  deleteQuote(idx){
    this.delete.emit(idx);
  }

}
