// const fs = require('fs')
// const path = require('path')

// const appPath = path.resolve(__dirname, '../../src/main.js')
// const cssPath = path.resolve(__dirname, './css/globalcss.css')

// let appFile = fs.readFileSync(appPath, { encoding: 'utf-8' })

// if (!appFile.includes(cssPath)) {
//   appFile = `import "${cssPath}";\n` + appFile
//   fs.writeFileSync(appPath, appFile, { encoding: 'utf-8' })
// }

const fs = require('fs')
const path = require('path')

// const appPath = path.resolve(__dirname, '../../src/main.js')
const appPath = path.resolve(__dirname, '@/main.js')

let appFile = fs.readFileSync(appPath, { encoding: 'utf-8' })

if (!appFile.includes("../node_modules/yjhlib/css/globalcss.css")) {
  appFile = `import "../node_modules/yjhlib/css/globalcss.css";\n` + appFile
  fs.writeFileSync(appPath, appFile, { encoding: 'utf-8' })
}