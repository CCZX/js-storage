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

  /**
   * 计算过期时间
   * @param expires 
   */
  private computedExpires(expires: number | Date | undefined | null) {
    if (isType(NativeDataType.Date)(expires)) {
      return (expires as Date).toUTCString()
    } else if (isType(NativeDataType.Number)(expires)) {
      const nowTime = Date.now()
      const expiresTime = nowTime + (expires as number)
      return new Date(expiresTime).toUTCString()
    } else if (isType(NativeDataType.String)(expires)) {
      
    } else {
      return expires
    }
  }

  set(key: string, value: any, args: CookieRemainArgs) {
    if (!key || illegalKeyReg.test(key)) return
    const { expires, path, domain, secure } = args
    const expiresDate = this.computedExpires(expires)
    const cookieStr = `${encodeURIComponent(key)}=${encodeURIComponent(value)};${expires ? `expires=${expiresDate};` : ''}${path ? `path=${path};` : ''}${domain ? `domain=${domain};` : ''}${secure ? `secure` : ''}`
    document.cookie = cookieStr
  }

  get(key: string) {
    return decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          "(?:(?:^|.*;)\\s*" +
          encodeURIComponent(key).
          replace(/[-.+*]/g, "\\$&") +
          "\\s*\\=\\s*([^;]*).*$)|^.*$"
        ), "$1"
      )
    ) || null;
  }

  remove(key: string, path?: string, domain?: string) {
    if (!key || !this.has(key)) return
    document.cookie = encodeURIComponent(key) +
      "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
      ( domain ? "; domain=" + domain : "") +
      ( path ? "; path=" + path : "")
    return key
  }

  removeAll() {
    const keys = this.keys()
    keys.forEach(key => {
      this.remove(key)
    })
    return true
  }

  has(key: string) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)
  }

  keys() {
    const keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
    for (let index = 0; index < keys.length; index++) {
      keys[index] = decodeURIComponent(keys[index])
    }
    return keys
  }
}

const JSCookie: Cookie = new Cookie()

export default JSCookie
