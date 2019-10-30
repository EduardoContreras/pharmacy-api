const chai = require('chai');
const chaiExclude = require('chai-exclude');
const sinon = require('sinon') ;
const axios = require('axios');

const expect = chai.expect;
chai.use(chaiExclude);
chai.should();

require('../../server/server');

const config = {
  headers: { 'Content-Type':'application/json' },
};

const getHealthUrl = () => 'http://localhost:3000/api/v1/pharmacy/healthCheck';

describe('Health Endpoint', async () => {
  beforeEach(done => {
    sinon.restore();
    done();
  });
  describe('/api/v1/pharmacy/healthCheck GET', () => {
    describe('success cases', () => {
      it('should be success response', async () => {        
        const result = await axios.get(getHealthUrl(), config);
        const { data } = result;
        expect(result.status).to.be.equal(200);   
        expect(data).to.have.property('status', 'UP');
      });
    });
  });
});
