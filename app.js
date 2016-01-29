var express = require('express');
var app = express();

app.dataways = [{
      Id: 1,
      Name: "Microsoft SQL Server",
      Description: "",
      Username: "",
      Password: "",

      Connection: {
        type: "SqlServer",
        name: "Sql Server Connection",
        description: "My Sql Server connection for test",
        HostAddress: "198.168.1.10",
        Port: "3306",
        Scheme: "default",
        Username: "sa",
        Password: "admin123",
        UseSLL: "y",
        RequiredSll: "y",
        VerifyServerCertification: "n"
      }
    }, {
      Id: 2,
      Name: "Oracle",
      Description: "",
      Username: "",
      Password: "",

      Connection: {
        type: "Oracle",
        name: "Oracle SQL Engine",
        description: "My Sql Server connection for test",
        HostAddress: "198.168.1.10",
        Port: "3306",
        Scheme: "default",
        Username: "sa",
        Password: "admin123",
        UseSLL: "y",
        RequiredSll: "y",
        VerifyServerCertification: "n"
      }
    }

  ],

  //Static files loading
  app.use(express.static('app')),

  // Routes matching
  app.get('/api/dataways/:uid', function(req, res) {
      var datawayID = req.params.uid;
      res.json(app.dataways[datawayID - 1]);
    }

  ),

  //default
  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
  }),

  app.listen(3000, function() {
    console.log('Holy moly, it works');

  });
