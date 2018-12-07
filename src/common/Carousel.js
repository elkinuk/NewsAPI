export default class Carousel {
  constructor(){
    this.lastValue = 0;
    this.start = 0;
    this.end = 0;
  }

  startMoving(e){
    this.start = e.x || e.changedTouches[0].pageX;
  }

  endMoving(){
    this.lastValue += (this.end - this.start);
  }

  move(e, isMobile){
    if(e.buttons === 1 || isMobile){
      this.end = e.x || e.changedTouches[0].pageX;
      e.currentTarget.style.transform = `translateX(${this.lastValue + (this.end - this.start)}px)`;
    }
  }

  init(el){
    if(window.mobileCheck()){
      el.addEventListener('touchstart', (e) => { this.startMoving(e); });
      el.addEventListener('touchmove', (e) => { this.move(e, true); });
      el.addEventListener('touchend', (e) => { this.endMoving(e); });
      return;
    }
    el.addEventListener('mousedown', (e) => { this.startMoving(e); });
    el.addEventListener('mousemove', (e) => { this.move(e, false); });
    el.addEventListener('mouseup', (e) => { this.endMoving(e); });
  }

}