class Impression extends GenericScene {
  setup() {
    this.constructedAt = second()
  }

  draw() {
    background(colors.background)

    let elapsedTime = second() - this.constructedAt
    switch (elapsedTime) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        displayTitle('That was interesting.\n What happened?')
        break
      default:
        if (
          gameState[leftPlayerId].impressions &&
          gameState[rightPlayerId].impressions
        ) {
          this.sceneManager.showNextScene()
        }

        if (gameState[leftPlayerId].impressions) {
          displayLeftTitle('Waiting for your friend')
        } else {
          displayLeftTitle('Please follow the instructions\n at your Kiosk')
        }

        if (gameState[rightPlayerId].impressions) {
          displayRightTitle('Waiting for your friend')
        } else {
          displayRightTitle('Please follow the instructions\n at your Kiosk')
        }
    }
  }
}
