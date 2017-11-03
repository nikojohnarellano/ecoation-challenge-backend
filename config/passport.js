var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
var ObjectId = require('mongoose').Types.ObjectId; 
var User = require('../models/user');
var Config = require('../config/database');

module.exports = function(passport) {

    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey    = Config.secret;

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        
        User.findOne({ email: jwt_payload.email }, function(err, user) {
            if (err) {
                return done(err, false)
            }
            
            if (user) {
                done(null, user)

            } else {
                done(null, false)
            }
        });
    }));

};