// const { convert } = require('convert-svg-to-png')
const path = require('path')
const fs = require('fs')
const { createConverter } = require('convert-svg-to-png')

module.exports =  (designFileName, user, branch, account, mobile) => new Promise(async (resolve, reject) => {
  const converter = createConverter({
    puppeteer: {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  })
  if (user.length > 50) {
    reject('name is too long')
    return
  }

  fs.readFile(
    path.resolve(__dirname, `../designs/${designFileName}.svg`),
    'utf-8',
    async (err, data) => {
      if (err) reject(err)
      const svgText = data
        .replace('USERNAME', user)
        .replace('USERBRANCH', branch)
        .replace('USERACCOUNT', account)
        .replace('USERMOBILE', mobile)
        .replace('FONTS_DIR', process.env.FONTS_DIR)
      const svgBuffer = Buffer.from(svgText)
      converter.convert(svgBuffer).then(async (data) => {
        await converter.destroy()
        resolve(data)
      })
    }
  )
})
