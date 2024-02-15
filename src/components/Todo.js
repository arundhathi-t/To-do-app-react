import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, toggle, deleteTask, editTodo }) => {
    return (
        <div className="Todo">
            <p onClick={() => toggle(task.id)}
                className={`${task.completed ? 'completed' : " "}`}>
                {task.task}  </p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />


            </div>
        </div>
    )
}

export default Todo;


// import React from 'react'

// const Todo = ({todolist,deleteHandler}) => {
//   return (
//     <div>
//       {todolist.map((todo,index)=>
//       <div key={index}>
//         <h5>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}> Delete</button></h5>
//       </div>)}
//     </div>
//   )
// }

// export default Todo;