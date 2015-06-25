Accounts.onCreateUser( function(options, user) {

	var text = "Welcome to Nôta!\n\nThis is your notepad. Anything you type here will instantly be available on every device you're logged in to.\n\n" +
			   "You can prevent any changes to your note by pressing the lock icon below. You can also change the color of the note in settings. Global settings with added note functionality will be coming soon!";
	
	user.colors = ["white", "black"];
	var firstNote = Notes.insert({
		title: "uno", 
		userId: user._id, 
		text: text, 
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