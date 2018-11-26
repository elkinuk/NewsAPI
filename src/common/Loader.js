export default class Loader {
  constructor(baseLink, settings) {
    this.baseLink = baseLink,
    this.settings = settings;
  }

  _load(args){
    (window.fetch) ? this._asyncLoad(args) : this._xmlHttpLoad(args);
  }

  getResp(props, callback = () => { console.error('No callback for GET response');}) {
    const method = 'GET';
    this._load({ method , props, callback });
  }

  postResp(props, callback = () => { console.error('No callback for POST response');}) {
    const method = 'POST';
    this._load({ method , props, callback });
  }

  _errorHandler(res) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        alert(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  createUrl({endpoint, options}){
    let urlOptions = Object
      .entries({ ...this.settings, ...options})
      .map(el => el.join('='))
      .join('&');
    return `${this.baseLink}${endpoint}?${urlOptions}`;
  }

  async _asyncLoad({method, callback, props}) {
    try{
      const res = await fetch(this.createUrl(props), { method });
      await this._errorHandler(res);
      callback(await res.json());
    } catch(err){ console.error(err); }
  }

  _fetchLoad({method, callback, props}) {
    fetch(this.createUrl(props), { method })
      .then(this._errorHandler)
      .then(res => res.json())
      .then(data => callback(data))
      .catch(err => console.error(err));
  }

  _xmlHttpLoad({method, callback, props}){
    this._customFetch(this.createUrl(props), { method })
      .then(data => callback(JSON.parse(data)))
      .catch(err => console.error(err));
  }

  _customFetch(url, obj){
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(obj.method || 'GET', url);
      if (obj.headers) {
        Object.keys(obj.headers).forEach(key => {
          xhr.setRequestHeader(key, obj.headers[key]);
        });
      }
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(obj.body);
    });
  }
}