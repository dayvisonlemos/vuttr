const environment = process.env.NODE_ENV;

module.exports = {
  isProduction: () => environment === 'prod',
};
