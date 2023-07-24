import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { doneAction, removeTodoAction } from "../store/todo/todo.actions"

const ToDoList = () => {
    const { todoList } = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const removeTask = (item) => {
        dispatch(removeTodoAction(item))
    }

    const doneTask = (item) => {
        dispatch(doneAction(item))
    }

    return (
        <div>
            <Link to={'/'}>To Create</Link>
            <h2>To Do List</h2>
            {todoList.map((item) => <div key={item}> 
                {item}
                <button onClick={() => removeTask(item)}>Delete</button>
                <button onClick={() => doneTask(item)}>Done</button> 
            </div>)}
        </div>
    )
}

export default ToDoList