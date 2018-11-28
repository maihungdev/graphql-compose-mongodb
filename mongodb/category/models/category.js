/* @flow */

import mongoose from 'mongoose';
import { composeWithMongoose } from '../schemaComposer';

export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
    },
    title: {
      type: String,
      index: true,
    },
    content: {
      type: String,
      index: true,
    }

  },
  {
    collection: 'db_categorys',
  }
);


export const Category = mongoose.model('category', CategorySchema);

export const CategoryTC = composeWithMongoose(Category);
  // /* FOR DEBUG */
  //   .debug()
  // /* OR MORE PRECISELY */
  //   .debugParams()
  //   .debugPayload()
  //   .debugExecTime()