const indexRouter = require('../../modules/index.js');

describe("usersController: ",(async () => {
    it('1', () => {
        expect(indexRouter).toBeDefined();
    })

    it('2', () => {
        let req = {
            body: 'hello',
        };
        
        let res = {
            sendCalledWith: '',
            send: function(arg) { 
                this.sendCalledWith = arg;
            }
        };
        indexRouter.all = jest.fn((path, func) => {
            func(req, res)
        });

        const spy = jest.spyOn(res, 'send');
        indexRouter.all('*', (req, res) => { res.send('Hello, it is News-API'); })

        expect(spy).toHaveBeenCalled();

        spy.mockRestore();

        expect(res.sendCalledWith).toEqual("Hello, it is News-API");
    })
}));