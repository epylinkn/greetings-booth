let toast
let lastToastAt

function debounceToast(message) {
  lastToastAt = millis() + 2000
  toast = message
}

function displayTitle(title) {
  push()
  rectMode(CORNER)
  fill('white')
  textAlign(CENTER, CENTER)
  textSize(64)
  text(title, 0, 0, windowWidth, windowHeight)
  pop()
}
