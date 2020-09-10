/**
 * 验证邮箱
 */
export const isEmail = (email) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email);
}

/**
 * 验证手机号码
 */
export const isMobile = (phone) => {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(phone);
}

/**
 * 验证电话号码
 */
export const isTelPhone = (phone) => {
  return /^0\d{2,3}-?\d{7,8}$^/.test(phone);
}

/**
 * 是否微信浏览器
 */
export const isWeiXin = () => {
  let ua = navigator.userAgent.toLowerCase();
  return ua.match(/microMessenger/i) == 'micromessenger'
}

/**
 * 是否移动端
 */
export const isDeviceMobile = () => {
  let ua = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

/**
 * 是否ios
 */
export const isIos = () => {
  let ua = navigator.userAgent.toLowerCase();
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
 * 是否安卓
 */
export const isAndroid = () => {
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}

/**
 * 是否PC
 */
export const isPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * 获取url参数
 */
export const getQueryString = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const search = window.location.search.split('?')[1] || '';
  const params = search.match(reg) || [];
  return params[2];
}

/**
 * 复制粘贴
 */
export const copyTextToClipboard = (value) => {
  var textArea = document.createElement("textarea");
  textArea.style.background = 'transparent';
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}


* 将金额转化为带单位的字符串
* @param {number} value
*/
export const formatterUnit = (value) => {
  return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 将带单位的金额转化为数字
 * @param {String} value 需要还原的金额
 */
export const parserUnit = (value) => {
  return value.replace(/\$\s?|(,*)/g, '');
}

/**
 * 将单词转换为首字母大写
 * @param {String} word 需要转化的单词
 */
export const wordUpper = (word) => {
  return word.replace(word[0], word[0].toUpperCase());
}

/**
 * 检查一个对象是否有子元素
 * @param {Object} item 检查的对象
 * @param {String} keyname 子元素的键名
 */
export const hasChildren = (item = {}, keyname = "children") => {
  return item[keyname] && Array.isArray(item[keyname]) && item[keyname].length > 0
}

/**
 * 获取当前页面的滚动位置
 * @param {Any}
 */
export const getScrollPosition = (el = window) => {
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  }
}

/**
 * 平滑滚动到页面顶部
 */
export const scrollToTop = () => {
  const offset = document.documentElement.scrollTop || document.body.scrollTop;
  if (offset > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, offset - offset / 8);
  }
}

/**
 * 表单元素转化为对象
 * @param {Object} form formToObject(document.querySelector('#form'))
 */
export const formToObject = (form) => {
  return Array.from(new FormData(form)).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value
  }), {}, );
}

/**
 * 获取数组交集
 * @param {array} list
 * @param {Any} args
 */
export const intersection = (list, ...args) => {
  return list.filter(item => args.every(list => list.includes(item)));
}

/**
 * 分割指定长度的元素数组
 * @param {Array} list
 * @param {number} size
 * @param {*}    cacheList
 */
export const listChunk = (list, size = 1, cacheList = []) => {
  const tmp = [...list];
  if (size <= 0) {
    return cacheList;
  }
  while (tmp.length) {
    cacheList.push(tmp.splice(0, size));
  }
  return cacheList;
}

/**
 *  判断是否是身份证号(第二代)
 * @param str
 * @returns {boolean}
 */
export const isIdCard = (str) => {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(str);
}

/**
 *  判断是否中文
 * @param str
 * @returns {boolean}
 */
export const isChina = (str) => {
  const reg = /^[\\u4E00-\\u9FA5]{2,4}$/;
  return reg.test(str);
}

/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString().substr(0, len || 4);
  if (date) random = random + Date.now();
  return random;
}

/**
 * 对象数组去重
 * @param {*} arr
 */
export const removalArr = (arr) => {
  return [...new Set(arr.map(v => JSON.stringify(v)))].map(v => JSON.parse(v));
}

/**
 * 小数位不够，用0补足位数
 * @param {*} num
 * @param {*} bit
 */
export const dealWithFun = (num, bit) => {
  const fixNum = parseFloat(num);
  if (isNaN(fixNum)) {
    return 0;
  }
  let str_x = num.toString(); // 为了后面值的拼接
  const point_decimal = fixNum.indexOf("."); // 取得小数点的下标key
  // 位数不足补0
  while (fixNum.length <= point_decimal.length + bit) {
    str_x += "0";
  }
  return str_x;
}
