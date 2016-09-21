import regClass from './regClass';

/**
 * 为元素交换指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String} className1 指定交换的样式类1
 * @param  {String} className2 指定交换的样式类2
 * @return {String} 返回实际替换的样式类，返回空字符串表明没有找到任何样式类的匹配，没有做任何操作
 */
export default swapClass(elem, className1, className2) {
  var className = elem.className,
    newClass;

  if (className && (className = className.trim())) {
    if (className === className1) {
      return elem.className = className2;
    }
    if (className === className2) {
      return elem.className = className1;
    }

    newClass = className.replace(regClass(className1), '');
    if (newClass !== className) {
      elem.className = newClass + ' ' + className2;
      return className2;
    }

    newClass = className.replace(regClass(className2), '');
    if (newClass !== className) {
      elem.className = newClass + ' ' + className1;
      return className1;
    }
  }
  return '';
}