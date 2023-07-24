const initialState = {
    todoList: [],
    doneList: []
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return { 
                todoList: [...state.todoList, action.payload]
            }
        case 'REMOVE_TODO':
            return { 
                todoList: state.todoList.filter((task) => task !== action.payload)
            }
        case 'ADD_DONE':
            return { 
                todoList: state.todoList.filter((task) => task !== action.payload),
                doneList: [...state.doneList, action.payload]
            }    
        default:
            return state
    }
}