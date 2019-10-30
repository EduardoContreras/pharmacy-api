const boom = require('boom');
const axios = require("axios");
const { getCleanData } = require('../../helpers/utils');
const querystring = require('querystring');

const url = 'https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_comunas_por_regiones';
const config = {
  headers: { 'Content-Type':'application/x-www-form-urlencoded' },
};
const getData = (regId) => querystring.stringify({ reg_id: regId });

const getCommunesByRegionId = async (regId) => {
  try {
    const data = getData(regId);
    const result = await axios.post(url, data, config);
    return getCleanData(result.data);
  } catch (err) {
    throw boom.boomify(err);
  };
};

module.exports = {
  getCommunesByRegionId,
};
