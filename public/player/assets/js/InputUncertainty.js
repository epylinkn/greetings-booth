class InputUncertainty extends GenericScene {
  enter() {
    select('.input-uncertainty-demo').show()
  }

  leave() {
    select('.input-uncertainty-demo').hide()

    socket.emit('player_input_sync', this.xs)
  }

  setup() {
    this.xs = new Array(width)
    this.demo = true;
    this.demoInterval = 3000;
    this.lastDemoAt = 0;
  }

  draw() {
    background(colors.background)
    rect(0, height/2, width, 2)

    if (this.demo) {
      this.drawDemo();
    } else {
      this.drawLive();
    }
  }

  drawDemo() {
    let currentTime = millis()
    if (currentTime > this.lastDemoAt + this.demoInterval + 1000) {
      this.lastDemoAt = currentTime;
      noiseSeed(random(1000))
    }

    let progress = constrain((currentTime - this.lastDemoAt) / this.demoInterval, 0, 1);
    let limit = lerp(0, width, progress)

    fill('cyan');
    noStroke()
    let noiseReference;
    let yPoint;
    for (let i = 0; i < limit; i++) {
      let noiseVal = noise(2 + i / 500)
      if (i == 0) noiseReference = noiseVal;
      yPoint = height/2 + 600 * (noiseVal - noiseReference)
      ellipse(i, yPoint, 10, 10);
    }
    image(fingerImg, limit, yPoint - 50)
  }

  drawLive() {
    fill('orange');
    noStroke()

    for (let i = 0; i < this.xs.length; i++) {
      let y = this.xs[i];
      if (!y) continue;

      ellipse(i, this.xs[i], 10, 10);
    }
  }

  mousePressed() {
    this.demo = false;
  }

  touchMoved() {
    let x = constrain(mouseX, 0, width)
    let y = constrain(mouseY, 0, height)

    this.xs[x] = y;
  }
}
