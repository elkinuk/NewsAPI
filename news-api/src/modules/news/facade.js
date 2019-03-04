const Facade = require('./../../common/facade.js');
const model = require('./repository.js');

class NewsFacade extends Facade {
    constructor() {
      super(model);
    }
  }
  
module.exports = new NewsFacade();
  