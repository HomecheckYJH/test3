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

const appPath = path.resolve(__dirname, './src/main.js')
//여기서 지금 자꾸 cache 디렉토리에 접근한다.

let appFile = fs.readFileSync(appPath, { encoding: 'utf-8' })
// let appFile = fs.readFileSync('../../src/main.js', { encoding: 'utf-8' })

if (!appFile.includes("../node_modules/yjhlib/css/globalcss.css")) {
  appFile = `import "../node_modules/yjhlib/css/globalcss.css";\n` + appFile
  fs.writeFileSync(appPath, appFile, { encoding: 'utf-8' })
}