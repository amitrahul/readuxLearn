/**
 * here multiple transform has happend.
 * here passed an input to multiple function means
 * whaterver the output of one function is paased as input to naother function.
 *
 *
 * @param {
 * } str
 * @returns modified str.
 */

function removeSpace(str) {
  /*
     here first we split the string based on space 
     theafter join it based on empty charachter.
     */
  return str.split(" ").join("");
}

function repeatString(str) {
  /**
   * repeat function is concate the string based on number of times.
   * here it concate the string on previous string one time.
   * it always return a new string.
   */
  return str.repeat(2);
}

function makeUpperCase(str) {
  return str.toUpperCase();
}

function makeItallic(str) {
  /**
     *  str.italics()
     o/p :-  '<i>sh bdb bdn</i>'
     it wrapped it in bunch of "i" tags.
     */

  return str.italics();
}

let str = "hello there how are you ?";

const result = makeItallic(makeUpperCase(repeatString(removeSpace(str))));

console.log(result);

/**
 ** chart diagram :-
 *  o/p of removeSpace is passed inside repeatString 
 *  and answer of repeatString is passed inside makeUpperCase
 *  and answer of makeUpperCase is passed inside makeItallic.
 ** removeSpace() -> repeatString() -> makeUpperCase() -> makeItallic().

 */

// ** Alternative : -
// it store all the function : -
const funcArray = [removeSpace, repeatString, makeUpperCase, makeItallic];

const updatedResult = funcArray.map((f) => f(str));
console.log(updatedResult);
/**
 ** Here on original string we have performed all the opertaion.
 it means on orignal string we have execute all the function one by one.
 * [
  'hellotherehowareyou?',
  'hello there how are you ?hello there how are you ?',
  'HELLO THERE HOW ARE YOU ?',
  '<i>hello there how are you ?</i>'
]

** But we need to pass the result of one functions into another function.
 */
const functionStringArray = [
  str,
  removeSpace,
  repeatString,
  makeUpperCase,
  makeItallic,
];

const result1 = functionStringArray.reduce(
  (previousAnswer, currentFunction) => {
    console.log(previousAnswer, currentFunction);
    /**
     * 
        hello there how are you ? [Function: removeSpace]
        hellotherehowareyou? [Function: repeatString]
        hellotherehowareyou?hellotherehowareyou? [Function: makeUpperCase]
        HELLOTHEREHOWAREYOU?HELLOTHEREHOWAREYOU? [Function: makeItallic]
     */
    return currentFunction(previousAnswer);
  }
);
console.log(result1); // <i>HELLOTHEREHOWAREYOU?HELLOTHEREHOWAREYOU?</i>
