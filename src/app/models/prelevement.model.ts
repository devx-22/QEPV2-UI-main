export interface Programme {
  code: string;
  intitule: string;
  annee: string;
}

export interface Prelevement {
  id: number;
  circuit: string;
  dp: string;
  programme: string;
  type: string;
  date: string;
  planifies: number;
  realises: number;
  termines: number;
  avancement?: number;
}
