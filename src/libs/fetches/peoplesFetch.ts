import { People, Response } from '../../entities';
import { range } from '../utils';
import baseFetch from './baseFetch';

/**
 * Load all peoples at once is necessary,
 * because i need to filter people by his homeworld,
 * and swapi doesn't provide search or filter parameter for
 * homeworld field of people entity
 */
export const allPeoplesFetcher = async (): Promise<People[]> => {
  const peoples: People[] = [];
  const resp = await baseFetch<Response<People[]>>('/api/people/');
  const pagesAmount = Math.trunc(resp.count / resp.results.length) + 1;

  await Promise.all(range(pagesAmount).map(
    async page => {
      const resp = await baseFetch<Response<People[]>>(
        '/api/people/',
        { page: String(page + 1) },
      );
      resp.results.forEach(people => peoples.push(people));
    }
  ));

  return peoples;
};
