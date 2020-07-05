import { DEFAULT_EXPIRES } from './../const'
import { CookieRemainArgs, NativeDataType } from './../utils/types'
import { isType } from './../utils/common'

const CURRENT_DOMAIN = window.location.origin

const illegalKeyReg = /^(?:expires|max\-age|path|domain|secure)$/i

const DEFAULT_ARGS: CookieRemainArgs = {
  expires: DEFAULT_EXPIRES.cookie,
  path: '/',
  domain: window.location.hostname,
  secure: true
}

class Cookie {

  private handlerExpires(expires: number | Date | undefined | null) {
    if (isType(NativeDataType.Date)(expires)) {
      return (expires as Date).toUTCString()
    } else if (isType(NativeDataType.Number)(expires)) {
      const nowTime = Date.now()
      const expiresTime = nowTime + (expires as number)
      // const 
      return new Date(expiresTime)
    } else if (isType(NativeDataType.String)(expires)) {
      
    }
  }

  set(key: string, value: any, args: CookieRemainArgs = DEFAULT_ARGS) {
    if (!key || illegalKeyReg.test(key)) return
    const { expires, path, domain, secure } = args
    console.log({ expires, path, domain, secure })
    const res = this.handlerExpires(expires)
    console.log(res, 123)
    // document.cookie = `${key}=${value}; ${expires ? '' : ''}`
  }

  get(key: string, path: string, domain: string) {

  }
}

const JSCookie: Cookie = new Cookie()

export default JSCookie
