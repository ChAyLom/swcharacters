import { People } from '../../entities';
import baseFetch from './baseFetch';

export const peopleFetch = (id: string): Promise<People> => (
  baseFetch<People>(
    `/api/people/${id}/`
  )
);