const Controller = require('../../common/controller.js');
const Facade = require('../../common/facade.js');
const mongoose = require('mongoose');

describe("Controller test: ",(() => {
  const test = new mongoose.Schema({
    title: String,
    author: String,
    content: String
  });

  let model;
  let facade;
  
  describe("Controller: ",(() => {
    beforeEach(async () => {
      model = mongoose.model('test', test);
      facade =  new Facade(model);
      controller = new Controller(facade);
      controller._errorHandling = jest.fn();
      controller._callback = jest.fn();
    })

    it("1. postData", () => {
      const spy = jest.spyOn(facade, 'create');
      controller.postData({body: {}});

      expect(spy).toHaveBeenCalled();

      spy.mockRestore();
    })

    it("2. getAllData", () => {
      const spy = jest.spyOn(facade, 'find');
      controller.getAllData();

      expect(spy).toHaveBeenCalled();

      spy.mockRestore();
    })

    it("3. getDataByID", () => {
      const spy = jest.spyOn(facade, 'findById');
      controller.getDataByID({params: { id: 1}});

      expect(spy).toHaveBeenCalled();

      spy.mockRestore();
    })

    it("4. putDataByID", () => {
      const spy = jest.spyOn(facade, 'updateById');
      controller.putDataByID({params: { id: 1}, body: {}});

      expect(spy).toHaveBeenCalled();
      
      spy.mockRestore();
    })

    it("5. delDataByID", () => {
      const spy = jest.spyOn(facade, 'deleteById');
      controller.delDataByID({params: { id: 1}});

      expect(spy).toHaveBeenCalled();

      spy.mockRestore();
    })

    it("6. _callback", () => {
      expect(jest.isMockFunction(controller._callback)).toBeTruthy();
    })

    it("7. _errorHandling", () => {
      expect(jest.isMockFunction(controller._errorHandling)).toBeTruthy();
    })

    it("8. _callback exist", () => {
      expect(controller._callback).toBeDefined()
    })

    it("9. _errorHandling exist", () => {
      expect(controller._errorHandling).toBeDefined()
    })
  }))

  describe("Facade: ",(() => {
    let req = {
      body: {},
    };
  
    let res = {
      sendCalledWith: '',
      send: function(arg) { 
          this.sendCalledWith = arg;
    }
  };
  
    beforeEach(async () => {
      model = mongoose.model('test', test);
      facade =  new Facade(model);
  
      controller = new Controller(facade);
      controller._errorHandling = jest.fn();
    })
  
    it("10. _callback call _errorHandling", () => {
      const spy = jest.spyOn(controller, '_errorHandling');
      controller._callback(true, req.body, res);
  
      expect(spy).toHaveBeenCalled();
  
      spy.mockRestore();
    })
  
    it("11. _callback call res.send", () => {
      const spy = jest.spyOn(res, 'send');
      controller._callback(false, req.body, res);
  
      expect(spy).toHaveBeenCalled();
  
      spy.mockRestore();
    })

    it("12. _callback call res.send as expected", () => {
      controller._callback(false, {body: 'Hello'}, res);
  
      expect(res.sendCalledWith).toEqual({body: 'Hello'});
    })
  }))
}))
