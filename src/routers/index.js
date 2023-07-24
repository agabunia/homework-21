import CreateToDo from "../pages/CreateToDo";
import ToDoList from "../pages/ToDoList";

const routes = [
    {
        element: <CreateToDo />,
        path: '/'
    },
    {
        element: <ToDoList />,
        path: '/todo'
    }
]

export default routes