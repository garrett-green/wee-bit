import mongoose from 'mongoose';
require('dotenv').config();

export default () => {
  const connect = () => {
    mongoose
      .connect(process.env.DATABASE_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        return console.log(`Successfully connected to database`);
      })
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
