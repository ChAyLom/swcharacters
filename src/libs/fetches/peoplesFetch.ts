import { People, Response } from '../../entities';
import baseFetch from './baseFetch';

export const allPeoplesFetcher = async (): Promise<People[]> => {
  let peoples: People[] = [];
  let resp: Response<People[]>;
  let page = 1;
  do {
    resp = await baseFetch(
      '/api/people/',
      { page: String(page++) },
    );

    peoples = [
      ...peoples,
      ...resp.results,
    ];
  } while (resp.next !== null);
  return peoples;
};
