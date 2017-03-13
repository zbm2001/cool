import regClass from './regClass'

/**
 * 为元素交换指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String} cssClass1 指定交换的样式类1
 * @param  {String} cssClass2 指定交换的样式类2
 * @return {Number} range{-1,1} 返回实际交换的标识码
 *   返回  1 顺序后一个替换了前一个的样式类
 *   返回  0 未做任何替换
 *   返回 -1 逆序前一个替换了后一个的样式类
 */
export default function swapClass(elem, cssClass1, cssClass2) {
  var cssClass, newClass
  // 若没有指定样式类
  if (!cssClass1 || typeof cssClass1 !== 'string' || !(cssClass1 = cssClass1.trim())) {
    return 0
  }
  if (!cssClass2 || typeof cssClass2 !== 'string' || !(cssClass2 = cssClass2.trim())) {
    return 0
  }

  if ((cssClass = elem.className) && (cssClass = cssClass.trim())) {
    if (cssClass === cssClass1) {
      elem.className = cssClass2
      return 1
    }
    if (cssClass === cssClass2) {
      elem.className = cssClass1
      return -1
    }

    newClass = cssClass.replace(regClass(cssClass1), '')
    if (newClass !== cssClass) {
      elem.className = newClass + ' ' + cssClass2
      return 1
    }

    newClass = cssClass.replace(regClass(cssClass2), '')
    if (newClass !== cssClass) {
      elem.className = newClass + ' ' + cssClass1
      return -1
    }
  }
  return 0
}