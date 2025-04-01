// player.ts
import { MatchesSummary } from './MatchesSummary';
import { Rank } from './Rank';

export interface Player {
  gameName: string; // ex: "NOCDG", "JR Smooth"
  tagline: string; // ex: "EUW", "1150", "666"
  puuid: string | null; // ex: null (peut être une chaîne ou null)
  summonerLevel: number; // ex: 302, 383, 180
  ranks: Rank[]; // Tableau de rangs
  matchesSummary: MatchesSummary | null;
  showSummary:boolean // Peut être null ou un objet complet
  }