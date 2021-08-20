'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Yen-Chu Yu'),
  handle: chalk.white('Andrew Yu'),
  work: chalk.white('Freelance Software Engineer'),
//   opensource: chalk.white(' ') + chalk.green(''),
  facebook: chalk.gray('https://www.facebook.com/') + chalk.cyan('andrew.yu.9400'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~andrew7011616'),
  github: chalk.gray('https://github.com/') + chalk.green('yuyenchu'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('andrew-yu-9660601a4'),
  web: chalk.cyan('https://personal-next-vercel.vercel.app/'),
  npx: chalk.red('npx') + ' ' + chalk.white('andrew7011616'),
  labelWork: chalk.white.bold('       Work:'),
//   labelOpenSource: chalk.white.bold('Open Source:'),
  labelFacebook: chalk.white.bold('    Facebook:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
// const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const facebooking = `${data.labelFacebook}  ${data.facebook}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
            //    opensourcing + newline  // data.labelOpenSource + data.opensource
               newline +
               facebooking + newline + // data.labelFacebook + data.facebook
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
