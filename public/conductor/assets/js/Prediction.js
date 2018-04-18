class Prediction extends GenericScene {
  draw() {
    background(colors.background)

    if (gameState[leftPlayerId].predictions && gameState[rightPlayerId].predictions) {
      this.sceneManager.showNextScene()
    }

    if (gameState[leftPlayerId].predictions) {
      displayLeftTitle('Waiting for your friend')
    } else {
      displayLeftTitle('Please follow the instructions\n at your Kiosk')
    }

    if (gameState[rightPlayerId].predictions) {
      displayRightTitle('Waiting for your friend')
    } else {
      displayRightTitle('Please follow the instructions\n at your Kiosk')
    }
  }
}
