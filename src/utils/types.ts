import { type } from "os";

export enum NativeDataType {
  String = 'String',
  Number = 'Number',
  Undefined = 'Undefined',
  Array = 'Array',
  Object = 'Object',
  Function = 'Function'
}

export enum StorageType {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage'
}

export type storageValue = string | object | any[] | number

export type CookieRemainArgs = {
  expires: number | null,
  path: string | null,
  domain: string | null,
  secure: boolean | null
}
