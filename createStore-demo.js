import { createStore } from "redux";

function demoReducer(state, action) {
  /**
   * here if (action.type === "add_item") matches then
   * it return the updated state.
   *
   * if it doesn't matches then it returns same state.
   */
  if (action.type === "add_item") {
    return [...state, { name: action.itemName, quantity: action.itemQuantity }];
  } else return state;
}

const initalstate = [
  {
    name: "apple",
  },
  {
    name: "rice",
  },
];

const store = createStore(demoReducer, initalstate);
console.log("responseState", store.getState());
/**
 *  output :-
 * response {
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  '@@observable': [Function: observable]
}
 */

/**
 the only way to update the state by dispatch an action.
 action is a plain js object.
 * 
 * @param {*} name 
 * @param {*} quantity 
 * @returns 
 * 
 * this becomes less maintanable if we have to go and update all action
 * from all the places, they are dispatched.
 */
// store.dispatch({
//   type: "add_item",
//   itemName: "banana",
// });
// console.log(store.getState());

/**
 ** updated way to call the dispatch
 * 
 These type of functions (add_item) are called as action creators.
 These are simple function which returns an object.
 If we need to update then we can do at one place.
 */
const add_item = (name, quantity) => ({
  type: "add_item",
  itemName: name,
  itemQuantity: (quantity && quantity) || 1,
});

store.dispatch(add_item("guava", 2));
store.dispatch(add_item("butter", 12));

console.log(store.getState());
