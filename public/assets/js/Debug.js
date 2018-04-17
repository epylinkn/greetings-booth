class Debug {
  draw() {
    background('magenta')

    if (millis() < lastToastAt) {
      displayTitle(toast)
    }
  }

  keyPressed() {
    console.log(`${key} (${keyCode}) is pressed`)
    debounceToast(`${key}`)
  }
}
