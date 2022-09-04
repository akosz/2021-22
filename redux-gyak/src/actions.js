export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: todo,
});

export const editTodo = (todo, id) => ({
  type: EDIT_TODO,
  payload: { todo, id },
});
