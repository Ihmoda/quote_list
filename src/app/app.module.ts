import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


import { AppComponent } from './app.component';
import { AddquoteComponent } from './addquote/addquote.component';
import { QuotelistComponent } from './addquote/quotelist/quotelist.component';


@NgModule({
  declarations: [
    AppComponent,
    AddquoteComponent,
    QuotelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
