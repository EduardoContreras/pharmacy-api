
const METROPOLITAN_REGION_ID = 7;
const PHARMACY_NAME = 'local_nombre';
const PHARMACY_ADDRESS = 'local_direccion';
const PHARMACY_PHONE = 'local_telefono';
const PHARMACY_LATITUDE = 'local_lat';
const PHARMACY_LONGITUDE = 'local_lng';
const PHARMACY_COMMUNE = 'comuna_nombre';
const FK_COMMUNE = 'fk_comuna';
const NA = 'N/A';
const VALUE = 'value';
const ERRORS_MSG = {
  NOT_FOUND_PHARMACIES_FOR_CURRENT_COMMUNE: 'I dont found the pharmacies for current commune...',
  NOT_FOUND_COMMUNE: 'I dont found the commune...'
};

const PHARMACY_ATTRIBUTES = {
  NAME: PHARMACY_NAME,
  ADDRESS: PHARMACY_ADDRESS,
  PHONE: PHARMACY_PHONE,
  LATITUDE: PHARMACY_LATITUDE,
  LONGITUDE: PHARMACY_LONGITUDE,
  COMMUNE: PHARMACY_COMMUNE,
}

module.exports = {
  METROPOLITAN_REGION_ID,
  PHARMACY_ATTRIBUTES,
  NA,
  FK_COMMUNE,
  VALUE,
  ERRORS_MSG,
};
