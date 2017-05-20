const pupa = require('pupa')
const readFile = require('fs').readFileSync
const writeFile = require('fs').writeFileSync

const greenYellow = ( alpha = '' ) => `b5bd68${alpha}`
const lightGray = ( alpha = '' ) => `abb2bf${alpha}`
const lightBlue = ( alpha = '' ) => `61afef${alpha}`
const orange = ( alpha = '' ) => `d19a66${alpha}`
const teal = '56B6c2'

const base = {
  themeLabel: 'One Dark Hybrid',
  settings: {
    background: '242e33',
    invisibles: lightGray('26'),
    lineHighlight: lightBlue('0a'),
    selection: lightBlue('26'),
  },
  markdown: {
    quote: greenYellow('88'),
    orderedList: greenYellow('aa'),
    unorderedList: greenYellow('dd'),
  },
  grayBlue: 'abb2bf',
  greenYellow: greenYellow(),
  lightBlue: lightBlue(),
  lightGray: lightGray(),
  lightGray2: lightGray('bb'), // String template variables
  orange: orange(),
  orange2: orange('bb'), // Function arguments
  lime: '98c379',
  blue: '61afef',
  purple: 'c678dd',
  pink: 'f92672', // This is base for `storage` but gets overriden
  red: 'df6a73',
  teal,
  white: 'f8f8f0',
  yellow: 'f0c674',
}

const build = () => {
  const template = readFile('src/template.tmTheme').toString()

  // Base theme
  writeFile('themes/one-dark-hybrid.tmTheme', pupa(template, base))
}

build()
