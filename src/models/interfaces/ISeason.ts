import type { ITeam } from './ITeam';
import type { MatchStage } from './MatchStage';

export interface ISeason {
  id: string;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: ITeam;
  stages: MatchStage[];
}
