import regClass from './regClass';
import typeOf from './typeOf';

/**
 * 为元素替换指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String|RegExp} beReplacedClass 指定被替换的样式类
 * @param  {String} replacedClass 指定用来替换的样式类
 * @param  {Boolean} whether 指定被替换的样式类无论是否存在，也要添加用来替换的样式类
 * @return {Boolean} 返回结果表明是否实际替换了样式类
 */
export default replaceClass(elem, beReplacedClass, replacedClass, whether) {
  // 若没有指定样式类
  if (!beReplacedClass || (typeof beReplacedClass === 'string' ? !(beReplacedClass = beReplacedClass.trim()) : typeOf(beReplacedClass) !== 'RegExp')) {
    return false;
  }
  var cssClass = elem.className,
    newClass;

  if (cssClass && (cssClass = cssClass.trim())) {
    if (typeof beReplacedClass === 'string') {
      if (cssClass === beReplacedClass) {
        elem.className = replacedClass;
        return true;
      }
      beReplacedClass = regClass(beReplacedClass);
    }

    newClass = cssClass.replace(beReplacedClass, '');
    if (newClass === cssClass) {
      if (whether) {
        elem.className = cssClass + ' ' + replacedClass;
        return true;
      }
      return false;
    }
    elem.className = newClass + ' ' + replacedClass;
    return true;
  }
  if (whether) {
    elem.className = replacedClass;
    return true;
  }
  return false;
}