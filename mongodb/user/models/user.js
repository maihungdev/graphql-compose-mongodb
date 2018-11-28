/* @flow */

import mongoose from 'mongoose';
import { composeWithMongoose } from '../schemaComposer';

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
    },
    age: {
      type: Number,
      index: true,
    }
  },
  {
    collection: 'db_users',
  }
);


export const User = mongoose.model('user', UserSchema);

export const UserTC = composeWithMongoose(User);
  // /* FOR DEBUG */
  //   .debug()
  // /* OR MORE PRECISELY */
  //   .debugParams()
  //   .debugPayload()
  //   .debugExecTime()