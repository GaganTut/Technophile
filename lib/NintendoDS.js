var GameConsole = require("./GameConsole.js");
var WebBrowser = require("./WebBrowser.js");

function NintendoDS() {
  GameConsole.call(this, "Nintendo DS");
  WebBrowser.call(this);
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(NintendoDS.prototype, WebBrowser.prototype);
extend(NintendoDS.prototype, GameConsole.prototype);

module.exports = NintendoDS;