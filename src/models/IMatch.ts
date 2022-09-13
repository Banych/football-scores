import type { ITeam } from "./ITeam";

export interface IMatch {
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
}