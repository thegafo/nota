
Template.notepad.events({

	"click textarea": function() {
		$('.button-collapse').sideNav('hide');
	},

	"keyup .textarea": function(e, t) {
	
			// if not is not locked
			if (!this.locked) {
		
				var currNoteId = this._id;
				var text = $('.textarea').val();
		
				Notes.update(currNoteId, {$set: {text: text}}, function(error) {
      				if (error) {
        				// display the error to the user
        				return alert(error.reason);
      				} else {
        				//Router.go('postPage', {_id: currentPostId});
      				}
    			});
    		}
    },
    

    "click #settings": function() {
    	if (this.locked)
    		Materialize.toast("Note must be unlocked to make changes.", 2000);
    	else if (Session.get("settingsVisible") === true)
    		Session.set("settingsVisible", false);    		
    	else
    		Session.set("settingsVisible", true);
    },
    
    "click .textarea": function() {
    	Session.set("settingsVisible", false);    	
    },
    
});

Template.notepad.helpers({

	'init': function() {
		Session.set("noteId", this._id);
	},

	'locked': function() {
		if (this.locked)
    		return 'disabled';
	},
	
	'isLocked': function() {
		console.log(this.locked);
		if (this.locked)
			return true;
		return false;
	},

	/*
	'bgColor': function() {
		return Meteor.user().colors[0];
	},
	
	'fontColor': function() {
		return Meteor.user().colors[1];
	},
	*/
	
	'settingsVisible': function() {
		return Session.get('settingsVisible') && !this.locked;
	},

});