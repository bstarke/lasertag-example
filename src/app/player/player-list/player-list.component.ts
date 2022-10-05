import {Component, OnInit} from '@angular/core';
import {Player} from "../player.model";
import {ServerService} from "../../server.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  newId: number | undefined;
  newCodeName: string = "";
  players: Player[] = [];

  constructor(private service: ServerService) { }

  ngOnInit(): void {
    this.players = this.service.getPlayers();
    this.service.playersChanged.subscribe((players: Player[]) => this.players = players);
  }

  addPlayer() {
    if(this.newId !== undefined && this.newCodeName.length > 0) {
      this.service.createPlayer({id: this.newId, codeName: this.newCodeName})
      this.newId = undefined;
      this.newCodeName = "";
    }
  }
}
