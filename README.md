# function-utils
JavaScript 函数工具方法

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg) ![PyPI - Status](https://img.shields.io/pypi/status/Django.svg)


## 安装
使用npm安装
```console
npm install @psyduck4u/function-utils
```
下载`function-utils.min.js`在你的项目中引入即可。
```html
<script src="cookie-manager.min.js"></script>
```

## 使用
在引入`function-utils.min.js`之后，你就可以使用`FnUtils`对象了。

也可以使用AMD，CommonJS，Node modules载入`FnUtils`对象。

## 方法

### debounce
```js
  FnUtils.debounce(func, delay);
```

- `func (Function)` function 
- `delay (Number)` delay in milliseconds

### throttle
```js
  FnUtils.throttle(func, limit);
```

- `func (Function)` function 
- `limit (Number)` limit in milliseconds




## 作者与许可
Created and maintained by [Yuxiang Yang](https://github.com/psyduck4you) under [MIT](LICENSE) License
