var mongoose = require('mongoose');

var ServiceSchema = new mongoose.Schema({
	placeId: {
		type: Number,
		unique: true,
    	required: true,
	},
	serviceType: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	postcode: {
		type: String,
	},
	latitude: {
		type: String,
		required: true,
	},
	longitute: {
		type :String,
		required: true,
	},
	website: {
		type: String,
	},
	openTime: {
		type: String,
	},
	email: {
		type: String,
	}
});

// ServiceSchema.statics.getInfo = function (serviceType, callback) {
// 	Service.find({serviceType : "medical"})
// 		.exec(function (err, service) {
// 			if (err) {
// 				return callback(err)
// 			}
// 			return("hhh");
// 			return(service);
// 		});
// }

var Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;