// matches-summary.ts
import { ChampionStats } from './ChampionStats';

export interface MatchesSummary {
  games: number; // Nombre total de parties jouées
  wins: number; // Nombre total de victoires
  defeats: number; // Nombre total de défaites
  winrate: number; // Taux de victoire global (entre 0 et 1)
  kills: number; // Total des éliminations
  deaths: number; // Total des morts
  assists: number; // Total des assists
  kda: number; // Ratio KDA global
  champions: ChampionStats[]; // Tableau des stats par champion
}