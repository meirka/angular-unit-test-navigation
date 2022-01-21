import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { PressReleaseComponent } from './press-release/press-release.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    PressReleaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
