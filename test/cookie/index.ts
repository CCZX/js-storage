import { JSCookie } from './../../src'
import storages from './../../src'

JSCookie.set('test1', 'test1', {expires: 1000*60*60*24*30})
JSCookie.set('test2', 'test2', {expires: 1000*60*60*24*30, path: '/', domain: 'www.baidu.com', secure: true})
JSCookie.set('test3=;', 'test2', {
  expires: 1000*60*60*24*30,
  path: '/',
  // domain: 'www.baidu.com'
})
