export type ApiResponse<T> = T | null;

export interface ChampionSpell {
  id: string;
  name: string;
  description: string;
}

export interface ChampionData {
  data: {
    id: string;
    name: string;
    title: string;
    spells: ChampionSpell[];
  };
}
