import Loader from './Loader.js';

export default class NewsAPILoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '67c1acd35f714c8da11288faf6e12bcf',
    });
  }

  sourcesReq(callback){
    super.getResp({ endpoint: 'sources' }, callback);
  }

  newsReq(sources, callback){
    super.getResp({
      endpoint: 'everything',
      options: { sources }
    }, callback);
  }
}