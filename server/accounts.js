Accounts.onCreateUser( function(options, user) {
	
	user.colors = ["white", "black"];
	var firstNote = Notes.insert({
		title: "First Note", 
		userId: user._id, 
		text: "Your first note!", 
		locked: false,
		fontColor: "black",
		bgColor: "white"
	});
	
	user.homeNote = firstNote;
	user.lastVisited = null;
	return user;
	
});



Meteor.users.allow({
	update: function() {
		return true;
	},
});