import { customFetch } from './customPolyfils.js';

export default class Loader {
  constructor(baseLink, settings) {
    this.baseLink = baseLink,
    this.settings = settings;
    this._load = this.setLogger();
  }

  async _getErrorScript() {
    const { default: component } = await import(/* webpackChunkName: "ErrorHandler" */ './ErrorHandler.js');
    return component;
  }

  _showError(res){
    this._getErrorScript()
      .then(ErrorHandler => {
        this.error = new ErrorHandler();
        this.error.show(res);
      });
  }

  _errorHandler(res) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404){
        this._showError(res);
        throw Error(res.statusText);
      }
    }
    return res;
  }

  _loadData(args){
    (window.fetch) ? this._asyncLoad(args) : this._xmlHttpLoad(args);
  }

  setLogger(){
    return new Proxy(this._loadData, {
      apply: function(target, thisArg, argumentsList) {
        const data = argumentsList[0];
        console.log(`${data.requestOptions.method} request:${JSON.stringify(data.props)}`);
        return target.apply(thisArg, argumentsList);
      }
    });
  }

  getResp(props, callback) {
    const requestOptions = { method: 'GET' };
    this._load({ requestOptions , props, callback });
  }

  postResp(props, callback) {
    const requestOptions = { method: 'POST' };
    this._load({ requestOptions , props, callback });
  }

  delResp(props, body, callback) {
    const requestOptions = { method: 'DELETE', body: body };
    this._load({ requestOptions , props, callback });
  }

  pushResp(props, body, callback) {
    const requestOptions = { method: 'PUSH', body: body };
    this._load({ requestOptions , props, callback });
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
      await this._errorHandler(res);
      callback(await res.json());
    } catch(err){ console.error(err); }
  }

  _fetchLoad({requestOptions, callback, props}) {
    fetch(this._createUrl(props), requestOptions)
      .then(this._errorHandler)
      .then(res => res.json())
      .then(data => callback(data))
      .catch(err => console.error(err));
  }

  _xmlHttpLoad({requestOptions, callback, props}){
    customFetch(this._createUrl(props), requestOptions)
      .then(data => callback(JSON.parse(data)))
      .catch(err => console.error(err));
  }
}