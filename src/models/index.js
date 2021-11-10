// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Video, Place, Action, Suggestion, ActionType, Location, SearchKey, S3Object } = initSchema(schema);

export {
  User,
  Post,
  Video,
  Place,
  Action,
  Suggestion,
  ActionType,
  Location,
  SearchKey,
  S3Object
};