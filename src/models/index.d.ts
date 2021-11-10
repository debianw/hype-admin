import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Location {
  readonly lat: number;
  readonly lng: number;
  constructor(init: ModelInit<Location>);
}

export declare class SearchKey {
  readonly id: string;
  readonly key: string;
  constructor(init: ModelInit<SearchKey>);
}

export declare class S3Object {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
  constructor(init: ModelInit<S3Object>);
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'updatedAt';
}

type VideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SuggestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActionTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly username?: string;
  readonly picture?: string;
  readonly homeLocationName?: string;
  readonly homeLocationGeo?: Location;
  readonly points?: number;
  readonly postCount?: number;
  readonly uniquePlaces?: (string | null)[];
  readonly email?: string;
  readonly searchKey?: SearchKey;
  readonly posts?: (Post | null)[];
  readonly actions?: (Action | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly owner?: string;
  readonly vicinity?: string;
  readonly city?: string;
  readonly state?: string;
  readonly zip?: string;
  readonly _geoloc?: Location;
  readonly createdAt: string;
  readonly postVideoId?: string;
  readonly video?: Video;
  readonly status?: string;
  readonly placeName?: string;
  readonly tags?: (string | null)[];
  readonly place?: Place;
  readonly updatedAt?: string;
  readonly placeId?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Video {
  readonly id: string;
  readonly status?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Video, VideoMetaData>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video, VideoMetaData>) => MutableModel<Video, VideoMetaData> | void): Video;
}

export declare class Place {
  readonly id: string;
  readonly name: string;
  readonly city?: string;
  readonly state?: string;
  readonly zip?: string;
  readonly _geoloc: Location;
  readonly address?: string;
  readonly vicinity?: string;
  readonly media?: string;
  readonly tags?: (string | null)[];
  readonly posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Place, PlaceMetaData>);
  static copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

export declare class Action {
  readonly id: string;
  readonly userId: string;
  readonly badge?: boolean;
  readonly code: string;
  readonly name: string;
  readonly points?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Action, ActionMetaData>);
  static copyOf(source: Action, mutator: (draft: MutableModel<Action, ActionMetaData>) => MutableModel<Action, ActionMetaData> | void): Action;
}

export declare class Suggestion {
  readonly id: string;
  readonly name: string;
  readonly email?: string;
  readonly suggestion: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Suggestion, SuggestionMetaData>);
  static copyOf(source: Suggestion, mutator: (draft: MutableModel<Suggestion, SuggestionMetaData>) => MutableModel<Suggestion, SuggestionMetaData> | void): Suggestion;
}

export declare class ActionType {
  readonly id: string;
  readonly code: string;
  readonly name: string;
  readonly points: number;
  readonly badge?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ActionType, ActionTypeMetaData>);
  static copyOf(source: ActionType, mutator: (draft: MutableModel<ActionType, ActionTypeMetaData>) => MutableModel<ActionType, ActionTypeMetaData> | void): ActionType;
}