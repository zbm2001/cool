import $ from '../lib/jquery/jquery';

/**
 * 从一个元素向上检索一个匹配的祖先元素
 * 
 * @param  {object} elem 开始查找的元素
 * @param  {string} selector 匹配的选择器
 * @param  {object} root 指定一个祖先元素作为检索终止的根元素
 * @param  {boolean} includeItself 是否包含开始查找的元素自身
 * @return {object|null} 返回匹配元素或null
 */
export default ancestor(elem, selector, root, includeItself) {
  var parentNode = elem;
  root || (root = elem.ownerDocument);
  if(includeItself){
    if($(elem).is(selector)){
      return elem;
    }
  }
  while((parentNode = parentNode.parentNode) && parentNode !== root){
    if($(parentNode).is(selector)){
      return parentNode;
    }
  }
  return null;
}