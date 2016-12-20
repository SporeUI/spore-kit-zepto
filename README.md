# spore-kit-zepto
spore-ui 所需的库文件，用于支持移动端开发

## 特性

#### 引入下列 zepto 模块

- selector
- ajax
- event
- form
- fx
- touch
- detect
- gesture

#### 弃用下列 zepto 模块

- ie
- ios3
- data: use var instead
- assets: just remove nodes
- stack: end is evil
- callbacks: use promise instead
- deferred: use promise instead
- fx_methods: use css3 instead

#### 引入增强功能

- $.noop 空函数
- $.getScript 加载静态js
- $.fn.reflow 触发dom回流
- $.fn.transform 简便的设置 transform 的函数
- $.hyphenate 字符串连字符化
- $.getPrefix 获得css前缀
- prefix free 设置样式时自动追加前缀
- $.FastClick 移动端点击移除 300ms 延迟

## Release History

 * 2016-12-20 v0.1.0 正式版发布



