import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PreviewComponent} from './components/preview/preview.component';
import {GameComponent} from './components/game/game.component';
import {PropComponent} from './components/prop/prop.component';
import {DialogueModalComponent} from './components/dialogue-modal/dialogue-modal.component';
import {DialogueService} from './_services/dialogue.service';
import {HttpModule} from '@angular/http';
import {WebIdeComponent} from './components/web-ide/web-ide.component';
import {WebIdeService} from './_services/web-ide.service';
import {AceEditorModule} from 'ng2-ace-editor';
import { SafeHtmlPipe } from './_pipes/safe-html.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PropsService } from './_services/props.service';
import { MapComponent } from './components/game/map/map.component';
import { HeaderComponent } from './components/game/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    GameComponent,
    PropComponent,
    DialogueModalComponent,
    WebIdeComponent,
    SafeHtmlPipe,
    MapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AceEditorModule,
    BrowserAnimationsModule
  ],
  providers: [DialogueService, WebIdeService, PropsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
