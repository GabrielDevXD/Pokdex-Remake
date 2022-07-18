const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(
      'mongodb+srv://root:admin@pokeremake.j7uidgm.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('Connected to the database successfully');
    })
    .catch((err) => {
      return console.log(`Bank connection error: ${err}`);
    });
}

module.exports = connectToDatabase;
