const { head, get, eq } = require('lodash');
const HTML = require('html-parse-stringify');

const { PHARMACY_ATTRIBUTES, FK_COMMUNE, VALUE, NA } = require('../config/constants');

const getCleanData = (data) => {
  const items = HTML.parse(data);
  return items.map(item => ({ id: get(item, 'attrs.value'), value: get(head(item.children), 'content') }));
};

const findCommune = (communes, communeName) => communes.find(commune => eq(communeName, get(commune, VALUE)));

const findPharmacies = (pharmacies, pharmacyName, communeId) =>
  pharmacies.filter(pharmacy =>
    eq(pharmacyName, get(pharmacy, PHARMACY_ATTRIBUTES.NAME)) &&
    eq(communeId, get(pharmacy, FK_COMMUNE)));

const getPharmaciesLocation = (foundPharmacies) => ({pharmaciesLocation: foundPharmacies.map(pharmacy => ({
  name: get(pharmacy, PHARMACY_ATTRIBUTES.NAME, NA),
  address: get(pharmacy, PHARMACY_ATTRIBUTES.ADDRESS, NA),
  phone: get(pharmacy, PHARMACY_ATTRIBUTES.PHONE, NA),
  latitude: get(pharmacy, PHARMACY_ATTRIBUTES.LATITUDE, NA),
  longitude: get(pharmacy, PHARMACY_ATTRIBUTES.LONGITUDE, NA),
  commune: get(pharmacy, PHARMACY_ATTRIBUTES.COMMUNE, NA)
}))});

module.exports = {
  getCleanData,
  findCommune,
  findPharmacies,
  getPharmaciesLocation,
};
