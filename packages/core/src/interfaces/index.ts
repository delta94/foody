export type FavorisTypes = string[];
export type PantriesTypes = string[];

export interface User {
  id: number;
  username: string;
  pantries: PantriesTypes;
  favoris: FavorisTypes;
}
