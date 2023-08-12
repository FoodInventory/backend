/**
 * produit router
 */

import { factories } from '@strapi/strapi';

const coreRoutes = factories.createCoreRouter('api::produit.produit');

const customRouter = (innerRouter, extraRoutes = []) => {
  let routes;
  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes.concat(extraRoutes);
      return routes;
    },
  };
};

const myExtraRoutes = [
  {
    method: "GET",
    path: "/produits/code/:barcode",
    handler: 'produit.barcode',
  },
];

module.exports = customRouter(coreRoutes, myExtraRoutes);
