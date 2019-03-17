## 前言
此项目为thoughtWorks的homework

## 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + axios + scss

## 项目运行

启动`mock-server`服务再进行以下操作

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 主要目录结构

    ├──build                    // webpack配置文件夹
    ├──config                    // 文件打包的配置文件夹配置文件夹
    ├──src                      // 源码目录 
    │ ├── components            // 组件 
    │ │ ├── container           // container.vue页面的组件 
    │ │ │ ├── AddOSModal.vue    // 添加OS的弹出框 
    │ │ │ ├── Content.vue       // container界面的容器
    │ │ │ ├── ContentList.vue   // OS详情列表
    │ │ │ ├── ContentTopBar.vue / 页面上部分统计数量的组件
    │ │ │ ├── NavBar.vue        // 列表切换、搜索框的组件
    │ │ ├── public              // 公共组件库
    │ │ │ ├── Aside.vue         // 左侧菜单
    │ │ │ ├── DropDown.vue      // 点击头像弹出的选项框组件
    │ │ │ ├── Footer.vue        // 页脚
    │ │ │ ├── Footer.vue        // 页眉
    │ ├── page                  // 页面 
    │ │ ├── Container.vue       // 页面中部的容器组件
    │ ├── router                // 页面 
    │ │ ├── index.vue           // 路由
    │ ├── static                // 静态资源文件
    │ ├── store                 // vuex的状态管理目录
    │ │ ├── index.vue           // 所有状态管理
    │ │ │ ├── modules           // 状态模块文件夹
    │ │ │ │ ├── agents,js       // 对应左侧菜单“agents”页面的所有状态
    │ │ │ │ ├── header.js       // 页眉的所有状态
    │ ├── style                 // 公共样式
    ├── App.vue                 // 母板页
    ├── main.js                 // 程序入口文件
    
## 目标功能
- [x] 获取OS列表 -- 完成
- [x] 添加OS -- 完成
- [x] 删除OS -- 完成
- [x] 弹出对话框关闭后，清空输入框 -- 完成
- [x] 资源标签过多时，页面不会混乱 -- 完成
- [x] 根据设计图完成 -- 完成
- [ ] 兼容IE11+ --待完成

## 总结
首先，感谢贵司给我面试的机会。在17年校招时，由于自己技术水平薄弱，与贵司擦肩而过，非常希望两年后，能够与贵司携手共进。同时，这是自己第一次使用grid布局，在编码过程中遇到很多问题，如IE的兼容。现在了解到，IE下应该用

    display:-ms-grid;/*定义网格布局*/
    -ms-grid-columns:200px 25px 1fr;/*定义列的数量及每列的宽度*/
    -ms-grid-rows:130px 25px 1fr 25px 200px;/*定义行的数量及每行的高度，1fr代表未分配区域撑满，详细看属性介绍*/
    -ms-grid-column:1;/*确定该元素所在列*/
    -ms-grid-row:1;/*确定该元素所在行*/
    -ms-grid-column-align:center;/*确定该列排列方式为居中*/
    -ms-grid-row-align:center;/*确定该行排列方式为居中*/
    
来书写，由于时间关系，自己没有再去实现。但这也是自己在真正的实践中踩到的一个坑，在以后的工作中，也会多加注意。

## 项目存在的问题
1. 在获取os列表中需要渲染os的图标，自己所想的是
    

    <img :src="getImg(item.os)"/>
        
    getImg (os) {
      // const imgUrl = '../../static/ASSETS/osIcon/'
      const imgUrl = './static/osIcon/'
      return imgUrl + os + '.png'
    }
        
os的名称需要与对应的图标的名称相同，以字符串拼接的方式，获取图片地址，从而达到动态绑定的目的。但是达到的效果为：	![image.png](https://upload-images.jianshu.io/upload_images/155629-34e38bd9487428da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
暂时不知道是什么原因造成的。在明天到公司之后，自己会第一时间解决这个疑问。
暂时用

    <img src="../../static/assets/osIcons/windows.png">
    
代替图片以达到如下效果![image.png](https://upload-images.jianshu.io/upload_images/155629-8d4f6a9b0f340ace.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 未使用媒体查询
3. IE下样式混乱，通过`-ms-`调整之后，未达到想要的效果
![image.png](https://upload-images.jianshu.io/upload_images/155629-6206cfb47dcb96a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
