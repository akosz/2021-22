import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReduxer } from "./todosReduxer";

const reducer = combineReducers({
  todos: todosReduxer,
});

export const configureStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
