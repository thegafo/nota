

Meteor.methods({

	//testing
	'updateHTML': function(noteId, html) {
		Notes.update(noteId, {$set: {html: html}});
	},
	

});