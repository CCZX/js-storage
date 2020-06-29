import { JSLocalStorage } from './../../src'

// set a object
JSLocalStorage.set('a', {foo: [1,2,3]})
const a = JSLocalStorage.get('a')
console.log(a, typeof a)

// no set
const b = JSLocalStorage.get('b')
console.log(b, typeof b)

// set a number
JSLocalStorage.set('c', 123)
const c = JSLocalStorage.get('c')
console.log(c, typeof c)

// set a string
JSLocalStorage.set('d', '123')
const d = JSLocalStorage.get('d')
console.log(d, typeof d)

// set a array
JSLocalStorage.set('e', [1, 2, 3])
const e = JSLocalStorage.get('e')
console.log(e, typeof e)

// get keys
const keys = JSLocalStorage.keys()
console.log('localstorage keys:', keys)

// has key
const hasA = JSLocalStorage.has('a')
console.log('hasA', hasA)

const hasAA = JSLocalStorage.has('aa')
console.log('hasAA', hasAA)

// remove and removeAll
JSLocalStorage.reomve('a')
const afterRemoveKeys = JSLocalStorage.keys()
console.log('localstorage afterRemoveKeys keys:', afterRemoveKeys)

JSLocalStorage.removeAll()
const afterRemoveAllKeys = JSLocalStorage.keys()
console.log('localstorage afterRemoveAllKeys keys:', afterRemoveAllKeys)
