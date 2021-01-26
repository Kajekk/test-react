import React from 'react'
import Todo from "./Todo";
import {VISIBILITY_FILTERS} from "../constants";

function TodoList({todos, currentFilter}) {
    return (
        <ul className="todo-list">
            {todos && todos.length
                ?
                    todos.reduce((filtered, todo) => {
                        if (todo.status === currentFilter || currentFilter === VISIBILITY_FILTERS.ALL) {
                            filtered.push(
                                <Todo key={`todo-${todo.id}`} todo={todo}/>
                            )
                        }
                        return filtered
                    }, [])

                : "No todos, yay!"
            }
        </ul>
    )
}

export default TodoList