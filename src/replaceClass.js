import regClass from './regClass';

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
  var className = elem.className,
    newClass;

  if (className && (className = className.trim())) {
    if (typeof beReplacedClass === 'string') {
      if (className === beReplacedClass) {
        elem.className = replacedClass;
        return true;
      }
      beReplacedClass = regClass(beReplacedClass);
    }
    if (beReplacedClass.test) {

      newClass = className.replace(beReplacedClass, '');
      if (newClass === className) {
        if (whether) {
          elem.className = className + ' ' + replacedClass;
          return true;
        }
        return false;
      }
      elem.className = newClass + ' ' + replacedClass;
      return true;
    }
  }
  if (whether) {
    elem.className = replacedClass;
    return true;
  }
  return false;
}