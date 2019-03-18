module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const prodMiddleware = require('./prodMiddleware');
    prodMiddleware(app, options);
  } else {
    const webpackConfig = require('../../config/webpack.dev.config');
    const devMiddleware = require('./devMiddleware');
    devMiddleware(app, webpackConfig);
  }

  return app;
};
