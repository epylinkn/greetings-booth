let socket = io('/conductor')
socket.on('connect', function() {
  console.log('Connected')
})

// NB. Manual dictionary b/c AFAIK there isn't a great way to get a
//     class reference from a string, e.g. get Title from "Title"
let classLookup = {
  Title: Title,
  Setup: Setup,
  Prediction: Prediction,
  Interaction: Interaction,
  InputUncertainty: InputUncertainty,
  Impression: Impression,
  SlowMotion: SlowMotion,
  Takeaway: Takeaway,
}

let mgr
let colors
let gameState = {}
let leftPlayerId
let rightPlayerId

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
  for (let key in classLookup) {
    mgr.addScene(classLookup[key])
  }

  mgr.showScene(Title)

  socket.on('scene', function(sceneName) {
    if (mgr.isCurrent(classLookup[sceneName])) return

    mgr.showScene(classLookup[sceneName])
  })

  socket.on('state_updated', function(updatedGameState) {
    gameState = updatedGameState
    console.log(gameState)

    for (let key in gameState) {
      if (gameState[key].player == 'left') {
        leftPlayerId = key
      } else {
        rightPlayerId = key
      }
    }
  })
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
    case ' ':
      mgr.showNextScene()
      break
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      let scene = Object.values(classLookup)[parseInt(key)]
      mgr.showScene(scene)
      break;
  }

  // dispatch via the SceneManager
  mgr.keyPressed()
}
