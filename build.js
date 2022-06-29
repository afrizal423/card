'use strict'

// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// const boxen = require('boxen')
// const fs = require('fs')
// const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Afrizal Muhammad Yasin'),
  handle: chalk.white(''),
  work: chalk.white('Freelancer Web Developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('zalabs02'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~afrizalmy'),
  packagist: chalk.gray('https://packagist.org/packages/') + chalk.redBright('afrizalmy'),
  github: chalk.gray('https://github.com/') + chalk.green('afrizal423'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('afrizalmuhammadyasin'),
  web: chalk.cyan('https://afrizalmy.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('afrizalmy'),
  labelWork: chalk.white.bold('   Now in:'),
  labelTwitter: chalk.white.bold('  Twitter:'),
  labelPackagist: chalk.white.bold('Packagist:'),
  labelnpm: chalk.white.bold('      NPM:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold(' LinkedIn:'),
  labelWeb: chalk.white.bold('      Web:'),
  labelCard: chalk.white.bold('     Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}  ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const packagisting = `${data.labelPackagist}  ${data.packagist}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               packagisting + newline + 
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
