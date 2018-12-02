import NewsAPILoader from 'common/NewsAPILoader.js';

export default class AppController extends NewsAPILoader {
  constructor() {
    super();
    this.currentSource;
  }

  getSources(callback) {
    super.getResp({ endpoint: 'sources' }, callback);
  }

  getNews(sources, callback) {
    if (this.currentSource !== sources) {
      this.currentSource = sources;
      super.getResp({
        endpoint: 'everything',
        options: { sources }
      }, callback);
    }
    return;
  }
}