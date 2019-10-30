const chai = require('chai');
const chaiExclude = require('chai-exclude');
const sinon = require('sinon') ;
const axios = require('axios');

const expect = chai.expect;
chai.use(chaiExclude);
chai.should();

require('../../../server/server');

const config = {
  headers: { 'Content-Type':'application/json' },
};

const getPharmacyUrl = (communeName, phamacyName) => `http://localhost:3000/api/v1/pharmacy/enabled?communeName=${communeName}&pharmacyName=${phamacyName}`;

describe('Pharmacy Endpoints', async () => {
  beforeEach(done => {
    sinon.restore();
    done();
  });
  describe('/api/v1/pharmacy/enabled GET', () => {
    describe('success cases', () => {
      it('should be success response', async () => {        
        const result = await axios.get(getPharmacyUrl('BUIN', 'AHUMADA'), config);
        const { data } = result;
        expect(result.status).to.be.equal(200);
        expect(data).to.have.property('pharmaciesLocation');
        expect(data.pharmaciesLocation).to.be.an('array');
        expect(data.pharmaciesLocation.length > 0).to.equal(true);        
      });
    });
    describe('failed cases', () => {
      describe('on request data', () => {
        it('with invalid "communeName" type', async () => {
          try {
            await axios.get(getPharmacyUrl(0000, 'AHUMADA'), config);
          } catch (error) {
            const { response } = error;
            const { data } = response;
            expect(data.statusCode).to.be.equal(409);
            expect(data.message).to.be.equal('I dont found the commune...');
            expect(error.message).to.be.equal('Request failed with status code 409');
          }
        });
        it('with invalid "pharmacyName" type', async () => {
          try {
            await axios.get(getPharmacyUrl('BUIN', 0000), config);
          } catch (error) {
            const { response } = error;
            const { data } = response;
            expect(data.statusCode).to.be.equal(409);
            expect(data.message).to.be.equal('I dont found the pharmacies for current commune...');
            expect(error.message).to.be.equal('Request failed with status code 409');
          }
        });
      });
    });
  });
});
