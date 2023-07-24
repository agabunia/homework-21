import { todoReducer } from "./todo/todo.reducers";
const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    todo: todoReducer
    // auth: authReducer -- add another reducers here
})

export const store = configureStore({
    reducer: rootReducer
})