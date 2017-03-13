/**
 * 获取元素在页面中的矩形坐标
 * 
 * @param  {HTMLElement} elem DOM元素
 * @return {Object} 返回元素各个边的相对于页面的坐标及尺寸
 */
export default function rectCoord(elem) {
    
  var doc = elem.ownerDocument,
    docRoot = doc.documentElement,
    win = doc.defaultView,
    offsetTop = win.pageYOffset + docRoot.clientTop,
    offsetLeft = win.pageXOffset + docRoot.clientLeft,
    rectCoord = elem.getBoundingClientRect()

  return {
    top: rectCoord.top + offsetTop,
    right: rectCoord.right + offsetLeft,
    bottom: rectCoord.bottom + offsetTop,
    left: rectCoord.left + offsetLeft,
    width: rectCoord.width,
    height: rectCoord.height,
    originalRectCoord: rectCoord
  }
}