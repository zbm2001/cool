import {rSpaces_g, rRNTFs_g} from './regExps';
import regClass from './regClass';

/**
 * 检测元素是否包含指定的样式类
 * 
 * @param  {HTMLElement} elem DOM元素
 * @param  {String|RegExp} testClass 指定检测的样式类
 * @param  {Boolean} matchAll 指定是否全部匹配（当指定检测多个样式类时）
 * @return {Boolean}
 */
export default function hasClass(elem, testClass, matchAll) {
  // 若没有指定样式类
  if(!testClass || (typeof testClass === 'string' ? !(testClass = testClass.trim()) : !testClass.test)){
    return false;
  }
  var cssClass = elem.className,
    newClass, l;

  // 若元素无样式类
  if (cssClass && (cssClass = cssClass.trim())) {

    // 若测试一个正则表达式
    if (testClass.test) {
      return testClass.test(cssClass);
    }
    if (cssClass === testClass) {
      return true;
    }

    cssClass = cssClass.replace(rRNTFs_g, ' ');

    // 若元素为单样式类
    if (cssClass.indexOf(' ') < 0) {
      return !matchAll && testClass.indexOf(' ') > -1 && (' ' + testClass + ' ').indexOf(' ' + cssClass + ' ') > -1;
    }
    // 若检测单样式类
    if (testClass.indexOf(' ') < 0) {
      return (' ' + cssClass + ' ').indexOf(' ' + testClass + ' ') > -1;
    }
    // 若检测多样式类
    if (matchAll) {
      newClass = (' ' + cssClass + ' ');
      testClass = (' ' + testClass.replace(rSpaces_g, ' , ') + ' ').split(',');
      l = testClass.length;
      while (--l) {
        if (newClass.indexOf(testClass[l]) < 0) {
          return false;
        }
      }
      return true;
    }

    return regClass(testClass).test(cssClass);
  }
  return false;
}