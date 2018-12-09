class Bit {

  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.diameter = d;
    this.state = false;
  }

  toggle(x,y) {
    let d = dist(x,y,this.x,this.y);
    if (d < this.diameter/2) {
      this.state = !this.state
    }
  }

  show() {
    stroke(255);
    if(this.state) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(this.x, this.y, this.diameter);
  }

  setState(s) {
    this.state = Boolean(parseInt(s));
  }

}
