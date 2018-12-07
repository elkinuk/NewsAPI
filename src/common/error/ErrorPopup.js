export default class ErrorPopup{
  show(res){ //TODO: create html for error popup
    alert(`Sorry, but there is ${res.status} error: ${res.statusText}`);
  }
}