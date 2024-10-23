# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jaidenpearson/lotide`

**Require it:**

`const _ = require('@jaidenpearson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(Array1, Array2)`: asserts whether two arrays are deeply equal to each other
- `assertEqual(Actual, Expected)`: discerns whether the output of a function is the expected result
- `assertObjectsEqual(Object1, Object2)`: asserts whether two objects are deeply equal.
- `countLetters(String)`: counts how many times a letter appears in a string. Does not count spaces
- `countOnly(Array, Object)`: Takes an array and counts the amount of times a specified name appears. Names in the object must be a key and have the value True to be counted. Names with a False value will be ignored.
- `eqArrays(Array1, Array2)`: Same function as assertArraysEqual, only eqArrays returns a True value for deep equality between the Arrays, whereas False is returned for inequality.
- `eqObjects(Object1, Object2)`: Same function as assertObjects Equal, only returns a True value for deep equality between the Arrays, whereas False is returned for inequality.
- `findKey(Object, Callback)`: Accepts an object and a callback function. Returns any keys that return true from the callback function.
- `findKeyByValue(Object, Value)`: Accepts an object and an expected value within the object. Returns the key corresponding to the input value.
- `flatten(Array)`: Accepts an array, will eliminate all nested arrays within the parent and return all the values in a single array in the same order.
- `head(Array)`: Accepts an array, will return the first value in the array.
- `letterPositions(String)`: Accepts a string and indexes where each letter appears in the String. Does not count spaces. Records multiple indexes for repeat letters.
- `map(Array, Callback)`: Accepts an Array and a Callback function. Loops through the array and returns a new array with values that have returned true from the callback function.
- `middle(Array)`: Accepts an Array, returns the middle indexed value in the array or the two values closest to the middle.
- `tail(Array)`: Accepts an Array, returns every value but the first index. Sworn enemy of the head function.
- `takeUntil(Array, Callback)`: Accepts an Array and a Callback function, pushes values from array into a new array until the callback function returns true. In which case takeUntil returns the new array of values.
- `without(SourceArray, RemoveArray)`: Accepts two arrays, any stricly matching values between the two arrays are removed and the Source array is returned.