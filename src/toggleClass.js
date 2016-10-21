import regClass from './regClass';

/**
 * 为元素开关指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String} toggledClass 指定的样式类
 * @param  {Boolean} matchAll 指定是否全部匹配（当指定多个样式类时）
 * @return {Boolean} 返回结果表明是添加还是删除了样式类
 */
export default swapClass(elem, toggledClass, matchAll) {

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