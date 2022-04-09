import data from "./data";

module.exports = function() {
  return actor({
    async waitFor(seconds) {
      return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    },

    waitAndTap(locator, secs = data.smallWaitingTimeInSecs) {
      this.waitForElement(locator, secs);
      this.tap(locator);
    },

    waitAndSeeElement(locator, secs = data.smallWaitingTimeInSecs) {
      this.waitForElement(locator, secs)
      this.seeElement(locator);
    },

    waitAndFillField(locator, text, secs = data.smallWaitingTimeInSecs) {
      this.waitForElement(locator, secs)
      this.fillField(locator, text);
    },

    waitAndSeeText(text, secs = data.smallWaitingTimeInSecs) {
      this.waitForText(text, secs)
      this.see(text);
    },

  });
}
