class Facade {
  constructor(Model) {
    this.Model = Model;
  }

  async create(body, callback) {
    const model = await new this.Model(body);
    return model.save(callback);
  }

  find(...args) {
    return this.Model.find(...args);
  }

  findOne(...args) {
    return this.Model.findOne(...args);
  }

  findById(...args) {
    return this.Model.findById(...args);
  }

  updateById(...args) {
    return this.Model.findByIdAndUpdate(...args);
  }

  deleteById(...args) {
    return this.Model.findByIdAndDelete(...args);
  }
}

module.exports = Facade;
