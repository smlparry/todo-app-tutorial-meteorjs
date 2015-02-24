if (Meteor.isClient) {
  // This code only runs on the Client
  Template.body.helpers({
      tasks: [
          { text: "This is task 1" },
          { text: "This is task 2" },
          { text: "This is task 3" }
      ]
  });
}
