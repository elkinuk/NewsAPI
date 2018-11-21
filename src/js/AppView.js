class AppView {
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data) {
    this.news.draw(data.articles);
  }

  drawSources(data) {
    this.sources.draw(data.sources);
  }
}