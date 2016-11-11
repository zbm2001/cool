import {rSpaces_g} from './regExps';

/**
 * 通过定义的样式类创建一个匹配的正则
 * 
 * @param  {string} cssClass 单个或多个样式类
 * @return {object.RegExp} 返回匹配的正则对象
 */
export default function regClass(cssClass) {
	return new RegExp('(?:^|\\s)(?:' + cssClass.trim().replace(rSpaces_g, '|') + ')(?!\\S)', 'g');
}