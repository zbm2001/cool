import ancestor from './ancestor'

/**
 * 从一个元素自身算起，向上检索一个匹配的祖先元素
 *     include itself ancestor
 * 
 * @param  {HTMLElement} elem 开始查找的元素
 * @param  {String} selector 匹配的选择器
 * @param  {HTMLElement} root 指定一个祖先元素作为检索终止的根元素
 * @return {HTMLElement|null} 返回匹配元素或null
 */
export default function iiancestor(elem, selector, root) {
  return ancestor(elem, selector, root, true)
}