Router.configure({
    //layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { 
    	return [Meteor.subscribe('notes'),]; 
    }
});


Router.route('/', {
	name: 'index',
});


Router.route('/n', {
	data: function() { 
		if (Meteor.user())
			Router.go('/n/' + Meteor.user().homeNote);
		else
			Router.go('/');	
	}
});

Router.route('/login', {
	name: 'login',
	data: function() {
		if (Meteor.user())
			Router.go('/n');
	},
});

Router.route('/logout', {
	data: function() {
		Meteor.logout();
		Router.go('/');
		Materialize.toast("Successfully logged out.", 4000);
	},
});

Router.route('/loading', {
	name: 'loading',
});


Router.route('/n/:_id', {
	name: 'notepad',
	data: function() { return Notes.findOne(this.params._id); }
});

Router.route('/settings', {
	name: 'settings',
});


var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {only: 'notepad'});
Router.onBeforeAction(requireLogin, {only: 'notepad'});
