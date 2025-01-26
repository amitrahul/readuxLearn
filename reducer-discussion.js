const state = {
  users: [
    {
      id: 1,
      name: "sanket",
      todos: [
        { id: 1, name: "complete deployment" },
        { id: 2, name: "raise the bug" },
      ],
    },
    {
      id: 2,
      name: "Sarthak",
      todos: [
        { id: 1, name: "complete ppt" },
        { id: 2, name: "take interview" },
      ],
    },
    {
      id: 1,
      name: "JD",
      todos: [{ id: 1, name: "plan the sprint" }],
    },
  ],
};

/**
 * * Bad Approach :-
 * 
function reducer(state, action) {
  if (action.type === "EDIT_TODO") {
    let newTodoData = action.name;
    const newState = state.users.map((user) => {
      if (user.id === action.user.Id) {
        let newTodos = user.todos.map((todo) => {
          if (todo.id === action.todoId) {
            todo.name = newTodoData;
          }
          return todo;
        });
        user.todos = newTodos;
      }
      return user;
    });
  }
}
 */
