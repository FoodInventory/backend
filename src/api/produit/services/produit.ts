/**
 * produit service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::produit.produit', ({ strapi }) => {
  return {
    async barcode(ctx) {
      var produit = await strapi.query('api::produit.produit').findOne({ barcode: ctx.params.barcode });
      return produit;
    },
  };
});
