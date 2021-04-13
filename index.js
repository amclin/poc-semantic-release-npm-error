const makeDir = require('make-dir')
const cpy = require('cpy')
const spawn = require('cross-spawn')
const path = require('path')
const target = 'example'

const copyTemplateFiles = (dest) =>
  cpy(
    'stub.json',
    dest,
    {
      rename: (name) => {
        return name.replace('stub', 'package')
    },
  })

const install = () => new Promise((resolve, reject) => {
  const command = 'npm'
  const args = [
    'install',
    '--save-dev',
    "jest-coverage-badges"
  ]
  const opts = {
    stdio: 'inherit',
    env: {
      ...process.env
    }
  }

  const child = spawn(
    command,
    args,
    opts
  )
    
  child.on('close', code => {
    if (code !== 0) {
      reject(new Error(`Failed to install dependencies using ${command} ${args.join(' ')}`))
      return
    }
    resolve()
  })
})

module.exports = {
  install
}

makeDir(target)
  .then(() => copyTemplateFiles(target))
  .then(async () => {
    process.chdir(target)
    await install()
  })