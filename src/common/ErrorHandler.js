let errorHandlerInstance;

export default class ErrorHandler{
  constructor(){
    if( errorHandlerInstance ){ return errorHandlerInstance; }
    errorHandlerInstance = this;
  }

  show(res){
    alert(`Sorry, but there is ${res.status} error: ${res.statusText}`);
  }
}