import {Component, Input, OnInit} from '@angular/core';
import {Player} from "./player.model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
