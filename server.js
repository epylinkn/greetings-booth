//== Express setup
let port = process.env.PORT || 8000
let express = require('express')
let app = express()
let server = require('http')
  .createServer(app)
  .listen(port, function() {
    console.log('Server listening at port: ', port)
  })

app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/'))

let gameState = {}

let io = require('socket.io').listen(server)
let conductor = io.of('/conductor')
let player = io.of('/player')

conductor.on('connection', function(socket) {
  console.log('We have a new client: ' + socket.id)

  conductor.emit('state_updated', gameState)

  socket.on('scene', function(sceneName) {
    console.log('scene', sceneName)
    player.emit('scene', sceneName)
  })
})

player.on('connection', function(socket) {
  console.log('We have a new client: ' + socket.id)

  // NB. First to connect is left player
  if (Object.keys(gameState).length == 0) {
    gameState[socket.id] = {
      player: "left",
    }
  } else {
    gameState[socket.id] = {
      player: (Object.values(gameState)[0].player == 'left') ? 'right' : 'left',
    }
  }
  conductor.emit('state_updated', gameState)

  socket.on('disconnect', function() {
    delete gameState[socket.id]
    conductor.emit('state_updated', gameState)
  })

  socket.on('scene', function(sceneName) {
    console.log('scene', sceneName)
    conductor.emit('scene', sceneName)
  })

  socket.on('player_prediction', function(prediction) {
    let player = gameState[socket.id]

    player.predictions = {
      expectationSelf: prediction.expectationSelf,
      expectationFriend: prediction.expectationFriend
    }

    conductor.emit('state_updated', gameState)
  })

  socket.on('player_impressions', function(impressions) {
    // TODO

    let payload = {}

    conductor.emit('player_impressions', payload)
  })
})
