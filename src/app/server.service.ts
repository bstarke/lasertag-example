import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "./player/player.model";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl: string = "http://localhost:8080"
  players: Player[] = [];

  constructor(private http: HttpClient) {
    this.loadPlayers();
  }

  createPlayer(postData: { codeName: string }) {
    this.http
      .post(this.baseUrl + "/players", postData)
      .subscribe();
  }

  getPlayers(): Player[] {
    return this.players;
  }

  loadPlayers() {
    this.http
      .get<Player[]>(this.baseUrl + "/players")
      .subscribe(aPlayer => {
        console.log(aPlayer);
        this.players.push(...aPlayer);
      });
  }
}
