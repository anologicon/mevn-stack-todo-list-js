var mongoose = require('mongoose');

// Define collection adn schema for todo item

 var todo = new mongoose.Schema({
     name: {
         type: String
     },

     done: {
         type: Boolean
     }
 },
  {
      collation: 'todos'
  }
);

module.exports = mongoose.model('Todo', todo);