// Import Routes
const routes = require('./routes');

// Import Swagger Options
const swagger = require('./config/swagger');

// Require the framework and instantiate it
const fastify = module.exports = require('fastify')({ logger: true });

// Import Cors
fastify.register(require('fastify-cors'), {});

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Load Routes
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// Start Server.
start();
