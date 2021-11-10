/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
      name
      username
      picture
      homeLocationName
      homeLocationGeo {
        lat
        lng
      }
      points
      postCount
      uniquePlaces
      email
      searchKey {
        id
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      actions {
        items {
          id
          userId
          badge
          code
          name
          points
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile {
    deleteProfile {
      id
      name
      username
      picture
      homeLocationName
      homeLocationGeo {
        lat
        lng
      }
      points
      postCount
      uniquePlaces
      email
      searchKey {
        id
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      actions {
        items {
          id
          userId
          badge
          code
          name
          points
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createSuggestion = /* GraphQL */ `
  mutation CreateSuggestion(
    $input: CreateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    createSuggestion(input: $input, condition: $condition) {
      id
      name
      email
      suggestion
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSuggestion = /* GraphQL */ `
  mutation UpdateSuggestion(
    $input: UpdateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    updateSuggestion(input: $input, condition: $condition) {
      id
      name
      email
      suggestion
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSuggestion = /* GraphQL */ `
  mutation DeleteSuggestion(
    $input: DeleteSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    deleteSuggestion(input: $input, condition: $condition) {
      id
      name
      email
      suggestion
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      username
      picture
      homeLocationName
      homeLocationGeo {
        lat
        lng
      }
      points
      postCount
      uniquePlaces
      email
      searchKey {
        id
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      actions {
        items {
          id
          userId
          badge
          code
          name
          points
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      username
      picture
      homeLocationName
      homeLocationGeo {
        lat
        lng
      }
      points
      postCount
      uniquePlaces
      email
      searchKey {
        id
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      actions {
        items {
          id
          userId
          badge
          code
          name
          points
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      username
      picture
      homeLocationName
      homeLocationGeo {
        lat
        lng
      }
      points
      postCount
      uniquePlaces
      email
      searchKey {
        id
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      actions {
        items {
          id
          userId
          badge
          code
          name
          points
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      owner
      vicinity
      city
      state
      zip
      _geoloc {
        lat
        lng
      }
      createdAt
      postVideoId
      status
      placeId
      placeName
      tags
      _version
      _deleted
      _lastChangedAt
      updatedAt
      video {
        id
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      place {
        id
        name
        city
        state
        zip
        _geoloc {
          lat
          lng
        }
        address
        vicinity
        media
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
        owner
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      owner
      vicinity
      city
      state
      zip
      _geoloc {
        lat
        lng
      }
      createdAt
      postVideoId
      status
      placeId
      placeName
      tags
      _version
      _deleted
      _lastChangedAt
      updatedAt
      video {
        id
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      place {
        id
        name
        city
        state
        zip
        _geoloc {
          lat
          lng
        }
        address
        vicinity
        media
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
        owner
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      owner
      vicinity
      city
      state
      zip
      _geoloc {
        lat
        lng
      }
      createdAt
      postVideoId
      status
      placeId
      placeName
      tags
      _version
      _deleted
      _lastChangedAt
      updatedAt
      video {
        id
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      place {
        id
        name
        city
        state
        zip
        _geoloc {
          lat
          lng
        }
        address
        vicinity
        media
        tags
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        posts {
          nextToken
          startedAt
        }
        owner
      }
    }
  }
`;
export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
      id
      name
      city
      state
      zip
      _geoloc {
        lat
        lng
      }
      address
      vicinity
      media
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
      id
      name
      city
      state
      zip
      _geoloc {
        lat
        lng
      }
      address
      vicinity
      media
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
      id
      name
      city
      state
      zip
      _geoloc {
        lat
        lng
      }
      address
      vicinity
      media
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          owner
          vicinity
          city
          state
          zip
          createdAt
          postVideoId
          status
          placeId
          placeName
          tags
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
      id
      userId
      badge
      code
      name
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
      id
      userId
      badge
      code
      name
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
      id
      userId
      badge
      code
      name
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createActionType = /* GraphQL */ `
  mutation CreateActionType(
    $input: CreateActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    createActionType(input: $input, condition: $condition) {
      id
      code
      name
      points
      badge
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateActionType = /* GraphQL */ `
  mutation UpdateActionType(
    $input: UpdateActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    updateActionType(input: $input, condition: $condition) {
      id
      code
      name
      points
      badge
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteActionType = /* GraphQL */ `
  mutation DeleteActionType(
    $input: DeleteActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    deleteActionType(input: $input, condition: $condition) {
      id
      code
      name
      points
      badge
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
