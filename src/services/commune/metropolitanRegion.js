const boom = require('boom');
const axios = require("axios");

const url = 'https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_regiones';
const config = {
  headers: { 'Content-Type':'application/json' },
};
const data = {};

const getCommunes = async () => {
  try {
    return await axios.post(url, data, config);
  } catch (err) {
    throw boom.boomify(err);
  };
};

module.exports = {
  getCommunes,
};
