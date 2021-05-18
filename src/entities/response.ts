
export interface Response<P> {
  count: number,
  next: string | null,
  previous: string | null,
  results: P,
}
