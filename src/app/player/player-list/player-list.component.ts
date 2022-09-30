import { Component, OnInit } from '@angular/core';
import {Player} from "../player.model";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [
    new Player(1, 'whatthef'),
    new Player(2, 'ohell')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
