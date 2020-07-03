import { JSSessionStorage } from './../../src'

// set a object
JSSessionStorage.set('a', {foo: [1,2,3]})
const a = JSSessionStorage.get('a')
console.log(a, typeof a)

// no set
const b = JSSessionStorage.get('b')
console.log(b, typeof b)

// set a number
JSSessionStorage.set('c', 123)
const c = JSSessionStorage.get('c')
console.log(c, typeof c)

// set a string
JSSessionStorage.set('d', '123')
const d = JSSessionStorage.get('d')
console.log(d, typeof d)

// set a array
JSSessionStorage.set('e', [1, 2, 3])
const e = JSSessionStorage.get('e')
console.log(e, typeof e)

// get keys
const keys = JSSessionStorage.keys()
console.log('sessionStorage keys:', keys)

// has key
// const hasA = JSSessionStorage.has('a')
// console.log('hasA', hasA)

// const hasAA = JSSessionStorage.has('aa')
// console.log('hasAA', hasAA)

// remove and removeAll
JSSessionStorage.reomve('a')
const afterRemoveKeys = JSSessionStorage.keys()
console.log('sessionStorage afterRemoveKeys keys:', afterRemoveKeys)

JSSessionStorage.removeAll()
const afterRemoveAllKeys = JSSessionStorage.keys()
console.log('sessionStorage afterRemoveAllKeys keys:', afterRemoveAllKeys)

/**
 * 
 */
JSSessionStorage.set('a')

