/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImageRecord = /* GraphQL */ `
  mutation CreateImageRecord(
    $input: CreateImageRecordInput!
    $condition: ModelImageRecordConditionInput
  ) {
    createImageRecord(input: $input, condition: $condition) {
      id
      filepath
      labels
      createdAt
      updatedAt
      owner
    }
  }
`
export const updateImageRecord = /* GraphQL */ `
  mutation UpdateImageRecord(
    $input: UpdateImageRecordInput!
    $condition: ModelImageRecordConditionInput
  ) {
    updateImageRecord(input: $input, condition: $condition) {
      id
      filepath
      labels
      createdAt
      updatedAt
      owner
    }
  }
`
export const deleteImageRecord = /* GraphQL */ `
  mutation DeleteImageRecord(
    $input: DeleteImageRecordInput!
    $condition: ModelImageRecordConditionInput
  ) {
    deleteImageRecord(input: $input, condition: $condition) {
      id
      filepath
      labels
      createdAt
      updatedAt
      owner
    }
  }
`
