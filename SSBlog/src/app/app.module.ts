import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCommentComponent,
    CommentComponent,
    EditCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
