const Facade = require('../../common/facade.js');
const mongoose = require('mongoose');

describe("Facade: ",(async () => {
  const test = new mongoose.Schema({
    title: String,
    author: String,
    content: String
  });

  let model;
  let facade;

  const testItems = [{
    "title": "String1",
    "author": "String1",
    "content": "String1"
  },
  {
    "title": "String2",
    "author": "String2",
    "content": "String2"
  }]

  beforeEach(async () => {
    model = mongoose.model('test', test);
    facade = new Facade(model);
  })

  it("1. Check model", () => {
    expect(new model()._id).toBeDefined();
  });

  it("2. Find", async () => {
    const spy = jest.spyOn(model, 'find');
    facade.find();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("3. FindOne", () => {
    const spy = jest.spyOn(model, 'findOne');
    facade.findOne(testItems[0]);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("4. FindById", () => {
    const spy = jest.spyOn(model, 'findById');
    facade.findById(1);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("5. UpdateById", () => {
    const spy = jest.spyOn(model, 'findByIdAndUpdate');
    facade.updateById(1, {author: testItems[1].author });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("6. deleteById", async () => {
    const spy = jest.spyOn(model, 'findByIdAndDelete');
    facade.deleteById(1);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();;
  });
}))