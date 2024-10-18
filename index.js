const head = require("./head")
const tail = require("./tail")
const middle = require("./middle")
const countLetters = require("./countLetters")
const countOnly = require("./countOnly")
const findKey = require("./findKey")
const findKeyByValue = require("./findKeyByValue")
const flatten = require("./flatten")
const letterPosition = require("./letterPositions")
const map = require("./map")
const assertArraysEqual = require("./assertArraysEqual")
const assertEqual = require("./assertEqual")
const assertObjectsEqual = require("./assertObjectsEqual")
const eqArrays = require("./eqArrays")
const eqObjects = require("./eqObjects")

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPosition: letterPosition,
  map: map,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects
}