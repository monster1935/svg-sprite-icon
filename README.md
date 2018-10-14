# svg-sprite-icon

Icon resolution based on svg in vue single-page project.

## Install

Using npm：

```
npm install svg-sprite-icon --save-dev
npm install svg-sprite-loader --save-dev
npm install svgo svgo-loader --save-dev
```

## Usage

First, use in `main.js`

```js
import Vue from 'vue';
import SvgIcon from 'svg-sprite-icon';

Vue.use(SvgIcon);
```

Second, add such config in `webpack.base.conf.js`

```js
// base svgo config rules
const svgoLoaderConfig = require('svg-sprite-icon/svgo-loader.conf');

module: {
   {
    test: /\.svg$/,
    include: [resolve('src/assets/icons')],
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        loader: 'svgo-loader',
        options: svgoLoaderConfig,
      }
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    exclude: [resolve('src/assets/icons')], // in case svg icon to be resolved
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  },
}
```

Third, use in your vue component

```vue
<template>
  <svg-icon :icon-class="add" :class-name="svg-icon-add"></svg-icon>
</template>

<script>
import '@/assets/add.svg';

export default {
  
};
</script>
```

## Props

### iconClass

the unique icon id bind on the tag `<use>`. **so this props must be equal with you svg file name.** Because in `webpack.base.conf.js`, svg-sprite-loader was set the options `symbolId` with the file name. This props is required when use.

### svgClass

add extra class to the tag `<svg>`, if you don't transfer it, svg would bind the default class `svg-icon`

## Import Svg

There are two ways to import the svg icon files:

- one by one, import when use

```js
import "@/assets/icon/add.svg";
import "@/assets/icon/plus.svg";
...
```
- import all svg icon files

```js
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./assets/icons', false, /\.svg$/);
requireAll(req);
```
  Attension: The first param of `require.context` must be literal. more detail: [require.context](https://webpack.js.org/guides/dependency-management/).

## Licence

MIT