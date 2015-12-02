#!/usr/bin/env node

const toArray = require('stream-to-array')
const treeify = require('treeify').asTree

toArray(process.stdin, function (err, results) {
  if (err) throw err

  var data = results.join('')
  var obj = JSON.parse(data)
  console.log(treeify(obj, true))
})