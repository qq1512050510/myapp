import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Posts = new Mongo.Collection('posts');
  console.log(Posts.findOne());
  console.info(Posts.find().count());
});
