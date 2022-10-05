import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PlayerComponent} from './player/player.component';
import {TeamComponent} from './team/team.component';
import {GameComponent} from './game/game.component';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlayerComponent,
    TeamComponent,
    GameComponent,
    PlayerListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
