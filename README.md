# tidb-contributors

## 1. 简介
呈现 [TiDB](https://github.com/pingcap/tidb)的代码贡献者们的github列表\
[在线演示](https://tidb-contributors-web.vercel.app/) 

## 2. 后端API
数据通过[Github API](https://developer.github.com/v3/)获取，由于没有认证Token的用户只能每小时调用API 60次，因此需要架设一个后端脚本，详情参见这个[Repo](https://github.com/guojuntang/tidb-contributors-api)

## 3. 部署 

安装依赖
```
npm install
```
本地运行
```
npm run serve
```
在本地运行时需要把[后端脚本](https://github.com/guojuntang/tidb-contributors-api)架设在本地

生产环境编译
```
npm run build
```
在生产环境部署时需要通过环境变量来控制后端API的前缀，例如在项目的根目录下建立.env文件添加以下内容
```
VUE_APP_API_ROOT=https://your.api.url.com/
```




