import regClass from './regClass';

/**
 * 检测元素是否包含指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String} cssClass 指定检测的样式类
 * @param  {Boolean} matchAll 指定是否全部匹配（当指定检测多个样式类时）
 * @return {Boolean}
 */
export default swapClass(elem, cssClass, matchAll) {

  if (!(cssClass1 && (cssClass1 = cssClass1.trim()))) {
    return 0;
  }
  if (!(cssClass2 && (cssClass2 = cssClass2.trim()))) {
    return 0;
  }
  var cssClass = elem.className,
    newClass;

  if (cssClass && (cssClass = cssClass.trim())) {
    if (cssClass === cssClass1) {
      elem.className = cssClass2;
      return 1;
    }
    if (cssClass === cssClass2) {
      elem.className = cssClass1;
      return -1;
    }

    newClass = cssClass.replace(regClass(cssClass1), '');
    if (newClass !== cssClass) {
      elem.className = newClass + ' ' + cssClass2;
      return 1;
    }

    newClass = cssClass.replace(regClass(cssClass2), '');
    if (newClass !== cssClass) {
      elem.className = newClass + ' ' + cssClass1;
      return -1;
    }
  }
  return 0;
}