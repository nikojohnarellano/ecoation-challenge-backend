var Integer = require('../models/integer');

module.exports = function() {
    Integer.count({}, (err, count) => {
        if(count == 0) {
            var initialInt = new Integer({ currentInteger : 0 });
            
            initialInt.save(function(err) {
                if(err) {
                    console.log(err)
                }
            })
        }   
    })
}