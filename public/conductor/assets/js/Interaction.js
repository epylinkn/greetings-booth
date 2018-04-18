class Interaction extends GenericScene {
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
        displaySplitTitle('On 3, JUMP AROUND\n and greet your friend')
        break

      case 4:
        displaySplitTitle('1...')
        break
      case 5:
        displaySplitTitle('2...')
        break
      case 6:
      case 7:
      case 8:
        displaySplitTitle('3!!!')
        break

      case 9:
        this.sceneManager.showNextScene()
    }
  }
}
