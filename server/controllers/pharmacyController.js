const boom = require('boom');
const CustomError = require('../helpers/errors');
const { isUndefined, isEmpty, toUpper } = require('lodash');
const { METROPOLITAN_REGION_ID } = require('../config/constants');
const { findCommune, findPharmacies, getPharmaciesLocation } = require('../helpers/utils');
const { getCommunesByRegionId } = require('../services/commune/communeRegion');
const { getPharmaciesByRegionId } = require('../services/pharmacy/pharmacyZone');

// Get all enabled pharmacies in metropolitan region.
exports.getEnabledPharmacy = async (req, reply) => {
  try {
    const { communeName, pharmacyName } = req.query;
    const responseCommunes = await getCommunesByRegionId(METROPOLITAN_REGION_ID);
    const foundCommune = findCommune(responseCommunes, toUpper(communeName));
    if (!isUndefined(foundCommune)) {
      const responsePharmacies = await getPharmaciesByRegionId(METROPOLITAN_REGION_ID);
      const foundPharmacies = findPharmacies(responsePharmacies.data, toUpper(pharmacyName), foundCommune.id);
      if (!isUndefined(foundPharmacies) && !isEmpty(foundPharmacies)) {
        return getPharmaciesLocation(foundPharmacies);
      } else {
        throw new CustomError('I dont found the pharmacies for current commune...');
      }
    } else {
      throw new CustomError('I dont found the commune...');
    } 
  } catch (err) {
    throw boom.boomify(err);
  }
};
