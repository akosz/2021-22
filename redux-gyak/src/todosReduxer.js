import React from "react";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actions";

const initialState = [];
export const todosReduxer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === ADD_TODO) {
    const todos = state;
    const todo = { title: payload, id: Date.now().toString() };

    return [...todos, todo];
  }

  if (type === DELETE_TODO) {
    const todos = state;
    const todoID = payload;

    return todos.filter((todo) => todo.id !== todoID);
  }

  if (type === EDIT_TODO) {
    const todos = state;
    const { todo, id } = payload;

    return todos.map((t) => (t.id === id ? { title: todo, id } : t));
  }

  return state;
};
