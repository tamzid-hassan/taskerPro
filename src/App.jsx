import { TodoContextProvider } from "./contexts/TodoContext.js"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import Todo from "./components/Todo"
import { useEffect, useState } from "react"


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

  const updateTodo = (id, updatedTodo) => {
    setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === id ? { ...prevTodo, task: updatedTodo.task } : prevTodo))
  }


  useEffect(() => {
    const localSotrageTodos = JSON.parse(localStorage.getItem("todos"))

    if (localSotrageTodos && localSotrageTodos.length > 0) setTodos(localSotrageTodos)

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ addTodo, toggleCompleted, deleteTodo, updateTodo }}>
      <Header />
      <TodoInput />
      {todos && todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodoContextProvider>
  )
}

export default App
