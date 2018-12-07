import { customFetch } from './customPolyfils.js';
import ErrorController from './error/ErrorController.js';

export default class Loader {
  constructor(baseLink, settings, logger) {
    this.baseLink = baseLink,
    this.settings = settings;
    this.error = new ErrorController();
    if(logger) this._load = this._setLogger(logger);

    this.getResp = this.requestsFactory('GET');
    this.postResp = this.requestsFactory('POST');
  }

  _setLogger(logger){
    const callback = (data) =>{
      console.log(`${data.requestOptions.method} request:${JSON.stringify(data.props)}`);
    };
    return logger.create(this._load, callback);
  }

  _load(args){
    return (window.fetch) ? this._asyncLoad(args) : this._xmlHttpLoad(args);
  }

  requestsFactory(method){
    switch(method){
    case 'GET':{
      return (props, callback) =>{
        const requestOptions = { method: 'GET' };
        this._load({ requestOptions , props, callback });
      };
    }
    case 'POST':{
      return (props, callback) =>{
        const requestOptions = { method: 'POST' };
        this._load({ requestOptions , props, callback });
      };
    }
    case 'DELETE':{
      return (props, body, callback) =>{
        const requestOptions = { method: 'DELETE', body: body };
        this._load({ requestOptions , props, callback });
      };
    }
    case 'PUSH':{
      return (props, body, callback) =>{
        const requestOptions = { method: 'PUSH', body: body };
        this._load({ requestOptions , props, callback });
      };
    }
    }
  }
  _createUrl({endpoint, options}){
    let urlOptions = Object
      .entries({ ...this.settings, ...options})
      .map(el => el.join('='))
      .join('&');
    return `${this.baseLink}${endpoint}?${urlOptions}`;
  }

  async _asyncLoad({requestOptions, callback, props}) {
    try{
      const res = await fetch(this._createUrl(props), requestOptions);
      await this.error.HTTPerrorHandler(res);
      callback(await res.json());
    } catch(err){ (err.status) ? this.error.showErrorPopup(err) : console.error(err);}
  }

  _xmlHttpLoad({requestOptions, callback, props}){
    customFetch(this._createUrl(props), requestOptions)
      .then(data => callback(JSON.parse(data)))
      .catch(err => (err.status) ? this.error.showErrorPopup(err) : console.error(err));
  }
}