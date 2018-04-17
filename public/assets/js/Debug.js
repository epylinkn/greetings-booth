class Debug {
  draw() {
    background(0)

    if (millis() < lastToastAt) {
      displayTitle(toast)
    }
  }

  keyPressed() {
    console.log(`${key} (${keyCode}) is pressed`)
    debounceToast(`${key}`)
  }
}
