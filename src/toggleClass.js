import regClass from './regClass';

/**
 * 为元素开关指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String} toggledClass 指定的样式类
 * @param  {Boolean} matchAll 指定是否全部匹配（当指定多个样式类时）
 * @return {Number} range{-1,1} 返回结果标识码，表明实际是添加还是删除了样式类
 *   返回  1 添加了样式类
 *   返回  0 未做任何操作
 *   返回 -1 删除了样式类
 */
export default function toggleClass(elem, toggledClass, matchAll) {

  if (!(toggledClass && (toggledClass = toggledClass.trim()))) {
    return 0;
  }
  var cssClass = elem.className,
    newClass;

  if (cssClass && (cssClass = cssClass.trim())) {
    if (cssClass === toggledClass) {
      elem.className = '';
      return -1;
    }
    newClass = cssClass.replace(regClass(toggledClass), '');
    if (newClass === cssClass) {
      elem.className = cssClass + ' ' + toggledClass;
      return 1;
    }
    if (toggledClass.indexOf(' ') < 0 || !matchAll) {
      elem.className = newClass;
      return -1;
    }
    
  }
  elem.className = toggledClass;
  return 1;
}