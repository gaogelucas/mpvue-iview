export function classes(obj) {
  let classesStr = '';
  for (let className in obj) {
    if (obj.hasOwnProperty(className) && !!obj[className]) classesStr += className;
  }
  return classesStr;
}

/*
 * 将对象转变为style字符串，对象属性的camel命名会转换为中划线命名
 */

export function styles(obj) {
  let stylesStr = '';
  for (let styleName in obj) {
    if (obj.hasOwnProperty(styleName)) stylesStr += `${styleName.replace(/([A-Z])/g, "-$1").toLowerCase()}:${px2rpx(obj[styleName])};`;
  }
  return stylesStr;
}

export function px2rpx(str) {
  if (/rpx/.test(str)) return str
  else if (/px/.test(str)) {
    let val = str.substring(0, str.indexOf('px'))
    return `${(val - 0) * 2}rpx`
  } else return str
}
