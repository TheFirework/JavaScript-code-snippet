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
