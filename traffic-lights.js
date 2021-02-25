const ac = require('ansi-colors');

const trafficLights = function(s) {
  console.log(ac.red(s));
  console.log(ac.yellow(s));
  console.log(ac.green(s));
}

module.exports = trafficLights;