const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/leaderboard',
    proxy({
      target: 'https://alexellis.o6s.io',
      changeOrigin: true,
    })
  );
};