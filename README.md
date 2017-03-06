# cool

## 安装
npm i z-cool

## 组件接口
一组DOM操作的方法
可对jquery原生对象的原型和静态方法做扩展

### Cool原型方法和属性



### Cool静态方法和属性
Cool.addClass,
Cool.ancestor,
Cool.ancestorAll,
Cool.hasClass,
Cool.iiancestor,
Cool.iiancestorAll,
Cool.matches,
Cool.presetAjax,
Cool.rectCoord,
Cool.regClass,
Cool.regExps,
Cool.removeClass,
Cool.replaceClass,
Cool.swapClass,
Cool.toggleClass


## 组件构建

### 从配置文件构建（rollup.config.js）
npm run build // rollup -c

或者：

### 自定义构建
npm run dev // node rollup

### 文档生成
npm install -global esdoc
echo '{"source": "./src", "destination": "./doc"}' > .esdoc.json
esdoc
#### 文档
doc/index.html

或者：

### dox
[https://github.com/tj/dox](https://github.com/tj/dox)