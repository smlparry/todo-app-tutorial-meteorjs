Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the Client
  Template.body.helpers({
      tasks: function() {
         return Tasks.find({}, { sort: {createdAt: -1} });
      }
  });

  Template.body.events({
      "submit .new-task": function (event) {
        //   This function is called when the new task form is submitted
        var text = event.target.text.value;

        // Insert into the database
        Tasks.insert({
            text: text,
            createdAt: new Date()
        });

        // Clear form
        event.target.text.value = "";
        // Prevent default form submit
        return false;
      }
  })
}
