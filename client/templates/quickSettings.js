

Template.quickSettings.events({

	'submit form': function(e) {
	
		e.preventDefault();
		
		var noteId = Session.get("noteId");
		
		var color1 = $(e.target).find('[id=color1]').val();
		var color2 = $(e.target).find('[id=color2]').val();
		
		if (color1 === "" && color2 === "") {
			Materialize.toast("No changes.", 2000);
			Session.set("settingsVisible", false);
			return;
		}
		
		if (color1 === "") {
			Notes.update(noteId, {$set: {fontColor: color2}});
			Session.set("settingsVisible", false);
			return;
		}
		
		if (color2 === "") {
			Notes.update(noteId, {$set: {bgColor: color1}});
			Session.set("settingsVisible", false);
			return;
		}
		
		
		if (color1 === color2) {
			Materialize.toast("Cannot set background and font to same color.", 2000);
			return;
		}
		
		Notes.update(noteId, {$set: {bgColor: color1, fontColor: color2}});
		Session.set("settingsVisible", false);
	},
	
	"click #settings": function() {
    	if (this.locked)
    		Materialize.toast("Note must be unlocked to make changes.", 2000);
    	else
    		Session.set("settingsVisible", true);
    },

});