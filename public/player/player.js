let socket = io('/player')
socket.on('connect', function() {
  console.log('Connected')
})

let mgr
let colors

function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textAlign(CENTER, CENTER)
  textFont(roboto)
  textSize(24)

  colors = {
    primary: color('#C0FFEE'),
    secondary: color('#FFCCC0'),
    background: color('#16161D'),
  }

  mgr = new SceneManager()
  // Preload scenes
  mgr.addScene(Title)
  mgr.addScene(Setup)
  mgr.addScene(Prediction)
  mgr.addScene(Interaction)
  mgr.addScene(Impression)
  mgr.addScene(SlowMotion)
  mgr.addScene(Takeaway)

  mgr.showScene(Title)
}

function draw() {
  mgr.draw()
}

function mousePressed() {
  mgr.mousePressed()
}

function keyPressed() {
  switch (key) {
    //== Scenes
    case '0':
      mgr.showScene(Debug)
      break
    case '1':
      mgr.showScene(Title)
      break
    case '2':
      mgr.showScene(Setup)
      break
    case '3':
      mgr.showScene(Prediction)
      break
    case '4':
      mgr.showScene(Interaction)
      break
    case '5':
      mgr.showScene(Impression)
      break
    case '6':
      mgr.showScene(SlowMotion)
      break
    case '7':
      mgr.showScene(Takeaway)
      break
    case ' ':
      mgr.showNextScene()
      break
  }

  // dispatch via the SceneManager
  mgr.keyPressed()
}
