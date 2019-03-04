class Controller{
  constructor(facade){
    this.facade = facade;
  }
  // istanbul ignore next line
  _errorHandling(res, err){
    res.locals.message = err.message;
    res.locals.status = err.status || 500;
  
    res.status(err.status || 500);
    res.render('error');
  }

  // istanbul ignore next line
  _callback(err, data, res){
    if (err) this._errorHandling(res, err);
    res.send(data || 'Successfully completed');
  }

  getAllData(req, res){
    this.facade
      .find()
      .exec((...args) => { this._callback(...args, res) });
  }

  getDataByID(req, res){
    this.facade
      .findById(req.params.id)
      .exec((...args) => { this._callback(...args, res) });
  }

  postData(req, res){
    this.facade
      .create(req.body, (...args) => { this._callback(...args, res) });
  }

  putDataByID(req, res){
    this.facade
      .updateById(req.params.id, req.body)
      .exec((...args) => { this._callback(...args, res) });
  }

  delDataByID(req, res){
    this.facade
      .deleteById(req.params.id)
      .exec((...args) => { this._callback(...args, res) });
  }
}

module.exports = Controller;