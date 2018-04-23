const switchOptions = [
  {
    id: 'lineNumbers',
    title: 'Line Numbers',
    trueValue: true,
    falseValue: false,
    value: true
  },
  {
    id: 'readOnly',
    title: 'Read Only',
    trueValue: false,
    falseValue: true,
    value: true
  }
];
const selectOptions = [
  {
    id: 'tabSize',
    title: 'Tab Size',
    options: ['2', '4', '6', '8'],
    value: 2
  },
  {
    id: 'mode',
    title: 'Language',
    options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
    value: 'javascript'
  },
  {
    id: 'theme',
    title: 'Select themes',
    options: [
      'default',
      'zenburn',
      'solarized',
      'rubyblue',
      'paraiso-dark',
      'midnight',
      'material',
      'hopscotch',
      'twilight'
    ],
    value: 'zenburn'
  }
];

const defaultValues = {
  basic: `const component = {
    name: 'Aeristo',
    author: 'RedQ Team',
    website: 'https://Aeristo.redq.io/'
};`,
  javascript: `const component = {
    name: 'Aeristo',
    author: 'RedQ Team',
    website: 'https://Aeristo.redq.io/'
};`,
  markdown: `# Aeristo
###This is a RedQ Team production
[have a look](https://Aeristo.redq.io/)
  `,
  xml: `<isomprphic>
    <to>Tove</to>
    <name>Aeristo</name>
    <author>RedQ Team</author>
    <website>Aeristo.redq.io</website>
</isomprphic>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1>https://Aeristo.redq.io/</h1>
 <p>This is a RedQ Team production</p>
 <a href="https://Aeristo.redq.io/">visit ou site</a>
 </body>
</html>
`,
  python: `
print("Aeristo")
print("This is a RedQ Team production")
print("visit us https://Aeristo.redq.io ")
`,
  ruby: `rint "Aeristo"
print "This is a RedQ Team production"
print "visit us https://Aeristo.redq.io "
`
};

export { switchOptions, selectOptions, defaultValues };
