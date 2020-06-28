export enum NATIVE_DATA_TYPE {
  String = 'String',
  Number = 'Number',
  Undefined = 'Undefined',
  Array = 'Array',
  Object = 'Object',
  Function = 'Function'
}

export function isType(type: NATIVE_DATA_TYPE) {
  return (arg: any): boolean => {
    return Object.prototype.toString.call(arg) === `[object ${type}]`
  }
}
