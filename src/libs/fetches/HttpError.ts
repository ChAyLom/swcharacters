
class HttpError extends Error {
  response: Response;

  constructor(response: Response) {
    super('Http error');
    this.response = response;
  }
}

export default HttpError;