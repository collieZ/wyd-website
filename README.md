# painting studio 画室官网

> 画室官网

##### pc 还在完善，主要侧重移动端。[demo 地址](http://www.pinxianhs.com)

https://vant-contrib.gitee.io/vant/#/zh-CN/popup

#### 开发模式

```
- 1.npm install
- 2.npm run dev
```

#### Build Setup By npm

```
npm install
npm run dev
```

#### Build Setup By yarn

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

打包
1、首先执行 npm run build；

2、将打包好的
.nuxt
static
nuxt.config.js
package.json
　这四个文件丢到服务器的某个文件夹中，在服务器上安装 node 环境

3、在服务器上面执行 npm install

4、在服务器上面执行 npm run start

使用 nginx 做代理，想项目域名代理到 localhost:3000 上面就阔以用域名直接访问项目了；

到此 nuxt 项目部署完成

后台编辑：

# 构建产品详情分组

# 1.进入栏目管理

# 2.新建产品名称，所属栏目 产品；栏目类型：链接

# 3.填写栏目描述 用于首页产品与服务 模块 简短描述

# 4.上传 56\*56 的产品小 icon 缩略图，仅限一张

# 构建产品详情模块

# 1.进入栏目管理（所属栏目 ： \*\*产品 ；栏目类型 ： 链接 ；）

# 2.新建名称为 banner ； 栏目关键字 ： baner 的关键字 ；栏目描述 ： banner 的描述 ； 缩略图一张 1920\*1080 ： 首屏大图

# 3.新建名称为 detail ； 进入文章管理 ： 新建文章 ； 所属栏目为新建 banner 之下 ； 文章内容为产品详情 文字+图片形式

# 4.新建名称为 trait ； 栏目关键字 ： 八大特点名称 | 竖线间隔 ； 栏目描述 ： 八大特点简短描述 ； 缩略图 ： 大图+八大特点 icon 大图尺寸 ： 600*400 八大 icon ： 50*50

# 5.新建名称为 appList ； 栏目关键字 ： 八大场景 名称 | 竖线间隔 ； 栏目描述 ： 应用场景的描述 ：缩略图 ： 八大场景图片 ：建议尺寸 无 八张图 尺寸一样

# 6.新建名称为 profitList ； 栏目关键字 ： 四大收益 名称 | 竖线间隔 ； 栏目描述 ： 四大收益 描述 | 竖线间隔 ：缩略图 ： 四大收益图片 ：建议尺寸 无 四张图 尺寸一样

# 构建解决方案详情分组

# 1.进入栏目管理

# 2.新建产品名称，所属栏目 解决方案；栏目类型：链接

# 3.填写栏目关键字 用于首页展示 模块 简短描述

# 4.上传 500*650 背景图 上传 130*130 的产品小 icon 缩略图，注意顺序

# 构建解决方案详情模块

# 1.进入栏目管理（所属栏目 ： \*\*解决方案 ；栏目类型 ： 链接 ；）

# 2.新建名称为 banner ； 栏目关键字 ： baner 的关键字 ；栏目描述 ： banner 的描述 ； 缩略图一张 1920\*450 ： 首屏大图

# 3.新建名称为 page1 ； 栏目关键字 ： 描述名称 ； 栏目描述 ； 描述 缩略图： 缩略图一张 建议 620\*440

# 4.新建名称为 page2 ； 栏目关键字 ： 四大挑战 | 竖线间隔 @符号间隔挑战的名称和描述； 栏目描述 ： 业务挑战描述 ； 缩略图 ： 四大挑战 icon ： 40\*40

# 5.新建名称为 page3 ； 栏目关键字 ： 解决之道 名称 | 竖线间隔 ； 栏目描述 ： 解决之道描述 | 竖线间隔 {br}表示换行 ：缩略图 ： 解决之道图片 ：建议尺寸 无

# 6.新建名称为 page4 ； 整体规划图片 ：建议尺寸 无

# 7.新建名称为 page5 ； 栏目关键字 ： 六大场景 名称 | 竖线间隔 ； 栏目描述 ： 应用场景的描述 ：缩略图 ： 六大场景图片 ：建议尺寸 无 六张图 尺寸一样

# 8.新建名称为 page6 ； 栏目关键字 ： 四大收益 名称 | 竖线间隔 ； 栏目描述 ： 四大收益 描述 | 竖线间隔 ：缩略图 ： 四大收益图片 ：建议尺寸 无 四张图 尺寸一样

# 9.新建名称为 page7 ； 栏目关键字 ： 产品组合 | 竖线间隔 @间隔单个产品的三个名称 ； 栏目描述 ： 产品组合 描述 | 竖线间隔 ：缩略图 ： 产品组合图片 ：建议尺寸 无 产品组合 尺寸一样

开发环境注意事项
1.配置图片地址
{
    "base": {
        "webName": "",
        "license": false,
        "authorization": ""
    },
    "ApiUrl": {
        "baseApi": "http://192.168.11.132:8080",
        "baseApiZh": "http://192.168.11.132:8080",
        "baseApiEn": "http://192.168.11.132:8080"
    }
}
2.开发环境Jenkins 里面的配置
sshCommand remote: remoteServer, command:'sed -i "s/192.168.3.9/192.168.11.132/g" /home/guanwang/package.json'
3.导航需要合并 栏目管理里面 自定义链接 加上 stack:分类# wyd-website
# wyd-website
