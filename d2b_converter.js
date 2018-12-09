byte = [];

function setup() {
  createCanvas(400, 100);
  decimalP = createDiv('');

  input = createInput();
  input.position(0,225);
}

function draw() {
  background(51);
  dec = decimalToBinary(input.value());
  decimalP.html(dec);

  let w = width / 8;
  for(let i = 0; i < dec.length; i++) {
    byte[i] = new Bit(w/2 + i*w,50,w-4);
    byte[i].setState(dec.charAt(i));
    byte[i].show()
  }
}

function decimalToBinary(val) {
  let bin = '';
  do {
    remain = parseInt(val) % 2;
    val = floor(parseInt(val) / 2);
    console.log(val);
    bin = String(remain) + bin;
  } while (val > 0);
  return bin
}
