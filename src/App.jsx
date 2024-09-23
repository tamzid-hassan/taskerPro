import { TodoContextProvider } from "./contexts/todoContext"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import Todo from "./components/Todo"
import { useState } from "react"


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prevTodos => [{ id: Date.now(), ...todo }, ...prevTodos])
  }

  const toggleCompleted = (id) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== id))
  }


  return (
    <TodoContextProvider value={{ addTodo, toggleCompleted, deleteTodo }}>
      <Header />
      <TodoInput />
      {todos && todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}

    </TodoContextProvider>
  )
}

export default App
