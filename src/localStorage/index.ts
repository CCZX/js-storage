import { getStorageKeys, storageHasKey, isType } from './../utils/common'
import { StorageType, NativeDataType } from './../utils/types'

// 默认一天时间过期
const DEFAULT_EXPIRES = 1000 * 60 * 60 * 24
const currentStorage = StorageType.localStorage
const localStorage: Storage = window.localStorage
type storageValue = string | object | any[] | number

const JSLocalStorage = {

  /**
   * 根据key获取某个storage项
   * @param key 
   * @param cb 执行成功的回调函数
   */
  get(key: string, cb?: (...arg: any) => any) {
    if (!storageHasKey(key, currentStorage)) return null
    try {
      const { expires, value } = JSON.parse(localStorage.getItem(key) as string)
      const nowDate = Date.now()
      if (nowDate > Number(expires)) {
        this.reomve(key)
        return 'Resource expired!!!'
      }
      return value
    } catch (error) {
      return error
    }
    
  },

  /**
   * 设置某个storage项
   * @param key 
   * @param value 
   * @param time 过期时间：毫秒单位
   * @param cb 
   */
  set(key: string, value: storageValue, time: number = DEFAULT_EXPIRES, cb?: (...arg: any) => any) {
    if (!isType(NativeDataType.String)(key)) return
    const expires: number = Date.now() + time
    const res = {
      expires,
      value
    }
    const strValue = JSON.stringify(res)
    localStorage.setItem(key, strValue)
  },

  /**
   * 根据key删除某个storage项
   * @param key string
   */
  reomve(key: string) {
    const val = this.get(key)
    localStorage.removeItem(key)
    return val
  },

  /**
   * 删除所有storage项
   */
  removeAll() {
    const keys: string[] = getStorageKeys(currentStorage)
    keys.forEach(key => {
      this.reomve(key)
    })
    return true
  },

  /**
   * 是否包含某个storage项
   * @param key 
   */
  has(key: string): boolean {
    return storageHasKey(key, currentStorage)
  },

  keys(): string[] {
    return getStorageKeys(currentStorage)
  }
}

export default JSLocalStorage
