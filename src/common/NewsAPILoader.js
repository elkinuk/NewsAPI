import Loader from './Loader.js';
import Logger from './Logger.js';


export default class NewsAPILoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '67c1acd35f714c8da11288faf6e12bcf',
    }, new Logger());
  }

  sourcesReq(callback){
    this.getResp({ endpoint: 'sources' }, callback);
  }

  newsReq(sources, callback){
    this.getResp({
      endpoint: 'everything',
      options: { sources }
    }, callback);
  }
}