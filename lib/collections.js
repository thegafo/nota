

Notes = new Mongo.Collection('notes');


Notes.allow({

	'update': function(userId) {
		return true;
	},
	
	'remove': function(userId) {
		return true;
	},

	'insert': function(userId) {
		return true;
	}

});
