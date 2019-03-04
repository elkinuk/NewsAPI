const Controller = require('./../../common/controller.js');
const Facade = require('./facade.js');

class NewsController extends Controller{
  constructor(facade){
    super(facade);
  }
}

module.exports = new NewsController(Facade);