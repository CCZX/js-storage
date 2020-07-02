// 一天的毫秒
const DAY_MS = 1000 * 60 * 60 * 24

// 过期时间与值的特殊分隔符
export const TIME_VALUE_SEPARATE = 'é¾–'

// storage默认缓存时间
export const DEFAULT_EXPIRES = {
  // Storage默认永远有效
  storage: Infinity,
  // cookie默认有效期一周
  cookie: DAY_MS * 7
}
