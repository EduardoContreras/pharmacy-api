exports.options = {
  routePrefix: '/api/v1/pharmacy/documentation',
  // routePrefix: '/api/v1/pharmacy/documentation',
  // routePrefix: '/api/'+process.env.API_VS+'/appointments/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Pharmacy API',
      description: 'The purpose of this  project is give a  REST API that provide necessary information of enabled pharmacies in metropolitan region.',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost:3000',
    schemes: ['http','https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'Pharmacy', description: 'Pharmacy related end-points' }
    ]
  }
};


/* exports.options = {
  routePrefix: '/api/'+process.env.API_VS+'/appointments/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Agenda Corporate, schedule-engine microservice API',
      description: 'Building a blazing fast REST API with Node.js, MSSQL, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: process.env.AZURE_MICROSERVICE_ENGINE_ENDPOINT,
    schemes: ['http','https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags:[
      { name: 'Appointment', description:'Appointment services'},
      { name: 'Commerces', description:'Commerces services'},
      { name: 'Health', description: 'Health Service' }
    ]
  }
} */
