import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S3Component } from './s3/s3.component';
import {FormsModule} from "@angular/forms";
import { S3ChildComponent } from './s3/s3-child/s3-child.component';
import { S4Component } from './s4/s4.component';

@NgModule({
  declarations: [
    AppComponent,
   S3Component,
   S3ChildComponent,
   S4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
