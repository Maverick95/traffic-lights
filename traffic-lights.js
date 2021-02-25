import ac from 'ansi-colors';

const trafficLights = function(s) {
  console.log(ac.red(s));
  console.log(ac.yellow(s));
  console.log(ac.green(s));
}

export { trafficLights };
export default trafficLights;