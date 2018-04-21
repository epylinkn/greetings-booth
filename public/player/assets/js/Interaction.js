class Interaction extends GenericScene {
  enter() {
    document.activeElement.blur()
  }

  draw() {
    background(colors.background)

    displayTitle('Watch the Conductor')
  }
}
