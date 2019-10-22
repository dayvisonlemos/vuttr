const os = require('os');
const cluster = require('cluster');
const config = require('config');
const log = require('@flagcard/log');
const {isProduction} = require('../config');
const server = require('./server');
const { version, name, description } = require('../package');

const port = config.get('port');
const cpus = os.cpus().length;

server.get('/', (req, res) => {
  res.json({
    status: `${name} is up and running.`, description, version,
  });
});

if (isProduction() && cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    log.info(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    log.info('Starting a new worker');
    cluster.fork();
  });
} else {
  server.listen(port, () => {
    log.info(`${name} is running on port ${port}`);
  });
}
