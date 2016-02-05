var express = require('express');
var app = express();

//Static files loading
app.use(express.static('app')),

// Routes matching
app.get('/api/dataways/:uid', function (req, res) {
    var datawayID = req.params.uid;
    res.json(app.dataways[datawayID - 1]);
}

    ),

//default
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
}),

app.listen(3000, function () {
    console.log('Holy moly, it works');

});
