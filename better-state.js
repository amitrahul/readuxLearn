/**
 * Try to keep state as flat as possible.
 * here we have removed one level of nesting.
 */
import { createStore, combineReducers } from "redux";

const state = {
  users: [
    {
      id: 1,
      name: "sanket",
    },
    {
      id: 2,
      name: "Sarthak",
    },
    {
      id: 3,
      name: "JD",
    },
  ],
  todos: [
    { userId: 1, todoId: 1, name: "complete deployment" },
    { userId: 1, todoId: 2, name: "raise the bug" },
    { userId: 2, todoId: 1, name: "complete ppt" },
    { userId: 2, todoId: 2, name: "take interview" },
    { userId: 3, todoId: 1, name: "plan the sprint" },
  ],
};
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 * 
 * here we have written all the reducer in one place :-
 * 
function reducer(state, action) {
  if (action.type === "EDIT_TODO") {
    let todos = state.todos;
    let newTodos = todos.map((todo) => {
      if (todo.todoId === action.todoId && todo.userId === action.userId) {
        todo.name = action.name;
      }
      return todo;
    });
    return { ...state, todos: newTodos };
  }

  if (action.type === "ADD_USER") {
    const newUser = { id: action.userId, name: action.userName };
    const newUsers = [...state.users, newUser];
    return { ...state, users: newUsers };
  }
  return state;
}

* Here we can seperate the logic of different reducer.
Here all the user related cahnges comes under userReducer and 
todo related changes comes under todoReducer.
 */
const ADD_USER = "ADD_USER";
const EDIT_TODO = "EDIT_TODO";

function userReducer(users = state.users, action) {
  if (action.type === ADD_USER) {
    const newUser = { id: action.userId, name: action.userName };
    const newUsers = [...users, newUser];
    return newUsers;
  }
  // if action doesn't matches then return the normal users.
  return users;
}

function todoReducer(todos = state.todos, action) {
  if (action.type === EDIT_TODO) {
    let newTodos = todos.map((todo) => {
      if (todo.todoId === action.todoId && todo.userId === action.userId) {
        todo.name = action.name;
      }
      return todo;
    });
    return newTodos;
  }
  // if action doesn't matches then return the normal todos.
  return todos;
}

/**
 * But in createStore(), it is taking one reducer.
 * so we need a mechanism to combine these reducers into one reducers,
 * which is passed inside the create store.
 * for that use the combineReducers() function.
 * it takes object as an argumets.
 * the argumets should have a key as the part of state, manage with this reducers.
 */

const combinedReducers = combineReducers({
  users: userReducer,
  todo: todoReducer,
});

const store = createStore(combinedReducers);
console.log(store.getState());

store.dispatch({ type: "ADD_USER", userId: 5, userName: "rahul" });
console.log(store.getState());
