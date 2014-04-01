Books = new Meteor.Collection("books", {
    schema: new SimpleSchema({
        name: {
            type: String,
            label: "name",
            max: 200
        }
    })
});