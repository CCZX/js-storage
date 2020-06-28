import { isType, NATIVE_DATA_TYPE } from './../utils/isTypes'
import { timeValueSeparate } from './../const'

// let localStorage: Storage | null = null

// if (!localStorage) {
  let localStorage = window.localStorage
// }

function _hasKeys(key: string): boolean {
  const localStorageKeys: string[] = Object.keys(localStorage)
  return localStorageKeys.indexOf(key) !== -1
}

const JSLocalStorage = {
  /**
   * 
   * @param key 
   * @param parse 是否解析该获取到的值，"{"a":1}" => {a:1}
   * @param cb 执行成功的回调函数
   */
  get(key: string, parse?: boolean, cb?: (...arg: any) => any) {
    if (!_hasKeys(key)) return null
    const [expires, value] = localStorage?.getItem(key)?.split(timeValueSeparate) as string[]
    const nowDate = Date.now()
    if (nowDate > Number(expires)) {
      this.reomve(key)
      return 'Resource expired!!!'
    }
    if (!parse) {
      return value
    }
    let parseValue
    try {
      parseValue = JSON.parse(value as string)
    } catch (error) {
      return error
    }
    return parseValue
  },
  /**
   * 
   * @param key 
   * @param value 
   * @param time 过期时间：毫秒单位
   * @param cb 
   */
  set(key: string, value: string, time: number = 0, cb?: (...arg: any) => any) {
    if (!isType(NATIVE_DATA_TYPE.String)(key)) return
    const expires: number = Date.now() + time
    const res = {
      expires,
      value
    }
    // let strValue: string = value
    // // if (!isType(NATIVE_DATA_TYPE.String)(value)) {
    //   strValue = expires + timeValueSeparate + JSON.stringify(value)
    //   // strValue = JSON.stringify(value)
    //   // (strValue).expires
    // // }
    const strValue = JSON.stringify(res)
    localStorage?.setItem(key, strValue)
  },
  reomve(key: string) {
    localStorage?.removeItem(key)
  }
}

export default JSLocalStorage
