const mongoose = require('mongoose');
const app = require('./src/config');

app.listen(3030, () => {
  console.log('...... NewsAPI listening on port 3030! \n');

  mongoose.connect('mongodb://localhost/' + 'NewsAPI', {useNewUrlParser: true});
  const dbConnection = mongoose.connection;
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', () => {
    console.log('...... Connected to db -> NewsAPI');
  });
});