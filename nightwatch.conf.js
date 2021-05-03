
const chromedriver = require("chromedriver");
module.exports = (function (settings) {
  settings.test_workers = false;
  settings.webdriver.server_path = chromedriver.path;
  settings.page_objects_path = "./pages";
  return settings;
})(require("./nightwatch.json"));