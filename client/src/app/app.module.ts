import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcModule } from './mdc/mdc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
