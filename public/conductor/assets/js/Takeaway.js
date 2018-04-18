class Takeaway extends GenericScene {
  setup() {
    this.leftTitles = this.titlesFromPlayer(gameState[leftPlayerId])
    this.rightTitles = this.titlesFromPlayer(gameState[rightPlayerId])
    debugger
  }

  draw() {
    background(colors.background)

    displayLeftTitles(this.leftTitles)
    displayRightTitles(this.rightTitles)
  }

  titlesFromPlayer(player) {
    return [
      'Predictions:',
      `self: ${player.predictions.self}`,
      `friend: ${player.predictions.friend}`,
      '\n',
      'Impressions:',
      `leader: ${player.impressions.leader}`,
      `awkward: ${player.impressions.awkward}`,
    ]
  }
}
