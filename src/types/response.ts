import {PersonData} from './person';

export type ResponseData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PersonData[];
};
