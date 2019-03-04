const Facade = require('./../../common/facade.js');
const model = require('./repository.js');

class UsersFacade extends Facade {
    constructor() {
      super(model);
    }
  }
  
module.exports = new UsersFacade();
  