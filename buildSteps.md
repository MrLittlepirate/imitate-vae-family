# 搭建步骤

## 创建项目
- 利用vue-cli直接生成：
``` bash
# 在当前目录创建项目
vue init webpack
```

## 修改配置文件
- config/index.js
> 修改端口号： ``` port: 8899 ```

## 安装三方依赖
|名称|作用|安装方式|
|---|---|---|
|vue-router|路由|创建项目时选择安装即可|
|vuex|存储|命令安装 ``` npm install vuex --dev-save ```|
|axios|网络传输|命令安装 ``` npm install axios --dev-save ```|
|element|饿了么ui框架--基于 Vue 2.0 的桌面端组件库|npm命令安装 ```npm i element-ui -S```|
| | | |


- vue-router : 路由。创建项目时选择安装即可

- vuex安装步骤 ：
``` bash
# 安装vuex
npm install vuex --save-dev

# 创建store目录 （有关vuex的文件都在写在该目录）
cd src
mkdir store

# 创建store目录下的index.js文件

# 在main.js中引入store目录并实例化
...
import store from './store'

new Vue({
  ...
  store,
  ...
})
...
```
了解更多vue-router相关知识，点击进入[vue-router](https://router.vuejs.org/zh/)

- axios安装步骤 ：
``` bash
TODO 
```


- element-ui安装步骤 ：参考Element官网-[快速上手](http://element.eleme.io/#/zh-CN/component/quickstart)
1. 完整安装element
``` bash
npm i element-ui -S
```

2. 在main.js中引入ElementUI并实例化
``` js
...
import ElementUI from 'element-ui';   /** 引入 Element */
import 'element-ui/lib/theme-chalk/index.css'; /** 引入Element样式文件 */

Vue.use(ElementUI); /** 使用 ElementUI*/
...
```

3. 全局配置 size 和 zIndex


    ``` size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）. ```

``` js
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
```
    
    
   ``` 按照以上设置，项目中所有拥有 size 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。```

