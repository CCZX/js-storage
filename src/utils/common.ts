import { NativeDataType, StorageType } from './types'

/**
 * 获取localStorage、sessionStorage的键
 * @param type StorageType
 */
export function getStorageKeys(type: StorageType): string[] {
  const storageKeys: string[] = Object.keys(window[type])
  return storageKeys
}

/**
 * 判断localStorage、sessionStorage是否含有某个键
 * @param key string
 * @param storage StorageType
 */
export function storageHasKey(key: string, storage: StorageType): boolean {
  const storageKeys = getStorageKeys(storage)
  return storageKeys.indexOf(key) !== -1
}

export function isType(type: NativeDataType) {
  return (arg: any): boolean => {
    return Object.prototype.toString.call(arg) === `[object ${type}]`
  }
}

export function getType(arg: any) {
  
}
