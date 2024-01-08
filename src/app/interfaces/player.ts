export interface Player {
  id: number;
  name: string;
  team: string;
  stadium: string;
  images: Images;
  points: number | undefined[];
  seasons: string[];
  trophies: Trophies;
  awards: Awards;
  nationality: string;
  badges: Badges;
}

export interface Images {
  shield: string;
  profile: string;
  badge: string;
  team_strip_front: string;
  team_strip_back: string;
  stadium: string;
}

export interface Trophies {
  liga_marca: any[];
  liga_futmondo: string[];
  champions: any[];
  europa_league: any[];
  fo_cup: any[];
  supercopa_europa: any[];
  supercopa_espana: string[];
}

export interface Awards {
  round_top: any[];
  rounds_regularity: string[];
}

export interface Badges {
  avg: number;
  ult: number;
  tit: number;
  alt: number;
  par: number;
  jor: number;
  baj: number;
}
