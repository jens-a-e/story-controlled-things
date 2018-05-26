const {
  Action,
  Event,
  SingleThing,
  Property,
  Thing,
  Value,
  WebThingServer,
} = require('webthing');

class StoryColorSwitch extends Thing {
  constructor() {
    super('Fancy Color Switch',
          'multiLevelSensor',
          'A web connected story to color sensor');

    this.addProperty(
      new Property(this,
                   'on',
                   new Value(true),
                   {type: 'boolean',
                    description: 'Whether the sensor is on'}));

    this.level = new Value(0.0);
    this.addProperty(
      new Property(this,
                   'level',
                   this.level,
                   {type: 'number',
                    description: 'The current color',
                    unit: '%'}));
  }

  set color(v) {
    this.level.notifyOfExternalUpdate(v);
  }
}

function runServer() {
  const sensor = new StoryColorSwitch();

  setInterval(() => {
    sensor.color = parseInt(100.0 * Math.random());
  }, 3000);


  const server = new WebThingServer(new SingleThing(sensor),
                                    8888);

  process.on('SIGINT', () => {
    server.stop();
    process.exit();
  });

  server.start();
}
runServer();
