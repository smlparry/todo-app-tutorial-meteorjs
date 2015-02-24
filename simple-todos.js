Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the Client
  Template.body.helpers({
      tasks: function() {
         return Tasks.find({}); 
      }
  });
}
