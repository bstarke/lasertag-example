import {Component, Input, OnInit} from '@angular/core';
import {Team} from "./team.model";
import {Player} from "../player/player.model";
import {ServerService} from "../server.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() teams: Team[] = [];

  constructor(private service: ServerService) { }

  ngOnInit(): void {
    this.teams = this.service.getTeams();
    this.service.teamsChanged.subscribe((teams: Team[]) => this.teams = teams);
  }

}
