exports.check = async (req, reply) => {
  reply.code(200).send({ statusCode: 200, status: 'UP' });
};
