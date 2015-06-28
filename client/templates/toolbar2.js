

Template.toolbar2.events({
	
	'click #invert-colors': function() {
		
		var noteId = Session.get("noteId");	
	
		var color1 = Notes.findOne(noteId).bgColor;
		var color2 = Notes.findOne(noteId).fontColor;
		
		Notes.update(noteId, {$set: {bgColor: color2, fontColor: color1}});
		
		//Meteor.users.update(Meteor.userId(), {$set: {colors: [color2, color1]}});
	},
	
	"click #lock": function() {
		var noteId = Session.get("noteId");
    	Materialize.toast("Note unlocked.", 2000);
    	Notes.update(noteId, {$set: {locked: false}})
    },
    
    "click #unlock": function() {
		var noteId = Session.get("noteId");
    	Materialize.toast("Note locked.", 2000);
       	Notes.update(noteId, {$set: {locked: true}}) 
       	Session.set("settingsVisible", false);
    },
	
	"click #home": function(e) {
		e.preventDefault();
		Router.go('/');
		$('.button-collapse').sideNav('hide'); // to prevent stagnant sidenav
	},
	
	"click #global-settings": function(e) {
		e.preventDefault();
		Router.go('/settings');
		$('.button-collapse').sideNav('hide'); // to prevent stagnant sidenav
	},
	
	"click #logout": function(e) {
		e.preventDefault();
		Router.go('/logout');
		$('.button-collapse').sideNav('hide'); // to prevent stagnant sidenav
	},
	
});


Template.toolbar2.helpers({
	'fontColor': function() {
		var noteId = Session.get("noteId");
		if (!noteId) return;
		return Notes.findOne(noteId).fontColor;
	},
	
	'isLocked': function() {
		var noteId = Session.get("noteId");
		if (!noteId) return;
		var note = Notes.findOne(noteId);
		if (note.locked)
			return true;
		return false;
	},
});