import cors from 'cors';
import express from 'express';
import { nanoid } from 'nanoid';
import connect from './database/connect';
import { LinkModel } from './database/models';
import path from 'path';

const app = express();
const router = express.Router();

app.use(cors());

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../..', 'dist')));

router.post('/', async ({ body }, res) => {
  const newLink = new LinkModel({ URL: body.URL, shortURL: nanoid(10) });
  const newWeeLink = await newLink.save().catch((error) => {
    throw new Error(`Failed to create new wee link. ERROR: ${error}`);
  });
  res.json(newWeeLink);
});

app.get('/:shortURL', async ({ params: { shortURL } }, res) => {
  const linkRecord = await LinkModel.findOne({ shortURL });
  if (linkRecord) {
    res.redirect(linkRecord.URL);
  } else {
    res.status(400).send('URL Not Found');
  }
});

app.use('/api', router);

connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`LIVE ON PORT ${PORT}`);
});
