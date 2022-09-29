import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlayerComponent,
    TeamComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
