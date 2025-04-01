export interface ChampionStats {
    name: string; // ex: "Lux", "Blitzcrank"
    image: string; // URL de l'image du champion
    games: number; // Nombre de parties jouées avec ce champion
    wins: number; // Nombre de victoires
    defeats: number; // Nombre de défaites
    winrate: number; // Taux de victoire (entre 0 et 1)
    kills: number; // Total des éliminations
    deaths: number; // Total des morts
    assists: number; // Total des assists
    kda: number; // Ratio KDA
  }