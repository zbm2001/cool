import regClass from './regClass';

var rSpace = /\s/;
/**
 * 为元素删除指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String|RegExp} removedClass 指定要删除的样式类。若不是非空字符串或正则，直接清空元素全部样式
 * @return {Boolean} 返回结果表明是否实际删除了样式类
 */
export default removeClass(elem, removedClass) {
  var cssClass, newClass, isRegExp;
  // 若没有指定样式类
  if (!removedClass || (typeof removedClass === 'string' ? !(removedClass = removedClass.trim()) : !(isRegExp = typeOf(beReplacedClass) === 'RegExp'))) {
    elem.className = '';
    return true;
  }

  // 已有样式类
  if ((cssClass = elem.className) && (cssClass = cssClass.trim())) {

    // 若测试一个正则表达式
    if (isRegExp) {
      newClass = cssClass.replace(removedClass, '');
      if (newClass !== cssClass) {
        elem.className = newClass;
        return true;
      }
      return false;
    }
    if (cssClass === removedClass) {
      elem.className = '';
      return true;
    }
    // 若元素为多样式类
    if (rSpace.test(cssClass)) {
      newClass = cssClass.replace(regClass(removedClass), '');
      if (newClass === cssClass) {
        return false;
      }
      elem.className = newClass;
      return true;
    }
    // 若元素为单样式类
    if (removedClass.indexOf(' ') < 0 || (' ' + removedClass + ' ').indexOf(' ' + cssClass + ' ') < 0) {
      return false;
    }
    elem.className = removedClass;
    return true;
  }
  // 无样式类
  return false;
}