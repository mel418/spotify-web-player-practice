// all petitions with the /auth/** pattern will be redirected to the backend

module.exports = function (app) {
  app.use(proxy(`/auth/**`, {
    target: 'http://localhost:5000'
  }));
};