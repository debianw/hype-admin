/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile {
    getProfile {
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
export const syncSuggestions = /* GraphQL */ `
  query SyncSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSuggestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSuggestion = /* GraphQL */ `
  query GetSuggestion($id: ID!) {
    getSuggestion(id: $id) {
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
export const listSuggestions = /* GraphQL */ `
  query ListSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          startedAt
        }
        actions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
        actions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVideos = /* GraphQL */ `
  query SyncVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          address
          vicinity
          media
          tags
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const postsByUserId = /* GraphQL */ `
  query PostsByUserId(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserId(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          address
          vicinity
          media
          tags
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const postsByPlaceId = /* GraphQL */ `
  query PostsByPlaceId(
    $placeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByPlaceId(
      placeId: $placeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          address
          vicinity
          media
          tags
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const postsByVideoId = /* GraphQL */ `
  query PostsByVideoId(
    $postVideoId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByVideoId(
      postVideoId: $postVideoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          address
          vicinity
          media
          tags
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          address
          vicinity
          media
          tags
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
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
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPlaces = /* GraphQL */ `
  query SyncPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
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
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const actionsByUserId = /* GraphQL */ `
  query ActionsByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    actionsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const syncActions = /* GraphQL */ `
  query SyncActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
`;
export const getActionType = /* GraphQL */ `
  query GetActionType($id: ID!) {
    getActionType(id: $id) {
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
export const listActionTypes = /* GraphQL */ `
  query ListActionTypes(
    $filter: ModelActionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const actionByCode = /* GraphQL */ `
  query ActionByCode(
    $code: String
    $sortDirection: ModelSortDirection
    $filter: ModelActionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    actionByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncActionTypes = /* GraphQL */ `
  query SyncActionTypes(
    $filter: ModelActionTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActionTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
