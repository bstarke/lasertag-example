import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "./player/player.model";
import {Team} from "./team/team.model";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl: string = "http://localhost:8080"
  players: Player[] = [];
  teams: Team[] = [];
  playersChanged = new EventEmitter<Player[]>();
  teamsChanged = new EventEmitter<Team[]>();

  constructor(private http: HttpClient) {
    this.loadPlayers();
    this.loadTeams();
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

  getTeams(): Team[] {
    return this.teams.slice();
  }

  loadPlayers() {
    this.players = [];
    this.http
      .get<Player[]>(this.baseUrl + "/players")
      .subscribe(aPlayer => {
        this.players.push(...aPlayer);
        this.playersChanged.emit(this.players.slice());
      });
  }

  loadTeams() {
    this.players = [];
    this.http
      .get<Team[]>(this.baseUrl + "/teams")
      .subscribe(theTeams => {
        this.teams.push(...theTeams);
        this.teamsChanged.emit(this.teams.slice());
      });
  }
}
