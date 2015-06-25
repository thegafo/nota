

Template.index.events({

	'click #login': function() {
		Materialize.toast('Welcome!', 4000)
	},
	
	'click #refresh': function() {
		location.reload();
	},
});