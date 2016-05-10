// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Todos')
      .assert.elementCount('input', 1)
      .end()
  }
}
