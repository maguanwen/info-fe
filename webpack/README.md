# webpack相关学习经验

背景：webpack3 ,webpack4具有更丰富的内置方法。

1. 打包完成后字符串替换的需求。
方案：新写plugin实现。参考  `string-replace-plugin`

经验：webpack的编译周期中包含emit、after-emit等。plugins中的每个plugin会按照这个生命周期进行先后执行。

2. debugger webpack 

- build中增加 `--inspect-brk`  
- 浏览器地址栏中输入 `chrome://inspect/#devices` 即可进行debug

3. 查找无用文件 `useless-files-webpack-plugin`