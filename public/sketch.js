let mgr

function preload() {
  roboto = loadFont('assets/fonts/RobotoMono.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  textAlign(CENTER, CENTER)
  textFont(roboto)
  textSize(24)

  mgr = new SceneManager()
  // Preload scenes
  mgr.addScene(Debug)
  mgr.addScene(Title)

  mgr.showScene(Debug)
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
  }

  // dispatch via the SceneManager
  mgr.keyPressed()
}
