/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustome = /* GraphQL */ `
  subscription OnCreateCustome {
    onCreateCustome {
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
export const onUpdateCustome = /* GraphQL */ `
  subscription OnUpdateCustome {
    onUpdateCustome {
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
export const onDeleteCustome = /* GraphQL */ `
  subscription OnDeleteCustome {
    onDeleteCustome {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
