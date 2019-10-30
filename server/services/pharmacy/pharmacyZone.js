const boom = require('boom');
const axios = require('axios');

const url = 'https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion';
const config = {
  headers: { 'Content-Type':'application/json' },
};

const getUrl = (idRegion) => `${url}?id_region=${idRegion}`;

// Get pharmacies by region id
const getPharmaciesByRegionId = async (idRegion) => {
  try {
    return await axios.get(getUrl(idRegion), config);
  } catch (err) {
    throw boom.boomify(err);
  };
};

module.exports = {
  getPharmaciesByRegionId,
};
