import type { CompetitionType } from './CompetitionType';

export interface ICompetition {
  id: number;
  name: string;
  code: string;
  type: CompetitionType;
  emblem: string;
}
