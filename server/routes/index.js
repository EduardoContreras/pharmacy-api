const pharmacyController = require('../controllers/pharmacyController');
const health = require('../../health/healthCheck');
const routes = [{
  method: 'GET',
  url: '/api/v1/pharmacy/enabled',
  schema: {
    description: 'Service for know enabled pharmacies in metropolitan region of Chile',
    summary: 'Service for know enabled pharmacies in metropolitan region of Chile',
    tags: ['Pharmacy'],
    headers: {},
    querystring: {
      type: 'object',
        properties: {
          communeName: {
            type: 'string'
          },
          pharmacyName: {
            type: 'string'
          },
      },
      required: ['communeName', 'pharmacyName']
    },
    response: {
      '200': {
        type: 'object',
        description: 'Successful response',
        properties: {
          pharmaciesLocation:{
            type: 'array',
            items: {
              properties: {
                commune:{
                  type: 'string',
                  description: 'Commune of pharmacy'
                },
                address:{
                  type: 'string',
                  description: 'Address of pharmacy'
                },
                name:{
                  type: 'string',
                  description: 'Name of pharmacy' 
                },
                phone:{
                  type: 'string',
                  description: 'Phone of pharmacy'
                },
                latitude:{
                  type: 'string',
                  description: 'Latitude of pharmacy'
                },
                longitude:{
                  type: 'string',
                  description: 'Longitude of pharmacy'
                }
              }
            }
          }
        }
      },
      '400': {
        type: 'object',
        description: 'Bad request',
        properties: {
          statusCode:{
            type: 'integer' 
          },
          error:{
            type: 'string' 
          },
          message:{
            type: 'string' 
          }
        }
      },
      '409': {
        type: 'object',
        description: 'Application error',
        properties: {
          statusCode:{
            type: 'integer' 
          },
          error:{
            type: 'string' 
          },
          message:{
            type: 'string' 
          }
        }
      },
      '500': {
        type: 'object',
        description: 'Internal server error',
        properties: {
          statusCode:{
            type: 'integer' 
          },
          error:{
            type: 'string' 
          },
          message:{
            type: 'string' 
          }
        }
      }
    }
  },
  handler: pharmacyController.getEnabledPharmacy
},
{
  method: 'GET',
  url: '/api/v1/pharmacy/healthCheck',
  schema: {
      hide:false,
      description: 'Service to monitor microservice health check',
      summary: 'Service to monitor microservice health check',
      tags:['Health'],
      response: {
        '200': {
          type: 'object',
          description: 'Successful health microservice',
          properties: {
            statusCode:{
              type: 'integer' 
            },
            status:{
              type: 'string' 
            }
          }
        },
        '500': {
          type: 'object',
          description: 'Internal server error',
          properties: {
            statusCode:{
              type: 'integer' 
            },
            status:{
              type: 'string' 
            }
          }
        }
      }
  },
  handler: health.check
}];

module.exports = routes;
