import { isType, NATIVE_DATA_TYPE } from './../utils/isTypes'
import { timeValueSeparate } from './../const'

// 默认一天时间过期
const DEFAULT_EXPIRES = 1000 * 60 * 60 * 24

type storageValue = string | object | any[] | number

let localStorage: Storage = window.localStorage

function _hasKeys(key: string): boolean {
  const localStorageKeys: string[] = Object.keys(localStorage)
  return localStorageKeys.indexOf(key) !== -1
}

const JSLocalStorage = {
  /**
   * 
   * @param key 
   * @param cb 执行成功的回调函数
   */
  get(key: string, cb?: (...arg: any) => any) {
    if (!_hasKeys(key)) return null
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
   * 
   * @param key 
   * @param value 
   * @param time 过期时间：毫秒单位
   * @param cb 
   */
  set(key: string, value: storageValue, time: number = DEFAULT_EXPIRES, cb?: (...arg: any) => any) {
    if (!isType(NATIVE_DATA_TYPE.String)(key)) return
    const expires: number = Date.now() + time
    const res = {
      expires,
      value
    }
    const strValue = JSON.stringify(res)
    localStorage.setItem(key, strValue)
  },
  reomve(key: string) {
    localStorage.removeItem(key)
  }
}

export default JSLocalStorage
