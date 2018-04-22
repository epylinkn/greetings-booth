class InputEmoji extends GenericScene {
  enter() {
    select('.input-emoji-demo').show()
  }

  leave() {
    select('.input-emoji-demo').hide()

    socket.emit('player_input_emoji', this.xs)
  }

  setup() {
    this.xs = new Array(width)
    this.demo = true;
    this.demoInterval = 3000;
    this.lastDemoAt = 0;
  }

  draw() {
    background(colors.background)
    emojiDemo();
  }

  emojiDemo() {
    let currentTime = millis()
    if (currentTime > this.lastDemoAt + this.demoInterval + 1000) {
      this.lastDemoAt = currentTime;
      noiseSeed(random(1000))
    }

    let progress = constrain((currentTime - this.lastDemoAt) / this.demoInterval, 0, 1);
    let limit = lerp(0, width, progress)

    let currentTime = millis()
    if (currentTime > lastDemoAt + demoInterval + 1000) {
      lastDemoAt = currentTime;
      noiseSeed(random(1000))
    }

    let progress = constrain((currentTime - lastDemoAt) / demoInterval, 0, 1);
    let limit = lerp(0, width, progress)

    strokeWeight(1);
    textSize(32);

    let x = 0;
    let y = 30;
    let emojiCount = 0;

    for(let i = 0; i < emojis.length; i++) {
      if (emojiCount === 20) {
        x = 0;
        y += 32;
        emojiCount = 0;
      }

      text(emojis[i], x, y);

      emojiCount++;
      x += 32;
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

let emojis = ["😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]
