import { JSLocalStorage } from './../../src'

JSLocalStorage.set('a', {foo: [1,2,3]})
const a = JSLocalStorage.get('a')
console.log(a)

const b = JSLocalStorage.get('b')
console.log(b)

JSLocalStorage.set('c', 123)
const c = JSLocalStorage.get('c')
console.log(c, typeof c)

JSLocalStorage.set('d', '123')
const d = JSLocalStorage.get('d')
console.log(d, typeof d)
