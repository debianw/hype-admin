/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSuggestion = /* GraphQL */ `
  subscription OnCreateSuggestion {
    onCreateSuggestion {
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
export const onUpdateSuggestion = /* GraphQL */ `
  subscription OnUpdateSuggestion {
    onUpdateSuggestion {
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
export const onDeleteSuggestion = /* GraphQL */ `
  subscription OnDeleteSuggestion {
    onDeleteSuggestion {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace {
    onCreatePlace {
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace {
    onUpdatePlace {
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace {
    onDeletePlace {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction {
    onCreateAction {
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
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction {
    onUpdateAction {
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
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction {
    onDeleteAction {
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
export const onCreateActionType = /* GraphQL */ `
  subscription OnCreateActionType {
    onCreateActionType {
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
export const onUpdateActionType = /* GraphQL */ `
  subscription OnUpdateActionType {
    onUpdateActionType {
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
export const onDeleteActionType = /* GraphQL */ `
  subscription OnDeleteActionType {
    onDeleteActionType {
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
