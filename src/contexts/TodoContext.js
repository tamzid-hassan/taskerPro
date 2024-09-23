import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        task: "Default Todo One",
        isCompleted: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { },
});

export const TodoContextProvider = TodoContext.Provider


export const useTodoContext = () => {
    return useContext(TodoContext)
};




