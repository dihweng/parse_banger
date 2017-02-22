var _ = require('underscore');

module.exports = function (app) {
	
	app.get('/', function (req, res, next) {
		
		res.render('static/index', {
			title: res.locals.AppName + " | You are Welcome",
			page: 'home'
        });
        
	});
	
};