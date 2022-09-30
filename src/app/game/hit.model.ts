import {Player} from "../player/player.model";

export class Hit {
  constructor(public id: number, public tagger: Player, public tagged: Player) {
  }
}
