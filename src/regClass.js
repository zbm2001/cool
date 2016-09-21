var rSpacesG = /\s+/g;

/**
 * 通过定义的样式类创建一个匹配的正则
 * 
 * @param  {string} cssClass 单个或多个样式类
 * @return {object.RegExp} 返回匹配的正则对象
 */
export default regClass(cssClass) {
	return new RegExp('(?:^|\\s)(?:' + cssClass.trim().replace(rSpacesG, '|') + ')(?!\\S)', 'g');
}