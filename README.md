# js-storages

[![Build Status](https://travis-ci.org/CCZX/js-storage.svg?branch=master)](https://travis-ci.org/CCZX/js-storage)

`js-storages`是一个封装了`localStorage`、`sessionStorage`、`Cookie`对象的方法的`JavaScript`库。使用`js-storages`你可以简单、方便的对本地存储进行操作。

## 安装

```bash
npm install js-storages --save-dev
```

## 使用

```javascript
import storages from 'js-storages'

storages.JSLocalStorage.set('key', 'value')
storages.JSLocalStorage.get('key')
```
你也可以导入指定的操作模块
```javascript
import { JSLocalStorage } from 'js-storages'
```

## 具体方法

### `localStorage`、`sessionStorage`

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
