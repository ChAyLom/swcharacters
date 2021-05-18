import { Response } from '../../entities';
import { range } from '../utils';

interface onePageFetcher<P> {
  (page?: number): Promise<P>
}

const allPagesFetch = async <P>(
  fetchByPage: onePageFetcher<Response<P[]>>
): Promise<P[]> => {
  const resp = await fetchByPage();
  const list: P[] = resp.results;
  const pagesAmount = Math.ceil(resp.count / resp.results.length) - 1;

  await Promise.all(range(pagesAmount).map(
    async page => {
      const resp = await fetchByPage(page + 2);
      resp.results.forEach(v => list.push(v));
    }
  ));

  return list;
};

export default allPagesFetch;