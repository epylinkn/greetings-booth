class Prediction extends GenericScene {
  draw() {
    background(colors.background)

    if (leftPlayer.status == 'predicted') {
      displayLeftTitle('Waiting for your friend')
    } else {
      displayLeftTitle('Please follow the instructions\n at your Kiosk')
    }

    if (rightPlayer.status == 'predicted') {
      displayLeftTitle('Waiting for your friend')
    } else {
      displayRightTitle('Please follow the instructions\n at your Kiosk')
    }
  }
}
