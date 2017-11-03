var mongoose = require('mongoose');
var passport = require('passport');
var config   = require('../config/database');
require('../config/passport')(passport);
var express  = require('express');
var jwt      = require('jsonwebtoken');
var router   = express.Router();
var Integer  = require("../models/integer");

router.get('/current', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    Integer.findOne()
           .sort({created_at: 1})
           .exec(function(err, int) {
                 if(err) {
                    return next(err)
                }
               res.json(int)
            });
})

router.get('/next', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    Integer.findOneAndUpdate({}, { $inc : {currentInteger : 1} }, { new : true })
           .sort({created_at: 1})
           .exec(function(err, int) {
                 if(err) {
                    return next(err)
                }
               res.json(int)
            });
})

router.post('/update', passport.authenticate('jwt', { session: false }), function (req, res, next) {

    if (!req.body.newInt || typeof req.body.newInt != "number") {
        res.status(422).json({"success" : false, message : "An integer should be provided"});
    } else {
        Integer.findOneAndUpdate({}, { currentInteger : req.body.newInt }, { new : true })
                .sort({created_at: 1})
                .exec(function(err, int) {
                    if(err) {
                        return next(err)
                    }
                    res.json(int)
                });
    }

    
})

module.exports = router;