import ancestorAll from './ancestorAll';
/**
 * 从一个元素自身算起，向上检索所有匹配的祖先元素
 * 
 * @param  {object} elem 开始查找的元素
 * @param  {string} selector 匹配的选择器
 * @param  {object} root 指定一个祖先元素作为检索终止的根元素
 * @return {object|null} 返回匹配元素或null
 */
export default iiancestorAll(elem, selector, root) {
  return ancestorAll(elem, selector, root, true);
}