import mongoose from 'mongoose';
import * as testDBConfig from '../../globalConfig.json';

export const mockLinkModel = {
  id: '',
  shortURL: 'a1b2d3c4e5',
  URL: 'https://www.kazoohr.com/',
};

export const mockConnect = async () => {
  await mongoose
    .connect(testDBConfig.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .catch((err) => {
      console.error(err);
    });
};

export const disconnect = async () => {
  await mongoose.disconnect();
};
