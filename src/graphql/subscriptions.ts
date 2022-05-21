/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImageRecord = /* GraphQL */ `
  subscription OnCreateImageRecord($owner: String) {
    onCreateImageRecord(owner: $owner) {
      id
      filepath
      labels
      createdAt
      updatedAt
      owner
    }
  }
`
export const onUpdateImageRecord = /* GraphQL */ `
  subscription OnUpdateImageRecord($owner: String) {
    onUpdateImageRecord(owner: $owner) {
      id
      filepath
      labels
      createdAt
      updatedAt
      owner
    }
  }
`
export const onDeleteImageRecord = /* GraphQL */ `
  subscription OnDeleteImageRecord($owner: String) {
    onDeleteImageRecord(owner: $owner) {
      id
      filepath
      labels
      createdAt
      updatedAt
      owner
    }
  }
`
