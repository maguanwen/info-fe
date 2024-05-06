
### resize时调用如下代码

```js
const designDraftWidth = 1920;//设计稿的宽度
const designDraftHeight = 953;//设计稿的高度
// 根据宽高比计算缩放的比例
const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
          (document.documentElement.clientWidth / designDraftWidth) :
          (document.documentElement.clientHeight / designDraftHeight);
document.querySelector('.DPcontent').style.transform = `scale(${scale})`;

```

### 使用autofit自动填补空白
```js

autofit.init({
  dh: 953,
  dw: 1920,
  el:"#DPcontent",
  // renderDom:"#app",
  resize: true
})

```

### 参考资料
[解决可视化大屏自适应问题](https://juejin.cn/post/7224015103481118757)
