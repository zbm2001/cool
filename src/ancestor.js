import matches from './matches';

/**
 * 从一个元素向上检索一个匹配的祖先元素
 * 
 * @param  {HTMLElement} elem 开始查找的元素
 * @param  {String} selector 匹配的选择器
 * @param  {HTMLElement} root 指定一个祖先元素作为检索终止的根元素
 * @param  {Boolean} includeItself 是否包含开始查找的元素自身
 * @return {HTMLElement|null} 返回匹配元素或null
 */
export default function ancestor(elem, selector, root, includeItself) {
  var parentNode = elem;
  if (includeItself && matches(elem, selector)) {
    return elem;
  }
  root || (root = elem.ownerDocument);
  while ((parentNode = parentNode.parentNode) && parentNode !== root) {
    if (matches(parentNode, selector)) {
      return parentNode;
    }
  }
  return null;
}