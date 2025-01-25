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
const func = [removeSpace, repeatString, makeUpperCase, makeItallic];
