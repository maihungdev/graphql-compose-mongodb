/* @flow */

// SINGLE SCHEMA ON SERVER
// import { schemaComposer } from 'graphql-compose';

// MULTI SCHEMA MODE IN ONE SERVER
// import { SchemaComposer } from 'graphql-compose';
// const schemaComposer = new SchemaComposer();

import { schemaComposer } from './schemaComposer';
import { CategoryTC } from './models/category';

// create GraphQL Schema with all available resolvers for category Type
schemaComposer.Query.addFields({
  categoryById: CategoryTC.getResolver('findById'),
  categoryByIds: CategoryTC.getResolver('findByIds'),
  categoryOne: CategoryTC.getResolver('findOne'),
  categoryMany: CategoryTC.getResolver('findMany'), // .debug(), // debug info to console for this resolver
  categoryTotal: CategoryTC.getResolver('count'),
  categoryConnection: CategoryTC.getResolver('connection'),
  categoryPagination: CategoryTC.getResolver('pagination'),
});

// For debug purposes you may display resolver internals in the following manner:
// console.log(CategoryTC.getResolver('findMany').toString());

schemaComposer.Mutation.addFields({
  categoryCreate: CategoryTC.getResolver('createOne'),
  categoryCreateMany: CategoryTC.getResolver('createMany'),
  categoryUpdateById: CategoryTC.getResolver('updateById'),
  categoryUpdateOne: CategoryTC.getResolver('updateOne'),
  categoryUpdateMany: CategoryTC.getResolver('updateMany'),
  categoryRemoveById: CategoryTC.getResolver('removeById'),
  categoryRemoveOne: CategoryTC.getResolver('removeOne'),
  categoryRemoveMany: CategoryTC.getResolver('removeMany'),
});

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;
