const Controller = require('./../../common/controller.js');
const Facade = require('./facade.js');

class UsersController extends Controller{
  constructor(facade){
    super(facade);
  }
}

module.exports = new UsersController(Facade);