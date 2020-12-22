import { Router } from 'express';
import { nanoid } from 'nanoid';
import { LinkModel } from '../database/models';

const router = Router();

router.post('/', async ({ body }, res) => {
  const newLink = new LinkModel({ URL: body.URL, shortURL: nanoid(10) });
  const newWeeLink = await newLink.save().catch((error) => {
    throw new Error(`Failed to create new wee link. ERROR: ${error}`);
  });
  res.json(newWeeLink);
});

export default router;
