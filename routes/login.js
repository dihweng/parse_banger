var _ = require('underscore');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
var AppConfig = require("../configs/config");
var Parse = require('parse/node');
Parse.initialize(AppConfig.APP_ID, null);
Parse.serverURL = AppConfig.SERVER_URL;

module.exports = function (app) {
    
    app.get('/login', csrfProtection, function (req, res, next) {
		
		if(_.has(req.session, 'user')) return res.redirect('/app');
		
		res.render('static/login', {
			title: res.locals.AppName + " | Login",
			page: 'login',
			csrfToken: req.csrfToken()
		});
	});
	
	app.post('/login', csrfProtection, function (req, res, next) {
		if(_.has(req.session, 'user')) return res.redirect('/app');
		Parse.User.logIn(req.body.email || '', req.body.password || '', {
          success: function(user) {
            req.session.user = user;
			req.flash('info', 'Your are now logged in. Your session starts now.');
			return res.redirect('/app');
          },
        error: function(user, error) {
            req.flash('error', error.message);
            return res.redirect('/login');
          }
        });
    });
};