var _ = require('underscore');
var AppConfig = {
    AppName: "Wumanize"
};

module.exports = function (app) {
    app.all('*', function(req, res, next){
       req.flash = function(type, message){
           return [];
       }
      next();
    });
};
