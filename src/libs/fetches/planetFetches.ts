import { Planet, Response } from '../../entities';
import allPagesFetch from './allPagesFetch';
import baseFetch from './baseFetch';

export const planetsFetcher = (
  page = 1,
): Promise<Response<Planet[]>> => (
  baseFetch('/api/planets/', { page: String(page) })
);

export const planetFetcher = (
  id: string,
): Promise<Planet> => (
  baseFetch(`/api/planets/${id}/`)
);

export const allPlanetsFetch = (): Promise<Planet[]> => (
  allPagesFetch(planetsFetcher)
);
