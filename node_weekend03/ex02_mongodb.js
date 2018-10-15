var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost', function(err, client) {
    if(err) throw err;
    var db = client.db('vehicle');
    db.collection('car').findOne({}, function(findErr, result) { 
        if(findErr) throw findErr;
        console.log(result.name, result.price, result.year);
        client.close();
        });
});