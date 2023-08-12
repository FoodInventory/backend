/**
 * produit controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::produit.produit', ({ strapi }) => {
  return {
    async barcode(ctx: { params: { barcode: string; }; }) {
      const produit = strapi.services['api::produit.produit'].barcode(ctx);
      return produit;
    },
  };
}
);
