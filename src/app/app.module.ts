import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleCardComponent } from './title-card/title-card.component';
import { MuteButtonComponent } from './mute-button/mute-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleCardComponent,
    MuteButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
