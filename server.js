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

let io = require('socket.io').listen(server)
let conductor = io.of('/conductor')
let player = io.of('/player')

conductor.on('connection', function(socket) {
  console.log('We have a new client: ' + socket.id)

  socket.on('disconnect', function() {
    io.sockets.emit('disconnected', socket.id)
  })

  socket.on('scene', function(sceneName) {
    console.log('scene', sceneName)
    player.emit('scene', sceneName)
  })
})

player.on('connection', function(socket) {
  console.log('We have a new client: ' + socket.id)

  socket.on('disconnect', function() {
    io.sockets.emit('disconnected', socket.id)
  })

  socket.on('scene', function(sceneName) {
    console.log('scene', sceneName)
    conductor.emit('scene', sceneName)
  })

  socket.on('player_predictions', function(prediction) {
    // TODO

    let payload = {}

    conductor.emit('player_predictions', payload)
  })

  socket.on('player_impressions', function(impressions) {
    // TODO

    let payload = {}

    conductor.emit('player_impressions', payload)
  })
})
