# æ‹›å•†

## FileTree 目录结构
```shell
├── dist                       // 打包目录
├── public                     // 公共资源 
├── src                        // 源代码
│   ├── assets                 // 静态文件
│   ├── components             // 全局UI组件
        ├── bus                // 公交组件
        ├── common             // 公共组件
        ├── education          // 教育模块组件
        ├── index              // 首页组件
        ├── ship               // 轮船组件
│   ├── plugins                // 插件
│   ├── tool                   // 方法/工具
        ├── baseUrl.js         // 全局URL
        ├── Changedate.js      // 时间转换
        ├── globalHttp.js      // 微信授权
        ├── map.js             // 腾讯地图
│   ├── store                  // 全局store管理
│   ├── views                   // view界面
│   │    ├── bus                // 公交模块
│   │    ├── easyCard           // 幸福家园卡模块
│   │    ├── education          // 教育模块
│   │    ├── emergency          // 应急模块
│   │    └── env                // 环保模块
│   │    └── map                // 衣食住行模块
│   │    └── Register           // 医疗模块
│   │    └── Ship               // 轮船模块
│   │    └── SocialSecurity     // 社保模块 
│   │    └── index.vue          // 首页  
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
│   └── router.js              // 路由
├── static                     // 静态资源
│   ├── data                   // 导入数据
        ├── date.js            // 轮船模块的数据
        ├── index.js           // 首页的数据
│   ├── imgs                    // 图片
├── eslintrc.js                // eslint 配置项
├── .gitignore                //  git 忽略项
├── MP_verify_Mv0o7qSRlS82PubA.txt   // 授权 后台给的文件
├── postcss.config.js                // postcss插件配置
└── package.json               // package.json

```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
