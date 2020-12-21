import { Schema, Document, model } from 'mongoose';

export interface Link extends Document {
  shortURL: string;
  URL: string;
}

export const LinkSchema = new Schema<Link>({
  shortURL: { type: String, index: true, required: true },
  URL: { type: String, required: true },
});

export const LinkModel = model<Link>('link', LinkSchema);
