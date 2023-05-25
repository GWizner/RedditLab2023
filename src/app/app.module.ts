import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostResultComponent } from './post-result/post-result.component';
import { SingleResultComponent } from './single-result/single-result.component';


@NgModule({
  declarations: [
    AppComponent,
    PostResultComponent,
    SingleResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
