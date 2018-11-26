import Sources from 'sources/Sources.js';

export default class AppView {
  constructor() {
    this.sources = new Sources();
  }

  async getNews() {
    const { default: component } = await import(/* webpackChunkName: "News" */ '../news/News.js');
    return component;
  }

  drawNews(data) {
    this.getNews().then(News => {
      this.news = new News();
      this.news.draw(data.articles);
    });
  }

  drawSources(data) {
    this.sources.draw(data.sources);
  }
}