import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppDraggablePortletsTemplateModule } from 'app-draggable-portlets-template';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppDraggablePortletsTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
