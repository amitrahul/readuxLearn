import { compose } from "redux";

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

let composedFunction = compose(
  removeSpace,
  repeatString,
  makeUpperCase,
  makeItallic
);

console.log(composedFunction(str));

/**
 * Redux gives us the compose function and it is doing similar things for us.
 *
 * working mechanism of compose function :-
 * * compose function takes a bunch of function and compose them into one chain
 * * of functions.
 *
 */
