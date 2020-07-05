import JSLocalStorage from './storage/local'
import JSSessionStorage from './storage/session'
import JSCookie from './cookie'

export { default as JSLocalStorage } from './storage/local'
export { default as JSSessionStorage } from './storage/session'
export { default as JSCookie } from './cookie'

const storages = {
  JSLocalStorage,
  JSSessionStorage,
  JSCookie
} as any

export default storages
