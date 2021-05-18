import { Planet } from '../entities';

interface PlanetsResponse<P> {
  count: number,
  next: string | null,
  previous: string | null,
  results: P,
}

const baseUrl = process.env.API_URL || '';

async function baseFetchPattern(
  apiUrl: string,
  url: string,
  args?: Record<string, string>,
) {
  const apiMethodUrl = new URL(url, apiUrl);
  if (args) {
    Object.keys(args).forEach(
      arg => apiMethodUrl.searchParams.set(arg, args[arg])
    );
  }
  
  const resp = await fetch(apiMethodUrl.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    }
  });
  const data = await resp.json();
  return data;
}

export const planetsFetcher = (
  page = 1,
): Promise<PlanetsResponse<Planet[]>> => (
  baseFetchPattern(baseUrl, '/api/planets/', { page: String(page) })
);

export const planetFetcher = (
  id: string,
): Promise<Planet> => (
  baseFetchPattern(baseUrl, `/api/planets/${id}/`)
);
