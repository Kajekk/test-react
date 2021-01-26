import React, {useState} from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import {VISIBILITY_FILTERS} from "./constants";
import "./styles.css";

export default function TodoApp() {
    // const [todos, setTodos] = useState([])
    // const [currentFilter, setCurrentFilter] = useState(VISIBILITY_FILTERS.ALL)
    // const handleAddTodo = (todo) => {
    //     let newArray = [...todos];
    //     newArray.push({
    //         id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    //         content: todo.content,
    //         status: VISIBILITY_FILTERS.INCOMPLETE
    //     })
    //
    //     setTodos(newArray)
    // }
    // const submitFilter = (keyFilter) => {
    //     setCurrentFilter(keyFilter)
    // }
    return (
        <div className="todo-app">
            {/*<h1>Todo List</h1>*/}
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    )
}