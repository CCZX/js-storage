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
