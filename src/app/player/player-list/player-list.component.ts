import { Component, OnInit } from '@angular/core';
import {Player} from "../player.model";
import {ServerService} from "../../server.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];

  constructor(private service: ServerService) { }

  ngOnInit(): void {
    this.players = this.service.getPlayers();
  }

}
