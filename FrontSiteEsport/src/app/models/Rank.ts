// rank.ts
export interface Rank {
    queueType: string; // ex: "RANKED_FLEX_SR", "RANKED_SOLO_5x5"
    tier: string; // ex: "SILVER", "EMERALD", "IRON"
    rank: string; // ex: "III", "IV", "I"
    leaguePoints: number; // ex: 71, 87, 98
    wins: number; // ex: 9, 11, 4
    losses: number; // ex: 12, 10, 3
    veteran: boolean; // ex: false
    inactive: boolean; // ex: false
    freshBlood: boolean; // ex: true ou false
    hotStreak: boolean; // ex: false
  }