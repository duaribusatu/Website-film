'use strict';

/**
 * ww service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ww.ww');
