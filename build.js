#!/usr/bin/env node

'use strict'

const boxen = require('boxen')
const { bold, blueBright: b } = require('chalk').default
const fs = require('fs')
const path = require('path')

///////////////////////////////////////////////////////////////////////////////

const title = `${bold(`Afrizal Muhammad Yasin`)} · Afrizal Yasin`
const subtitle = `       Surabaya, ID · ${b(`afrizal@afrizal.web.id`)}`
const header = `${title}\n${subtitle}`

///////////////////////////////////////////////////////////////////////////////

const list = {
  [bold(`  Now in`)]: `Student in UPN "Veteran" Jawa Timur`,
  [bold(` Twitter`)]: b(`https://twitter.com/afrizalpatlas`),
  [bold(`  GitHub`)]: b(`https://github.com/afrizal423`),
  [bold(`  GitLab`)]: b(`https://gitlab.com/afrizal-my`),
  [bold(` Website`)]: b(`https://afrizal.web.id`),
}

const renderedList = Object.keys(list)
  .map(l => `${l}: ${list[l]}`)
  .join('\n')

///////////////////////////////////////////////////////////////////////////////

const footer = `${bold(`    Card`)}: npx afrizalmy`

///////////////////////////////////////////////////////////////////////////////

const cardContent = `${header}\n\n${renderedList}\n\n${footer}`

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  boxen(cardContent, {
    borderColor: 'blue',
    margin: 1,
    padding: {
      top: 1,
      bottom: 1,
      left: 6,
      right: 6,
    },
  })
)

// huge thanks to https://github.com/bnb/bitandbang
