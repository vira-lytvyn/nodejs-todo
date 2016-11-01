import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  imports: [
  	BrowserModule,
  	HttpModule,
  	FormsModule
  ],
  declarations: [
  	AppComponent,
  	TodosComponent
  ],
  bootstrap: [
  	AppComponent
  ]
})

export class AppModule { }
