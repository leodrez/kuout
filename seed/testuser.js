const mongoose = require('mongoose');
const Clients = require('../models/clients');
const Posts = require('../models/posts');


function test() {
  Clients.find({}, function(err, clients){
    if(clients.length > 0){
      return;
    } else {
      var users = new Clients({ name: 'Leonardo', userName: 'Leo', email: 'leo@gmail.com', password: 'password' });
      users.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Wepa');
        }
      });
    }
  });

  Posts.find({}, function(err, post){
    if(post.length > 0) {
      return;
    } else {
      var post = new Posts ({ image: './public/img/kuout-pictures/kpic1.jpg', kuout: 'Test quote', fontFamily: 'Amatic SC',
      fontColor: 'gray'});
      post.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Hello');
        }
      });
    }
  });
}

module.exports = test;
