class Prediction extends GenericScene {
  enter() {
    super.enter()

    if (!this.prediction_submitted) blockKeypress = true
  }

  setup() {
    this.predictionsForm1 = select('.predictions-form-1')
    this.predictionsForm1.show()
    $("#predictions-self").focus()
  }

  draw() {
    background(colors.primary)

    if (!prediction_submitted) return

    displayTitle('Look at conductor')
  }
}
