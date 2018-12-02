import Sources from 'sources/Sources.js';

export default class AppView {
  constructor() {
    this.sources = new Sources();
  }

  drawNewsSpiner(){
    const newsSpiner = document.querySelector('#newsSpinerTemp');
    const newsSpinerClone = (newsSpiner.content) ? newsSpiner.content.cloneNode(true).querySelector('.news__spinner') : newsSpiner.querySelector('.news__spinner').cloneNode(true);
    document.querySelector('.news').innerHTML = '';
    document.querySelector('.news').appendChild(newsSpinerClone);
  }

  async getNewsScript() {
    const { default: component } = await import(/* webpackChunkName: "News" */ '../news/News.js');
    return component;
  }

  drawNews(data) {
    this.getNewsScript().then(News => {
      this.news = new News();
      this.news.draw(data.articles);
    });
  }

  drawSources(data) {
    this.sources.draw(data.sources);
  }
}