/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateProfileInput = {
  name?: string | null,
  picture?: string | null,
  email?: string | null,
  homeLocationName?: string | null,
  homeLocationGeo?: LocationInput | null,
  _version?: number | null,
};

export type LocationInput = {
  lat: number,
  lng: number,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  username?: string | null,
  picture?: string | null,
  homeLocationName?: string | null,
  homeLocationGeo?: Location | null,
  points?: number | null,
  postCount?: number | null,
  uniquePlaces?: Array< string | null > | null,
  email?: string | null,
  searchKey?: SearchKey | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  posts?: ModelPostConnection | null,
  actions?: ModelActionConnection | null,
};

export type Location = {
  __typename: "Location",
  lat: number,
  lng: number,
};

export type SearchKey = {
  __typename: "SearchKey",
  id: string,
  key: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  owner?: string | null,
  vicinity?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  _geoloc?: Location | null,
  createdAt: string,
  postVideoId?: string | null,
  status?: string | null,
  placeId?: string | null,
  placeName?: string | null,
  tags?: Array< string | null > | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
  video?: Video | null,
  place?: Place | null,
};

export type Video = {
  __typename: "Video",
  id: string,
  status?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Place = {
  __typename: "Place",
  id: string,
  name: string,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  _geoloc: Location,
  address?: string | null,
  vicinity?: string | null,
  media?: string | null,
  tags?: Array< string | null > | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  posts?: ModelPostConnection | null,
  owner?: string | null,
};

export type ModelActionConnection = {
  __typename: "ModelActionConnection",
  items?:  Array<Action | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Action = {
  __typename: "Action",
  id: string,
  userId: string,
  badge?: boolean | null,
  code: string,
  name: string,
  points?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type CreateSuggestionInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  suggestion: string,
  _version?: number | null,
};

export type ModelSuggestionConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  suggestion?: ModelStringInput | null,
  and?: Array< ModelSuggestionConditionInput | null > | null,
  or?: Array< ModelSuggestionConditionInput | null > | null,
  not?: ModelSuggestionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Suggestion = {
  __typename: "Suggestion",
  id: string,
  name: string,
  email?: string | null,
  suggestion: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSuggestionInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  suggestion?: string | null,
  _version?: number | null,
};

export type DeleteSuggestionInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  username?: string | null,
  picture?: string | null,
  homeLocationName?: string | null,
  homeLocationGeo?: LocationInput | null,
  points?: number | null,
  postCount?: number | null,
  uniquePlaces?: Array< string | null > | null,
  email?: string | null,
  searchKey?: SearchKeyInput | null,
  _version?: number | null,
};

export type SearchKeyInput = {
  id: string,
  key: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  homeLocationName?: ModelStringInput | null,
  points?: ModelIntInput | null,
  postCount?: ModelIntInput | null,
  uniquePlaces?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  picture?: string | null,
  homeLocationName?: string | null,
  homeLocationGeo?: LocationInput | null,
  points?: number | null,
  postCount?: number | null,
  uniquePlaces?: Array< string | null > | null,
  email?: string | null,
  searchKey?: SearchKeyInput | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateVideoInput = {
  id?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelVideoConditionInput = {
  status?: ModelStringInput | null,
  and?: Array< ModelVideoConditionInput | null > | null,
  or?: Array< ModelVideoConditionInput | null > | null,
  not?: ModelVideoConditionInput | null,
};

export type UpdateVideoInput = {
  id: string,
  status?: string | null,
  _version?: number | null,
};

export type DeleteVideoInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  owner?: string | null,
  vicinity?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  _geoloc?: LocationInput | null,
  createdAt?: string | null,
  postVideoId?: string | null,
  status?: string | null,
  placeId?: string | null,
  placeName?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  vicinity?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  postVideoId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  placeId?: ModelIDInput | null,
  placeName?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  owner?: string | null,
  vicinity?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  _geoloc?: LocationInput | null,
  createdAt?: string | null,
  postVideoId?: string | null,
  status?: string | null,
  placeId?: string | null,
  placeName?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  _geoloc: LocationInput,
  address?: string | null,
  vicinity?: string | null,
  media?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelPlaceConditionInput = {
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  address?: ModelStringInput | null,
  vicinity?: ModelStringInput | null,
  media?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceInput = {
  id: string,
  name?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  _geoloc?: LocationInput | null,
  address?: string | null,
  vicinity?: string | null,
  media?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type DeletePlaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateActionInput = {
  id?: string | null,
  userId: string,
  badge?: boolean | null,
  code: string,
  name: string,
  points?: number | null,
  _version?: number | null,
};

export type ModelActionConditionInput = {
  userId?: ModelIDInput | null,
  badge?: ModelBooleanInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelActionConditionInput | null > | null,
  or?: Array< ModelActionConditionInput | null > | null,
  not?: ModelActionConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateActionInput = {
  id: string,
  userId?: string | null,
  badge?: boolean | null,
  code?: string | null,
  name?: string | null,
  points?: number | null,
  _version?: number | null,
};

export type DeleteActionInput = {
  id: string,
  _version?: number | null,
};

export type CreateActionTypeInput = {
  id?: string | null,
  code: string,
  name: string,
  points: number,
  badge?: boolean | null,
  _version?: number | null,
};

export type ModelActionTypeConditionInput = {
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  points?: ModelIntInput | null,
  badge?: ModelBooleanInput | null,
  and?: Array< ModelActionTypeConditionInput | null > | null,
  or?: Array< ModelActionTypeConditionInput | null > | null,
  not?: ModelActionTypeConditionInput | null,
};

export type ActionType = {
  __typename: "ActionType",
  id: string,
  code: string,
  name: string,
  points: number,
  badge?: boolean | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateActionTypeInput = {
  id: string,
  code?: string | null,
  name?: string | null,
  points?: number | null,
  badge?: boolean | null,
  _version?: number | null,
};

export type DeleteActionTypeInput = {
  id: string,
  _version?: number | null,
};

export type ModelSuggestionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  suggestion?: ModelStringInput | null,
  and?: Array< ModelSuggestionFilterInput | null > | null,
  or?: Array< ModelSuggestionFilterInput | null > | null,
  not?: ModelSuggestionFilterInput | null,
};

export type ModelSuggestionConnection = {
  __typename: "ModelSuggestionConnection",
  items?:  Array<Suggestion | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  homeLocationName?: ModelStringInput | null,
  points?: ModelIntInput | null,
  postCount?: ModelIntInput | null,
  uniquePlaces?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVideoFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type ModelVideoConnection = {
  __typename: "ModelVideoConnection",
  items?:  Array<Video | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  vicinity?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  postVideoId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  placeId?: ModelIDInput | null,
  placeName?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  address?: ModelStringInput | null,
  vicinity?: ModelStringInput | null,
  media?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items?:  Array<Place | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  badge?: ModelBooleanInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelActionFilterInput | null > | null,
  or?: Array< ModelActionFilterInput | null > | null,
  not?: ModelActionFilterInput | null,
};

export type ModelActionTypeFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  points?: ModelIntInput | null,
  badge?: ModelBooleanInput | null,
  and?: Array< ModelActionTypeFilterInput | null > | null,
  or?: Array< ModelActionTypeFilterInput | null > | null,
  not?: ModelActionTypeFilterInput | null,
};

export type ModelActionTypeConnection = {
  __typename: "ModelActionTypeConnection",
  items?:  Array<ActionType | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateSuggestionMutationVariables = {
  input: CreateSuggestionInput,
  condition?: ModelSuggestionConditionInput | null,
};

export type CreateSuggestionMutation = {
  createSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    name: string,
    email?: string | null,
    suggestion: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSuggestionMutationVariables = {
  input: UpdateSuggestionInput,
  condition?: ModelSuggestionConditionInput | null,
};

export type UpdateSuggestionMutation = {
  updateSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    name: string,
    email?: string | null,
    suggestion: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSuggestionMutationVariables = {
  input: DeleteSuggestionInput,
  condition?: ModelSuggestionConditionInput | null,
};

export type DeleteSuggestionMutation = {
  deleteSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    name: string,
    email?: string | null,
    suggestion: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type CreateVideoMutation = {
  createVideo?:  {
    __typename: "Video",
    id: string,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type UpdateVideoMutation = {
  updateVideo?:  {
    __typename: "Video",
    id: string,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type DeleteVideoMutation = {
  deleteVideo?:  {
    __typename: "Video",
    id: string,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    owner?: string | null,
    vicinity?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    createdAt: string,
    postVideoId?: string | null,
    status?: string | null,
    placeId?: string | null,
    placeName?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    video?:  {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    owner?: string | null,
    vicinity?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    createdAt: string,
    postVideoId?: string | null,
    status?: string | null,
    placeId?: string | null,
    placeName?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    video?:  {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    owner?: string | null,
    vicinity?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    createdAt: string,
    postVideoId?: string | null,
    status?: string | null,
    placeId?: string | null,
    placeName?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    video?:  {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc:  {
      __typename: "Location",
      lat: number,
      lng: number,
    },
    address?: string | null,
    vicinity?: string | null,
    media?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc:  {
      __typename: "Location",
      lat: number,
      lng: number,
    },
    address?: string | null,
    vicinity?: string | null,
    media?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc:  {
      __typename: "Location",
      lat: number,
      lng: number,
    },
    address?: string | null,
    vicinity?: string | null,
    media?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateActionMutationVariables = {
  input: CreateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type CreateActionMutation = {
  createAction?:  {
    __typename: "Action",
    id: string,
    userId: string,
    badge?: boolean | null,
    code: string,
    name: string,
    points?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActionMutationVariables = {
  input: UpdateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type UpdateActionMutation = {
  updateAction?:  {
    __typename: "Action",
    id: string,
    userId: string,
    badge?: boolean | null,
    code: string,
    name: string,
    points?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActionMutationVariables = {
  input: DeleteActionInput,
  condition?: ModelActionConditionInput | null,
};

export type DeleteActionMutation = {
  deleteAction?:  {
    __typename: "Action",
    id: string,
    userId: string,
    badge?: boolean | null,
    code: string,
    name: string,
    points?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateActionTypeMutationVariables = {
  input: CreateActionTypeInput,
  condition?: ModelActionTypeConditionInput | null,
};

export type CreateActionTypeMutation = {
  createActionType?:  {
    __typename: "ActionType",
    id: string,
    code: string,
    name: string,
    points: number,
    badge?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActionTypeMutationVariables = {
  input: UpdateActionTypeInput,
  condition?: ModelActionTypeConditionInput | null,
};

export type UpdateActionTypeMutation = {
  updateActionType?:  {
    __typename: "ActionType",
    id: string,
    code: string,
    name: string,
    points: number,
    badge?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActionTypeMutationVariables = {
  input: DeleteActionTypeInput,
  condition?: ModelActionTypeConditionInput | null,
};

export type DeleteActionTypeMutation = {
  deleteActionType?:  {
    __typename: "ActionType",
    id: string,
    code: string,
    name: string,
    points: number,
    badge?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type SyncSuggestionsQueryVariables = {
  filter?: ModelSuggestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSuggestionsQuery = {
  syncSuggestions?:  {
    __typename: "ModelSuggestionConnection",
    items?:  Array< {
      __typename: "Suggestion",
      id: string,
      name: string,
      email?: string | null,
      suggestion: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSuggestionQueryVariables = {
  id: string,
};

export type GetSuggestionQuery = {
  getSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    name: string,
    email?: string | null,
    suggestion: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSuggestionsQueryVariables = {
  filter?: ModelSuggestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSuggestionsQuery = {
  listSuggestions?:  {
    __typename: "ModelSuggestionConnection",
    items?:  Array< {
      __typename: "Suggestion",
      id: string,
      name: string,
      email?: string | null,
      suggestion: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      picture?: string | null,
      homeLocationName?: string | null,
      homeLocationGeo?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      points?: number | null,
      postCount?: number | null,
      uniquePlaces?: Array< string | null > | null,
      email?: string | null,
      searchKey?:  {
        __typename: "SearchKey",
        id: string,
        key: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      username?: string | null,
      picture?: string | null,
      homeLocationName?: string | null,
      homeLocationGeo?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      points?: number | null,
      postCount?: number | null,
      uniquePlaces?: Array< string | null > | null,
      email?: string | null,
      searchKey?:  {
        __typename: "SearchKey",
        id: string,
        key: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo?:  {
    __typename: "Video",
    id: string,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos?:  {
    __typename: "ModelVideoConnection",
    items?:  Array< {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVideosQuery = {
  syncVideos?:  {
    __typename: "ModelVideoConnection",
    items?:  Array< {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    owner?: string | null,
    vicinity?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    createdAt: string,
    postVideoId?: string | null,
    status?: string | null,
    placeId?: string | null,
    placeName?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    video?:  {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      owner?: string | null,
      vicinity?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      createdAt: string,
      postVideoId?: string | null,
      status?: string | null,
      placeId?: string | null,
      placeName?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      video?:  {
        __typename: "Video",
        id: string,
        status?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      place?:  {
        __typename: "Place",
        id: string,
        name: string,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        address?: string | null,
        vicinity?: string | null,
        media?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PostsByUserIdQueryVariables = {
  owner?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIdQuery = {
  postsByUserId?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      owner?: string | null,
      vicinity?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      createdAt: string,
      postVideoId?: string | null,
      status?: string | null,
      placeId?: string | null,
      placeName?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      video?:  {
        __typename: "Video",
        id: string,
        status?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      place?:  {
        __typename: "Place",
        id: string,
        name: string,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        address?: string | null,
        vicinity?: string | null,
        media?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PostsByPlaceIdQueryVariables = {
  placeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByPlaceIdQuery = {
  postsByPlaceId?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      owner?: string | null,
      vicinity?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      createdAt: string,
      postVideoId?: string | null,
      status?: string | null,
      placeId?: string | null,
      placeName?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      video?:  {
        __typename: "Video",
        id: string,
        status?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      place?:  {
        __typename: "Place",
        id: string,
        name: string,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        address?: string | null,
        vicinity?: string | null,
        media?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PostsByVideoIdQueryVariables = {
  postVideoId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByVideoIdQuery = {
  postsByVideoId?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      owner?: string | null,
      vicinity?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      createdAt: string,
      postVideoId?: string | null,
      status?: string | null,
      placeId?: string | null,
      placeName?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      video?:  {
        __typename: "Video",
        id: string,
        status?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      place?:  {
        __typename: "Place",
        id: string,
        name: string,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        address?: string | null,
        vicinity?: string | null,
        media?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      owner?: string | null,
      vicinity?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc?:  {
        __typename: "Location",
        lat: number,
        lng: number,
      } | null,
      createdAt: string,
      postVideoId?: string | null,
      status?: string | null,
      placeId?: string | null,
      placeName?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
      video?:  {
        __typename: "Video",
        id: string,
        status?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      place?:  {
        __typename: "Place",
        id: string,
        name: string,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        address?: string | null,
        vicinity?: string | null,
        media?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc:  {
      __typename: "Location",
      lat: number,
      lng: number,
    },
    address?: string | null,
    vicinity?: string | null,
    media?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items?:  Array< {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlacesQuery = {
  syncPlaces?:  {
    __typename: "ModelPlaceConnection",
    items?:  Array< {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActionQueryVariables = {
  id: string,
};

export type GetActionQuery = {
  getAction?:  {
    __typename: "Action",
    id: string,
    userId: string,
    badge?: boolean | null,
    code: string,
    name: string,
    points?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActionsQueryVariables = {
  filter?: ModelActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionsQuery = {
  listActions?:  {
    __typename: "ModelActionConnection",
    items?:  Array< {
      __typename: "Action",
      id: string,
      userId: string,
      badge?: boolean | null,
      code: string,
      name: string,
      points?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ActionsByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActionsByUserIdQuery = {
  actionsByUserId?:  {
    __typename: "ModelActionConnection",
    items?:  Array< {
      __typename: "Action",
      id: string,
      userId: string,
      badge?: boolean | null,
      code: string,
      name: string,
      points?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncActionsQueryVariables = {
  filter?: ModelActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActionsQuery = {
  syncActions?:  {
    __typename: "ModelActionConnection",
    items?:  Array< {
      __typename: "Action",
      id: string,
      userId: string,
      badge?: boolean | null,
      code: string,
      name: string,
      points?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActionTypeQueryVariables = {
  id: string,
};

export type GetActionTypeQuery = {
  getActionType?:  {
    __typename: "ActionType",
    id: string,
    code: string,
    name: string,
    points: number,
    badge?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActionTypesQueryVariables = {
  filter?: ModelActionTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionTypesQuery = {
  listActionTypes?:  {
    __typename: "ModelActionTypeConnection",
    items?:  Array< {
      __typename: "ActionType",
      id: string,
      code: string,
      name: string,
      points: number,
      badge?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ActionByCodeQueryVariables = {
  code?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActionTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActionByCodeQuery = {
  actionByCode?:  {
    __typename: "ModelActionTypeConnection",
    items?:  Array< {
      __typename: "ActionType",
      id: string,
      code: string,
      name: string,
      points: number,
      badge?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncActionTypesQueryVariables = {
  filter?: ModelActionTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActionTypesQuery = {
  syncActionTypes?:  {
    __typename: "ModelActionTypeConnection",
    items?:  Array< {
      __typename: "ActionType",
      id: string,
      code: string,
      name: string,
      points: number,
      badge?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSuggestionSubscription = {
  onCreateSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    name: string,
    email?: string | null,
    suggestion: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSuggestionSubscription = {
  onUpdateSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    name: string,
    email?: string | null,
    suggestion: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSuggestionSubscription = {
  onDeleteSuggestion?:  {
    __typename: "Suggestion",
    id: string,
    name: string,
    email?: string | null,
    suggestion: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    username?: string | null,
    picture?: string | null,
    homeLocationName?: string | null,
    homeLocationGeo?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    points?: number | null,
    postCount?: number | null,
    uniquePlaces?: Array< string | null > | null,
    email?: string | null,
    searchKey?:  {
      __typename: "SearchKey",
      id: string,
      key: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items?:  Array< {
        __typename: "Action",
        id: string,
        userId: string,
        badge?: boolean | null,
        code: string,
        name: string,
        points?: number | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo?:  {
    __typename: "Video",
    id: string,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo?:  {
    __typename: "Video",
    id: string,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo?:  {
    __typename: "Video",
    id: string,
    status?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    owner?: string | null,
    vicinity?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    createdAt: string,
    postVideoId?: string | null,
    status?: string | null,
    placeId?: string | null,
    placeName?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    video?:  {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    owner?: string | null,
    vicinity?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    createdAt: string,
    postVideoId?: string | null,
    status?: string | null,
    placeId?: string | null,
    placeName?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    video?:  {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    owner?: string | null,
    vicinity?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc?:  {
      __typename: "Location",
      lat: number,
      lng: number,
    } | null,
    createdAt: string,
    postVideoId?: string | null,
    status?: string | null,
    placeId?: string | null,
    placeName?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
    video?:  {
      __typename: "Video",
      id: string,
      status?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    place?:  {
      __typename: "Place",
      id: string,
      name: string,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      _geoloc:  {
        __typename: "Location",
        lat: number,
        lng: number,
      },
      address?: string | null,
      vicinity?: string | null,
      media?: string | null,
      tags?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null,
  } | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc:  {
      __typename: "Location",
      lat: number,
      lng: number,
    },
    address?: string | null,
    vicinity?: string | null,
    media?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc:  {
      __typename: "Location",
      lat: number,
      lng: number,
    },
    address?: string | null,
    vicinity?: string | null,
    media?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    _geoloc:  {
      __typename: "Location",
      lat: number,
      lng: number,
    },
    address?: string | null,
    vicinity?: string | null,
    media?: string | null,
    tags?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        owner?: string | null,
        vicinity?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        createdAt: string,
        postVideoId?: string | null,
        status?: string | null,
        placeId?: string | null,
        placeName?: string | null,
        tags?: Array< string | null > | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateActionSubscription = {
  onCreateAction?:  {
    __typename: "Action",
    id: string,
    userId: string,
    badge?: boolean | null,
    code: string,
    name: string,
    points?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActionSubscription = {
  onUpdateAction?:  {
    __typename: "Action",
    id: string,
    userId: string,
    badge?: boolean | null,
    code: string,
    name: string,
    points?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActionSubscription = {
  onDeleteAction?:  {
    __typename: "Action",
    id: string,
    userId: string,
    badge?: boolean | null,
    code: string,
    name: string,
    points?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateActionTypeSubscription = {
  onCreateActionType?:  {
    __typename: "ActionType",
    id: string,
    code: string,
    name: string,
    points: number,
    badge?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActionTypeSubscription = {
  onUpdateActionType?:  {
    __typename: "ActionType",
    id: string,
    code: string,
    name: string,
    points: number,
    badge?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActionTypeSubscription = {
  onDeleteActionType?:  {
    __typename: "ActionType",
    id: string,
    code: string,
    name: string,
    points: number,
    badge?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
