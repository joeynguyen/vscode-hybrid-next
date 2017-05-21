const pupa = require('pupa')
const readFile = require('fs').readFileSync
const writeFile = require('fs').writeFileSync

const green = ( alpha = '' ) => `b5bd68${alpha}`
const lightGray = ( alpha = '' ) => `abb2bf${alpha}`
const cyan = ( alpha = '' ) => `56b6c2${alpha}`
const orange = ( alpha = '' ) => `d19a66${alpha}`
const blue = '61afef'
const purple = 'c678dd'
const pink = 'f92672' // This is base for `storage` but gets overriden
const red = 'df6a73'
const white = 'f8f8f0'
const rustGreen = '98c379'
const teal = '56b6c2'
const orient = '025a7a'

const base = {
  themeLabel: 'One Dark Hybrid',
  settings: {
    background: '242e33',
    invisibles: lightGray('26'),
    lineHighlight: orient,
    selection: orient,
  },
  markdown: {
    quote: green('88'),
    orderedList: green('aa'),
    unorderedList: green('dd'),
  },
  grayBlue: 'abb2bf',
  green: green(),
  cyan: cyan(),
  lightGray: lightGray(),
  lightGray2: lightGray('bb'), // String template variables
  orange: orange(),
  orange2: orange('bb'), // Function arguments
  blue,
  purple,
  pink,
  red,
  teal,
  white,
  yellow: rustGreen, // Using value of 'rust green' instead of yellow
}

const build = () => {
  const template = readFile('src/template.tmTheme').toString()

  // Base theme
  writeFile('themes/one-dark-hybrid.tmTheme', pupa(template, base))
}

build()
