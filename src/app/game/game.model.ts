import {Team} from "../team/team.model";
import {Hit} from "./hit.model";

export class Game {
  constructor(public id:number, public teams:Team[], public hits: Hit[]) {
  }
}
