const compiler = require("vue-template-compiler");

const stringDom = `
    <div @on-data-loaded="handleLoaded"></div>
`

console.log(compiler.compile(stringDom));

