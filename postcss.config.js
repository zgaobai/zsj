module.exports = {
  "plugins": {
    "postcss-import": {
    },
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { 
      utf8: false 
    },
    // 处理浏览器前缀
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3, 
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines', 'mint', 'picker'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    },
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}

