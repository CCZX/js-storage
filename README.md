# js-storages

> 封装了一些对localStorage、sessionStorage、Cookie操作的方法

## 安装

`npm install js-storages -S`

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

### localstorage

#### 1、set

> 语法：

```ts
JSLocalStorage.set(key, value[, time[, callback]])
```

> 参数：

**key**，必须，`string`

存储值的

