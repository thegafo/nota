Meteor.publish('notes', function() {
	return Notes.find();
});

Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {colors: 1, homeNote: 1, lastVisited: 1}});
});