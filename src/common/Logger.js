export default class Logger{
  create(metod, callback){
    return new Proxy(metod, {
      apply: function(target, thisArg, argumentsList) {
        callback(argumentsList[0]);
        return target.apply(thisArg, argumentsList);
      }
    });
  }
}