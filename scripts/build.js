const pupa = require('pupa')
const readFile = require('fs').readFileSync
const writeFile = require('fs').writeFileSync

const yellow = ( alpha = '' ) => `b5bd68${alpha}`
const lightGray = ( alpha = '' ) => `abb2bf${alpha}`
const cyan = ( alpha = '' ) => `56b6c2${alpha}`
const orange = ( alpha = '' ) => `d19a66${alpha}`
const blue = '61afef'
const purple = 'c678dd'
const pink = 'f92672' // This is base for `storage` but gets overriden
const red = 'df6a73'
const white = 'f8f8f0'
// const green = '98c379'
// const orient = '025a7a'
const gray = '282c34'
const darkGray = '444649'
const cerulean = '1083A6'

const base = {
  themeLabel: 'One Dark Hybrid',
  settings: {
    caret: cerulean,
    background: gray,
    invisibles: lightGray('26'),
    lineHighlight: darkGray,
    selection: darkGray,
  },
  markdown: {
    quote: yellow('88'),
    orderedList: yellow('aa'),
    unorderedList: yellow('dd'),
  },
  yellow: yellow(),
  cyan: cyan(),
  lightGray: lightGray(),
  lightGray2: lightGray('bb'), // String template variables
  orange: orange(),
  orange2: orange('bb'), // Function arguments
  blue,
  purple,
  pink,
  red,
  white,
  // green,
}

const build = () => {
  const template = readFile('src/template.tmTheme').toString()

  // Base theme
  writeFile('themes/one-dark-hybrid.tmTheme', pupa(template, base))
}

build()
