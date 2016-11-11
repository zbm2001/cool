import {rSpaces, rRNTFs_g} from './regExps';

/**
 * 为元素添加指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String} newClass 指定要添加的样式类
 * @return {Boolean} 返回结果表明是否实际添加了样式类
 */
export default function addClass(elem, newClass) {
  var cssClass, wrapCssClass, testCssClass, newClasses, i = -1;
  // 若没有指定样式类
  if (!newClass || typeof newClass !== 'string' && !(newClass = newClass.trim())) {
    return false;
  }

  if ((cssClass = elem.className) && (cssClass = cssClass.trim())) {
    if (cssClass === newClass) {
      return false;
    }

    // 清理非空格的空白字符
    cssClass = cssClass.replace(rRNTFs_g, ' ');

    testCssClass = wrapCssClass = (' ' + cssClass + ' ');

    // 若添加单样式类
    if (newClass.indexOf(' ') < 0) {
      newClass = ' ' + newClass;
      if (testCssClass.indexOf(newClass + ' ') < 0) {
        elem.className = cssClass + newClass;
        return true;
      }
      return false;
    }

    // 添加多样式类
    newClasses = newClass.split(rSpaces);
    while (newClass = newClasses[++i]) {
      if (testCssClass.indexOf(' ' + (newClass += ' ')) < 0) {
        testCssClass += newClass;
      }
    }
    // 若已做了新增操作
    if (testCssClass !== wrapCssClass) {
      elem.className = testCssClass.slice(1, -1);
      return true;
    }
  }
  return false;
}