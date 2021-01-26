import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo({ addTodo, updateInput}) {
    const [input, setInput] = useState("")
    const handleChange = (input) => {
        setInput(input)
    }

    const handleAddTodo = () => {
        // dispatches actions to add todo
        // this.props.addTodo(this.state.input)
        // console.log(addTodo)
        addTodo(input)
        setInput('')
        // sets state back to empty string
        // this.setState({ input: '' })
    }
    return (
        <div>
            <input
                onChange={e => handleChange(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>
                Add Todo
            </button>
        </div>
    )
}

export default connect(
    null,
    { addTodo }
)(AddTodo)

