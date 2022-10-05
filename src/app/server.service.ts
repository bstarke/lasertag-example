import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "./player/player.model";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl: string = "http://localhost:8080"
  players: Player[] = [];
  playersChanged = new EventEmitter<Player[]>();

  constructor(private http: HttpClient) {
    this.loadPlayers();
  }

  createPlayer(postData: { id: number, codeName: string }) {
    console.log(postData);
    this.http
      .post(this.baseUrl + "/players", postData)
      .subscribe(thePlayer => {this.loadPlayers()});
  }

  getPlayers(): Player[] {
    return this.players.slice();
  }

  loadPlayers() {
    this.players = [];
    this.http
      .get<Player[]>(this.baseUrl + "/players")
      .subscribe(aPlayer => {
        console.log(aPlayer);
        this.players.push(...aPlayer);
        this.playersChanged.emit(this.players.slice());
      });
  }
}
