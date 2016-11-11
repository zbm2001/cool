/**
 * 检测元素是否匹配指定的选择器
 * 
 * @param  {HTMLElement} elem 指定的元素
 * @param  {String} selector 匹配的选择器
 * @return {Boolean}
 */
export default function matches(elem, selector) {
  return elem.matches ? elem.matches(selector) :
    elem.matchesSelector ? elem.matchesSelector(selector) :
    elem.webkitMatchesSelector ? elem.webkitMatchesSelector(selector) :
    elem.mozMatchesSelector ? elem.mozMatchesSelector(selector) :
    elem.msMatchesSelector ? elem.msMatchesSelector(selector) :
    function(elem, selector) {
      var parentNode = elem.parentNode,
        elems, i = -1;
      if (parentNode) {
        elems = parentNode.querySelectorAll(selector);
        while (elems[++i]) {
          if (elems[i] === elem) return true;
        }
        return false;
      } else {
        parentNode = elem.ownerDocument.createElement('div');
        parentNode.appendChild(elem);
        return parentNode.querySelector(selector) === parentNode.removeChild(elem);
      }
    }(elem, selector);
}