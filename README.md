# slugger


Slugger is a npm  library that dead simple slugification for node and browser.

## What it does:

Converts any string into a url friendly version:

```js
slugger('Hello yOu CRAZY Swede!'); // returns 'hello-you-crazy-swede'

// optionally maintain case
slugger('Hello yOu CRAZY Swede!', {maintainCase: true}); // returns 'Hello-yOu-CRAZY-Swede'

// optionally use a different replacement character
slugger('Hello yOu CRAZY Swede!', {replacement: '_'}); // returns 'hello_you_crazy_swede'

// optionally trim to max length while not breaking any words
slugger('Hello yOu CRAZY Swede!', {smartTrim: 9}); // returns 'hello-you'

// optionally allow additional characters
// just pass string of characters that would normally be removed
// that you want to allow.
slugger('Hello yOu CRAZY Swede!', {alsoAllow: "!&"}); // returns 'hello-you-crazy-swede!'

// decodes URI components by default, so {decode: true} is not required
slugger('boo%20boo') // returns 'boo-boo';
// now without decode
slugger('boo%20boo', {decode: false}) // returns boo20boo;

```


## Installing

```
 npm i @giladrozmarin/slugger
```

