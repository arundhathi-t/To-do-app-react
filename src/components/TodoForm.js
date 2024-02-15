import React, { useState } from "react"

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue('');
        }
    }
    return (<form className="TodoForm" onSubmit={handleSubmit}>
        <h1>Get Things Done!</h1>

        <input type="text" className="todo-input" value={value} placeholder="What is your task today?"
            onChange={handleChange}></input>

        <button type="submit" className="todo-btn">Add Task</button>

    </form>
    )
}

export default TodoForm;




// import React, { useState } from 'react'
// import Todo from './Todo'

// function TodoForm() {
//     const [task, setTask] = useState('')
//     const [todos, setTodos] = useState([])

//     const changeHandler = (e) => {
//         setTask(e.target.value)
//     }

//     const deleteHandler = (indexValue) => {
//         const newTodos = todos.filter((todo, index) => index !== indexValue)
//         setTodos(newTodos)
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const add = task
//         if (add === '') {
//             alert("field should not be empty")
//         }
//         else {
//             console.log(task)
//             const newTodos = [...todos, task];
//             setTodos(newTodos);
//             setTask('')
//         }

//     }

//     return (
//         <div>
//             <form className='TodoForm' onSubmit={submitHandler}>
//                 <input className='todo-input' type='text'
//                     placeholder='add todays tasks'
//                     value={task}
//                     onChange={changeHandler}
//                 ></input>
//                 <button className='todo-btn' type='submit' value='Add Task' name='Add' ></button>
//             </form>
//             <Todo todolist={todos} deleteHandler={deleteHandler} />
//         </div>
//     )
// }

// export default TodoForm;