import NewsAPILoader from 'common/NewsAPILoader.js';

export default class AppController{
  constructor() {
    this.newsAPILoader = new NewsAPILoader();
  }

  getSources(callback) {
    this.newsAPILoader.sourcesReq(callback);
  }

  getNews(sources, callback) {
    this.newsAPILoader.newsReq(sources, callback);
  }
}