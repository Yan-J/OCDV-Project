// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/meanauth";


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
// var ServiceModel = require('./models/service');
// var mongooseEntity = new ServiceModel({});
// var mongoose = require('mongoose');

// require('./models/service.js');
// var ServiceModel = require('../../models/service.js');

function toggle(source) {
  var checkboxes = document.getElementsByName('service');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

function display() {
	var checks = document.getElementsByClassName('form-check-input');
	var services = [];
    for (i = 0; i < 5; i++) {
    	if (checks[i].checked === true) {
    		services.push(checks[i].id + "");
    	}
    }
    alert(services);
    passToBack(services);
}

function passToBack(services) {
	for (i = 0; i < services.length; i++) {
		// if (services[i] == "medical") {
		// 	ServiceModel.find({service_type: "medical"}, {placeId: true, name: true}).toArray(function(err, result) {

		// 	// getServiceByTag("medical").toArray(function(err, result) {
		// 	    if (err) throw err;
		// 	    else {
		// 	    	console.log("hello");
		// 		    console.log(result);
		// 	    }
		// 	  });
		// }
	}
	
}

// db.close();
// });