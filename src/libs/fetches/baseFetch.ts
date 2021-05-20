import HttpError from './HttpError';

const apiUrl = process.env.API_URL || '';

async function baseFetch<P>(
  url: string,
  args?: Record<string, string>,
): Promise<P> {
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

  if (!resp.ok) throw new HttpError(resp);

  const data = await resp.json();
  return data;
}

export default baseFetch;