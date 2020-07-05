import { DEFAULT_EXPIRES } from './../const'
import { CookieRemainArgs } from './../utils/types'

const CURRENT_DOMAIN = window.location.origin

const illegalKeyReg = /^(?:expires|max\-age|path|domain|secure)$/i

const DEFAULT_ARGS: CookieRemainArgs = {
  expires: DEFAULT_EXPIRES.cookie,
  path: '/',
  domain: window.location.hostname,
  secure: true
}

class JSCookie {
  set(key: string, value: any, args: CookieRemainArgs = DEFAULT_ARGS) {
    if (!key || illegalKeyReg.test(key)) return
    const { expires, path, domain, secure } = args
    document.cookie = `${key}=${value}; ${expires ? '' : ''}`
  }

  get(key: string, path: string, domain: string) {

  }
}


export default new JSCookie()
