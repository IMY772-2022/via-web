/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateImageRecordInput = {
  id?: string | null
  userId: string
  filepath?: string | null
  labels: string
}

export type ModelImageRecordConditionInput = {
  userId?: ModelIDInput | null
  filepath?: ModelStringInput | null
  labels?: ModelStringInput | null
  and?: Array<ModelImageRecordConditionInput | null> | null
  or?: Array<ModelImageRecordConditionInput | null> | null
  not?: ModelImageRecordConditionInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

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
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type ImageRecord = {
  __typename: "ImageRecord"
  id: string
  userId: string
  filepath?: string | null
  labels: string
  createdAt: string
  updatedAt: string
}

export type UpdateImageRecordInput = {
  id: string
  userId?: string | null
  filepath?: string | null
  labels?: string | null
}

export type DeleteImageRecordInput = {
  id: string
}

export type ModelImageRecordFilterInput = {
  id?: ModelIDInput | null
  userId?: ModelIDInput | null
  filepath?: ModelStringInput | null
  labels?: ModelStringInput | null
  and?: Array<ModelImageRecordFilterInput | null> | null
  or?: Array<ModelImageRecordFilterInput | null> | null
  not?: ModelImageRecordFilterInput | null
}

export type ModelImageRecordConnection = {
  __typename: "ModelImageRecordConnection"
  items: Array<ImageRecord | null>
  nextToken?: string | null
}

export type CreateImageRecordMutationVariables = {
  input: CreateImageRecordInput
  condition?: ModelImageRecordConditionInput | null
}

export type CreateImageRecordMutation = {
  createImageRecord?: {
    __typename: "ImageRecord"
    id: string
    userId: string
    filepath?: string | null
    labels: string
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateImageRecordMutationVariables = {
  input: UpdateImageRecordInput
  condition?: ModelImageRecordConditionInput | null
}

export type UpdateImageRecordMutation = {
  updateImageRecord?: {
    __typename: "ImageRecord"
    id: string
    userId: string
    filepath?: string | null
    labels: string
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteImageRecordMutationVariables = {
  input: DeleteImageRecordInput
  condition?: ModelImageRecordConditionInput | null
}

export type DeleteImageRecordMutation = {
  deleteImageRecord?: {
    __typename: "ImageRecord"
    id: string
    userId: string
    filepath?: string | null
    labels: string
    createdAt: string
    updatedAt: string
  } | null
}

export type GetImageRecordQueryVariables = {
  id: string
}

export type GetImageRecordQuery = {
  getImageRecord?: {
    __typename: "ImageRecord"
    id: string
    userId: string
    filepath?: string | null
    labels: string
    createdAt: string
    updatedAt: string
  } | null
}

export type ListImageRecordsQueryVariables = {
  filter?: ModelImageRecordFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListImageRecordsQuery = {
  listImageRecords?: {
    __typename: "ModelImageRecordConnection"
    items: Array<{
      __typename: "ImageRecord"
      id: string
      userId: string
      filepath?: string | null
      labels: string
      createdAt: string
      updatedAt: string
    } | null>
    nextToken?: string | null
  } | null
}

export type OnCreateImageRecordSubscription = {
  onCreateImageRecord?: {
    __typename: "ImageRecord"
    id: string
    userId: string
    filepath?: string | null
    labels: string
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateImageRecordSubscription = {
  onUpdateImageRecord?: {
    __typename: "ImageRecord"
    id: string
    userId: string
    filepath?: string | null
    labels: string
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteImageRecordSubscription = {
  onDeleteImageRecord?: {
    __typename: "ImageRecord"
    id: string
    userId: string
    filepath?: string | null
    labels: string
    createdAt: string
    updatedAt: string
  } | null
}
