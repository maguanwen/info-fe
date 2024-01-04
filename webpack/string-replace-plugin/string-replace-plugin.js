const path = require('path');

class StringReplacePlugin {
  constructor(options) {
    this.options = options;
  }

  // apply(compiler) {  
  //   // hooks为webpack4+版本的实现方案
  //   compiler.hooks.afterEmit.tap('StringReplacePlugin', (compilation) => {  
  //     Object.keys(compilation.assets).forEach((assetKey) => {  
  //       const asset = compilation.assets[assetKey];  
  //       if (typeof asset.source === 'function') {  
  //         const newSource = asset.source().replace(this.options.search, this.options.replace);  
  //         compilation.assets[assetKey] = new RawSource(newSource);  
  //       }  
  //     });  
  //   });  
  // }  

  apply(compiler) {
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin('html-webpack-plugin-after-html-processing', (data, cb) => {  

        const outputFiles = compilation.assets;
        const searchString = this.options.searchString;  
        const replaceString = this.options.replaceString;  

         // 遍历输出文件并替换字符串  
         for (const outputFile in outputFiles) {  
          if (/\.js$/.test(outputFile)) { // 只修改 JavaScript 文件  
            const fileContent = outputFiles[outputFile].source();  
            const regex = new RegExp(searchString, 'g');  
            const newContent = fileContent.replace(regex, replaceString);  
            outputFiles[outputFile].source = () => newContent;  
          }  
        }
        cb(null, data); 
      });  
    });  
  }
}

module.exports = StringReplacePlugin;