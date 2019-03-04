import HTTPError from './HTTPError.js';
let errorControllerInstance;

export default class ErrorController{
  constructor(){
    if( errorControllerInstance ){ return errorControllerInstance; }
    errorControllerInstance = this;
  }

  async _getErrorPopupScript() {
    const { default: component } = await import(/* webpackChunkName: "ErrorPopup" */ './ErrorPopup.js');
    return component;
  }

  showErrorPopup(res){
    this._getErrorPopupScript()
      .then(ErrorPopup => {
        new ErrorPopup().show(res);
      });
  }

  HTTPerrorHandler(res) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404){
        throw new HTTPError(res.status, res.statusText);
      }
    }
    return res;
  }
}