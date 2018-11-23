export default class Sources {
  constructor() {
    this.state;
  }

  set _newState(newState) {
    this.state = newState;
  }

  createItem(sourceClone, item){
    sourceClone.querySelector('.source__item-name').textContent = item.name;
    sourceClone.setAttribute('data-source-id', item.id);
    return sourceClone;
  }

  draw(data) {
    this._newState = data;
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp');
    const sources = document.querySelector('.sources');

    for (let i = 0; i < data.length; i++) {
      const sourceClone = (sourceItemTemp.content) ? sourceItemTemp.content.cloneNode(true).querySelector('.source__item') : sourceItemTemp.querySelector('.source__item').cloneNode(true);
      fragment.appendChild(this.createItem(sourceClone, data[i]));
    }

    sources.innerHTML = '';
    sources.appendChild(fragment);
  }
}