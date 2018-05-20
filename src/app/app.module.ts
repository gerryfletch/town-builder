import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PreviewComponent} from './components/preview/preview.component';
import {GameComponent} from './components/game/game.component';
import {PropComponent} from './components/game/prop/prop.component';
import {DialogueModalComponent} from './components/dialogue-modal/dialogue-modal.component';
import {DialogueService} from './_services/dialogue.service';
import {HttpModule} from '@angular/http';
import {WebIdeComponent} from './components/web-ide/web-ide.component';
import {WebIdeService} from './_services/web-ide.service';
import {AceEditorModule} from 'ng2-ace-editor';
import {SafeHtmlPipe} from './_pipes/safe-html.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PropsService} from './_services/props.service';
import {MapComponent} from './components/game/map/map.component';
import {HeaderComponent} from './components/game/header/header.component';
import {AboutComponent} from './components/about/about/about.component';
import {RoutingModule} from './routing.module';
import {BuilderComponent} from './components/builder/builder.component';
import {EditorComponent} from './components/builder/editor/editor.component';
import {ResourcesComponent} from './components/builder/resources/resources.component';
import {InventoryComponent} from './components/builder/inventory/inventory.component';

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
    HeaderComponent,
    BuilderComponent,
    EditorComponent,
    ResourcesComponent,
    InventoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AceEditorModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [DialogueService, WebIdeService, PropsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
