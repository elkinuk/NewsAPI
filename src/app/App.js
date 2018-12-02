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
        this.view.drawNewsSpiner();
        this.controller.getNews(e, data => this.view.drawNews(data));
      });
    this.controller.getSources(data => this.view.drawSources(data));
  }
}