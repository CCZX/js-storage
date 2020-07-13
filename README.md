# js-storages
[![node version](https://badgen.net/npm/node/next)]() [![Build Status](https://travis-ci.org/CCZX/js-storage.svg?branch=master)](https://travis-ci.org/CCZX/js-storage) [![js-storages npm version](https://badgen.net/npm/v/js-storages)](https://www.npmjs.com/package/js-storages) [![js-storages weekly download](https://badgen.net/npm/dw/js-storages)](https://www.npmjs.com/package/js-storages)

`js-storages`是一个封装了`localStorage`、`sessionStorage`、`Cookie`对象的方法的`JavaScript`库。使用`js-storages`你可以简单、方便的对本地存储进行操作。

## 安装

```bash
npm install js-storages --save-dev
yarn add js-storages
```

## 使用

```javascript
import storages from 'js-storages'

storages.JSLocalStorage.set('key', 'value')
storages.JSLocalStorage.get('key')

storages.JSSessionStorage.set('key', 'value')
storages.JSSessionStorage.get('key')

storages.JSCookie.set('key', 'value', {
 " : 1000*60*60*24*30,
 " path: '/',
 " domain: 'www.baidu.com',
 " secure: true
})
storages.JSCookie.get('key')
```

你也可以导入指定指定模块后再进行操作
```javascript
import { JSLocalStorage, JSSessionStorage, JSCookie } from 'js-storages'
```

## 具体方法

### `localStorage`、`sessionStorage`
`HTML5`提供的`localStorage`和`sessionStorage`对象的`API`十分类似，只是在对值保存的生命周期上有所不同：[网址链接](https://juejin.im/post/5a191c47f265da43111fe859)，所以对`localStorage`和`sessionStorage`封装的`API`是相同的。

#### 1、set

在`Storage`中存储指定的值

> 语法：

```ts
JSLocalStorage.set(key, value[, time[, callback]])
```

> 参数：

**key** （必须，`string`）

所存储值的键

**value** （必须，`string | object | any[] | number`）

存储的值

**time**（可选，`number`）

存储值的过期时间，单位毫秒

**callback**（可选，`Function`）

执行成功的回调函数

#### 2、get

获取`Storage`中指定的值。

> 语法

```javascript
JSLocalStorage.get(key[, callback])
```

> 参数

**key** （必须，`string`）

根据`key`从`Storage`中获取对应的值。

**callback**（可选，`Function`）

执行成功的回调函数

#### 3、remove

删除`Storage`中指定的值。

> 语法

```javascript
JSLocalStorage.remove(key)
```
> 参数

**key** （必须，`string`）

根据`key`值从`Storage`中删除指定的值。

#### 4、removeAll

删除`Storage`中所有的值。

> 语法

```javascript
JSLocalStorage.removeAll()
```
#### 5、has

判断`Storage`中是否含有某个值。

> 语法

```javascript
JSLocalStorage.has(key)
```
> 参数

**key** （必须，`string`）

根据`key`值判断`Storage`中存在某个键

#### 6、keys

获取`Storage`中所有的键。

> 语法

```javascript
JSLocalStorage.keys()
```

### cookie

#### 1、set

> 语法：

```ts
JSCookie.set('test', 'value', {
  path: '/',
  expries: 1000 * 60
})
```

> 参数：

**key** [`string`]

必填字段，不能是：`path`、`expires`、`domain`等字段。

**value** [`any`]

必填字段，存储的值

**args** [`object`]

可选字段，额外的配置信息，包括`path`、`expires`、`domain`、`secure`。
```json
"expires": "cookie过期时间",
"path": "cookie存储的路径",
"domain": "cookie存储的域名",
"secure": "cookie只通过https协议传输"
```
