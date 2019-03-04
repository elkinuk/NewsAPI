import AppController from './AppController.js';
import AppView from './AppView.js';

import 'common/images.js';

export default class App {
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.currentSource;
  }

  showNews(e){
    let target = e.target;
    const sourcesContainer = e.currentTarget;

    while (target != sourcesContainer) {
      if (target.classList.contains('source__item')) {
        const sources = target.getAttribute('data-source-id');
        if (this.currentSource !== sources) {
          this.currentSource = sources;
          this.view.drawNewsSpiner();
          this.controller.getNews(target.getAttribute('data-source-id'), data => this.view.drawNews(data));
        }
      }
      target = target.parentNode;
    }
  }

  start() {
    document.querySelector('.sources')
      .addEventListener('click', (e) => { this.showNews(e); });

    this.controller.getSources(data => this.view.drawSources(data));
  }
}