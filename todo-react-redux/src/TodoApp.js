import React, {useState} from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import {VISIBILITY_FILTERS} from "./constants";
import "./styles.css";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    )
}