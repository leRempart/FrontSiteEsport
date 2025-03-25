import { Component, OnInit } from '@angular/core';
import {Team} from "../../models/Team";

@Component({
  selector: 'app-teams',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  teams: Team[] = [
    {
      id: 1,
      gameCode: "lol",
      gameLabel: "League of Legends",
      name: "Shadow Assassins",
      players: [
        { gameName: "BESTTEEMOEUW", puuid: "abcd1234" },
        { gameName: "CORENTIN LA FRAUDE", puuid: "efgh5678" },
        { gameName: "JackDanielInTheGosier", puuid: "ijkl9012" },
        { gameName: "BRYANLEGOAT", puuid: "mnop3456" },
        { gameName: "NOCDECHET", puuid: "qrst7890" }
      ]
    },
{
  id: 2,
  gameCode: "lol",
  gameLabel: "League of Legends",
  name: "Crystal Guardians",
  players: [
    { gameName: "LightWarden", puuid: "uvwx1234" },
    { gameName: "CrystalMage", puuid: "yzab5678" },
    { gameName: "PrismKnight", puuid: "cdef9012" },
    { gameName: "GemSentry", puuid: "ghij3456" },
    { gameName: "RadiantShield", puuid: "klmn7890" }
  ]
},
{
  id: 3,
    gameCode: "lol",
  gameLabel: "League of Legends",
  name: "Void Reapers",
  players: [
  { gameName: "VoidWalker", puuid: "opqr1234" },
  { gameName: "DeathBringer", puuid: "stuv5678" },
  { gameName: "AbyssLord", puuid: "wxyz9012" },
  { gameName: "DarkHerald", puuid: "abcd3456" },
  { gameName: "NullStriker", puuid: "efgh7890" }
]
},
{
  id: 4,
    gameCode: "lol",
  gameLabel: "League of Legends",
  name: "Flame Champions",
  players: [
  { gameName: "FireSoul", puuid: "ijkl1234" },
  { gameName: "BlazeMaster", puuid: "mnop5678" },
  { gameName: "EmberKing", puuid: "qrst9012" },
  { gameName: "InfernoRage", puuid: "uvwx3456" },
  { gameName: "PyreLord", puuid: "yzab7890" }
]
},
{
  id: 5,
    gameCode: "lol",
  gameLabel: "League of Legends",
  name: "Storm Riders",
  players: [
  { gameName: "ThunderHub", puuid: "cdef1234" },
  { gameName: "WindStriker", puuid: "ghij5678" },
  { gameName: "LightningAce", puuid: "klmn9012" },
  { gameName: "StormCaller", puuid: "opqr3456" },
  { gameName: "GaleForce", puuid: "stuv7890" }
]
},
{
  id: 6,
    gameCode: "lol",
  gameLabel: "League of Legends",
  name: "Iron Legion",
  players: [
  { gameName: "SteelFist", puuid: "wxyz1234" },
  { gameName: "MetalGuard", puuid: "abcd5678" },
  { gameName: "IronClad", puuid: "efgh9012" },
  { gameName: "ForgeMaster", puuid: "ijkl3456" },
  { gameName: "TitanWall", puuid: "mnop7890" }
]
}
];

  constructor() { }

  ngOnInit(): void {
    // Vous pouvez ici appeler votre API au lieu d'utiliser les mock data
  }
}
