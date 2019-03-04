const newsController = require('../../modules/news/controlles.js');
const Controller = require('../../common/controller.js');

describe("newsController: ",(async () => {
    it('newsController is instance of Controller', () => {
        expect(newsController).toBeInstanceOf(Controller);
    })
}));