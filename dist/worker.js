"use strict";

var _esm = require("https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm");
var handler = new _esm.WebWorkerMLCEngineHandler();
self.onmessage = function (msg) {
  handler.onmessage(msg);
};