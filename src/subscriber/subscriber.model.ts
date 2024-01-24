import { Schema, Document } from 'mongoose';

const SubscriberSchema = new Schema(
  {
    name: String,
    email: String,
  },
  { 
    collection: 'Subscriber',
    timestamps: true 
  },
);

export { SubscriberSchema };

export interface Subscriber extends Document {
  name: string;
  email: string;
}
