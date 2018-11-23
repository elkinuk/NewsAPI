export default class News {
  constructor() {
    this.state;
  }

  set _newState(newState) {
    this.state = newState;
  }

  createItem(newsClone, item, i){
    if (i % 2) newsClone.classList.add('alt');

    newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
    newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
    newsClone.querySelector('.news__meta-date').textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

    newsClone.querySelector('.news__description-title').textContent = item.title;
    newsClone.querySelector('.news__description-source').textContent = item.source.name;
    newsClone.querySelector('.news__description-content').textContent = item.description;
    newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

    return newsClone;
  }

  draw(data) {
    this._newState = data;
    const newsCount = (data.length >= 10) ? 10 : data.length;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp');
    const news = document.querySelector('.news');

    for (let i = 0; i < newsCount; i++) {
      const newsClone = (newsItemTemp.content) ? newsItemTemp.content.cloneNode(true).querySelector('.news__item') : newsItemTemp.querySelector('.news__item').cloneNode(true);
      fragment.appendChild(this.createItem(newsClone, data[i], i));
    }

    news.innerHTML = '';
    news.appendChild(fragment);
  }
}