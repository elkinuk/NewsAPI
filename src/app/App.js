import AppController from './AppController.js';
import AppView from './AppView.js';

import 'common/images.js';

export default class App {
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document.querySelector('.sources')
      .addEventListener('click', e => {
        let target = e.target;
        const sourcesContainer = e.currentTarget;

        while (target != sourcesContainer) {
          if (target.classList.contains('source__item')) {
            this.view.drawNewsSpiner();
            this.controller.getNews(target.getAttribute('data-source-id'), data => this.view.drawNews(data));
          }
          target = target.parentNode;
        }
      });
    this.controller.getSources(data => this.view.drawSources(data));
  }
}