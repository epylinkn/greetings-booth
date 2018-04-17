class Impression {
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
        displayLeftTitle('Please follow the instructions\n at your Kiosk')
        displayRightTitle('Please follow the instructions\n at your Kiosk')
    }
  }
}
