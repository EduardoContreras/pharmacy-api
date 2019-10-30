
const routes = require('./routes');

// Import Swagger Options
const swagger = require('./config/swagger');

// Require the framework and instantiate it
const fastify = module.exports = require('fastify')({ logger: true });

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

routes.forEach((route, index) => {
  fastify.route(route);
});

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world, servicio corriendo! Edu!' };
  // reply.send('servicio corriendo! Edu!\n');
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

start();
