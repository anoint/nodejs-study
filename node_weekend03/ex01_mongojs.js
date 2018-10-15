var mongojs = require('mongojs');
var db = mongojs('vehicle', ['car']);

//db.car.find(function(err,data) {
//    console.log(data);
//});

db.car.find({name:'K7'}, function(err,data) {
    console.log(data);
});
