import JSLocalStorage from './storage/local'
import JSSessionStorage from './storage/session'

export { default as JSLocalStorage } from './storage/local'
export { default as JSSessionStorage } from './storage/session'

const storages = {
  JSLocalStorage,
  JSSessionStorage
}

export default storages
