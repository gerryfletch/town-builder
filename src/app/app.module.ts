import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreviewComponent } from './components/preview/preview.component';
import { GameComponent } from './components/game/game.component';
import { PropComponent } from './components/prop/prop.component';
import { DialogueModalComponent } from './components/dialogue-modal/dialogue-modal.component';
import {DialogueService} from './_services/dialogue.service';
import {HttpModule} from '@angular/http';
import { WebIdeComponent } from './components/web-ide/web-ide.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    GameComponent,
    PropComponent,
    DialogueModalComponent,
    WebIdeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DialogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
