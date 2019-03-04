const usersController = require('../../modules/users/controlles.js');
const Controller = require('../../common/controller.js');

describe("usersController: ",(async () => {
    it('usersController is instance of Controller', () => {
        expect(usersController).toBeInstanceOf(Controller);
    })
}));