/* const chai = require('chai');
const chaiExclude = require('chai-exclude');
const sinon = require('sinon') ;
const axios = require('axios');

const expect = chai.expect;
chai.use(chaiExclude);
chai.should();

// const fastify = require('fastify');
const fastify = require('fastify')({ logger: true });
// const fastify = module.exports = require('fastify')({ logger: true });

const CustomError = require('../server/helpers/errors');
const METROPOLITAN_REGION_ID = require('../server/config/constants');
const { getPharmaciesByRegionId } = require('../server/services/pharmacy/pharmacyZone');

describe('Service pharmacyZone', async () => {
  beforeEach(done => {
    sinon.restore();
    done();
  });
  describe('getPharmaciesByRegionId GET', () => {
    describe('failed cases', () => {
      describe('on request data', () => {
        it('should be fail when dont retrieve data of service', async () => {
          try {
            sinon.stub(fastify, 'listen').callsFake(() => { throw new CustomError('Dont init server...'); });
            const servidor = require('../server/server');
            console.log('------------------> ', servidor);
          } catch (error) {
            expect(error.status).to.be.equal(409);
            expect(error.message).to.be.equal('Dont init server...');
          }
        });
      });
    });
  });
});
 */