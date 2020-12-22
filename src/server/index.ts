import express from 'express';
import connect from './database/connect';
import { LinkModel } from './database/models';
import path from 'path';
import router from './routes';

const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../..', 'dist')));

app.get('/:shortURL', async ({ params: { shortURL } }, res, next) => {
  const linkRecord = await LinkModel.findOne({ shortURL });
  if (linkRecord) {
    res.redirect(linkRecord.URL);
  } else {
    next();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'dist/index.html'));
});

connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT);

// exported for testing
export default app;
