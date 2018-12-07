export default class HTTPError extends Error {

  constructor(status, message){
    super();
    this.status = status;
    this.statusText = message;
    this.name = 'HTTPError';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error()).stack;
    }
  }
}
