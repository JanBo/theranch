/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustome = /* GraphQL */ `
  mutation CreateCustome(
    $input: CreateCustomeInput!
    $condition: ModelCustomeConditionInput
  ) {
    createCustome(input: $input, condition: $condition) {
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
export const updateCustome = /* GraphQL */ `
  mutation UpdateCustome(
    $input: UpdateCustomeInput!
    $condition: ModelCustomeConditionInput
  ) {
    updateCustome(input: $input, condition: $condition) {
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
export const deleteCustome = /* GraphQL */ `
  mutation DeleteCustome(
    $input: DeleteCustomeInput!
    $condition: ModelCustomeConditionInput
  ) {
    deleteCustome(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
