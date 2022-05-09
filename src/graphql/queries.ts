/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageRecord = /* GraphQL */ `
  query GetImageRecord($id: ID!) {
    getImageRecord(id: $id) {
      id
      userId
      filepath
      labels
      createdAt
      updatedAt
    }
  }
`
export const listImageRecords = /* GraphQL */ `
  query ListImageRecords(
    $filter: ModelImageRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        filepath
        labels
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
