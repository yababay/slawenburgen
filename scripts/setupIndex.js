const fs = require('fs')
const html = require('./html.js')
const settings = require('./settings.js')

fs.writeFileSync('./docs/index.html', html(settings))

