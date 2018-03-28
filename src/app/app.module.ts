import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreviewComponent } from './components/preview/preview.component';
import { GameComponent } from './components/game/game.component';
import { PropComponent } from './components/prop/prop.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    GameComponent,
    PropComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
