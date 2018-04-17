class Setup {
  constructor() {
    this.titles = [
      'Over the next two minutes, we invite you to explore\n the subtle art of greeting another person...',
      'without words.',
      "Let's get started!",
    ]
  }

  draw() {
    background(colors.background)

    displayTitles(this.titles)
  }
}
