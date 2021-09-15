/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustome = /* GraphQL */ `
  query GetCustome($id: ID!) {
    getCustome(id: $id) {
      id
      name
      address
      phone
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      cust_orders {
        items {
          id
          order_date
          order
          paid
          price
          customeID
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
export const listCustomes = /* GraphQL */ `
  query ListCustomes(
    $filter: ModelCustomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        phone
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cust_orders {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomes = /* GraphQL */ `
  query SyncCustomes(
    $filter: ModelCustomeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        phone
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        cust_orders {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      order_date
      order
      paid
      price
      customeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        order_date
        order
        paid
        price
        customeID
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
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        order_date
        order
        paid
        price
        customeID
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
