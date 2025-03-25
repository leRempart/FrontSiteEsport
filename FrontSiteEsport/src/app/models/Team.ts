import {Player} from "./Player";

export interface Team {
  id: number;
  gameCode: string;
  gameLabel: string;
  name: string;
  players: Player[];
}
