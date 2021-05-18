import { People, Response } from '../../entities';
import allPagesFetch from './allPagesFetch';
import baseFetch from './baseFetch';

const peoplesFetcher = (page = 1) => (
  baseFetch<Response<People[]>>(
    '/api/people/',
    { page: String(page) },
  )
);

export const allPeoplesFetcher = (): Promise<People[]> => (
  allPagesFetch(peoplesFetcher)
);
