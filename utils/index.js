/**
 * @method 判断是否是处于移动端
 * @param null
 * @return [true|false]
 */
export const isPhone = () => {
  const width = document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 781) {
    return true;
  }
  return false;
}
export const myBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i)) {
    // wechat
    return 'wechat';
  }
  if (ua.match(/ qq\//i)) {
    // qq浏览器
    return 'qq';
  }
  return ''
}

export const getDay = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month < 10 ? ('0' + month) : month;
  let day = today.getDate();
  day = day < 10 ? ('0' + day) : day;
  return `${year}-${month}-${day}`;
}

export const getDateTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month < 10 ? ('0' + month) : month;
  let day = today.getDate();
  day = day < 10 ? ('0' + day) : day;
  let hour = today.getHours();
  hour = hour < 10 ? ('0' + hour) : hour;
  let min = today.getMinutes();
  min = min < 10 ? ('0' + min) : min;
  let second = today.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  return `${year}-${month}-${day} ${hour}:${min}:${second}`;
}

/**
 * @description 缓存函数，优化字符串计算
 * @param {function} fn 
 * @returns {function} 
 */ 
const cached = (fn) => {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

const trimString = cached((str) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
})

export const parseCookie = (cookies) => {
  if(typeof cookies !== 'string') return {}
  const CookieItemList = cookies.split(';').map(item => {
    const emtyObj = {}
    let trimItem = trimString(item)
    let itemKV = trimItem.split('=')
    emtyObj[itemKV[0]] = itemKV[1]
    return emtyObj
  })
  let cookieJson = {}
  CookieItemList.forEach(cookie => {
    cookieJson = {...cookieJson, ...cookie}
  })
  return cookieJson
}