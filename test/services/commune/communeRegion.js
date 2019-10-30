const chai = require('chai');
const chaiExclude = require('chai-exclude');
const sinon = require('sinon') ;
const axios = require('axios');

const expect = chai.expect;
chai.use(chaiExclude);
chai.should();

require('../../../server/server');

const CustomError = require('../../../server/helpers/errors');
const METROPOLITAN_REGION_ID = require('../../../server/config/constants');
const { getCommunesByRegionId } = require('../../../server/services/commune/communeRegion');

describe('Service communeRegion', async () => {
  beforeEach(done => {
    sinon.restore();
    done();
  });
  describe('getCommunesByRegionId GET', () => {
    describe('failed cases', () => {
      describe('on request data', () => {
        it('should be fail when dont retrieve data of service', async () => {
          try {
            sinon.stub(axios, 'post').callsFake(() => { throw new CustomError('Dont return data...'); });
            await getCommunesByRegionId(METROPOLITAN_REGION_ID);
          } catch (error) {
            expect(error.status).to.be.equal(409);
            expect(error.message).to.be.equal('Dont return data...');
          }
        });
      });
    });
  });
});
