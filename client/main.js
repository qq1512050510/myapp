import { Template } from 'meteor/templating';

import './main.html';

//Post = new Monogo.Collection('posts');

Template.body.helpers({

  tasks: [

    { text: 'This is task 1' },

    { text: 'This is task 2' },

    { text: 'This is task 3' },

  ],

});

