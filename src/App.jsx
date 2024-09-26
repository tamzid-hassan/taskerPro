import { TodoContextProvider } from "./contexts/TodoContext.js"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import Todo from "./components/Todo"
import { useCallback, useEffect, useState } from "react"
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion"

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
    toast.error('Task Deleted', {
      position: "bottom-right",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      // theme: "colored",
      transition: Zoom,
      hideProgressBar: true
    });
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === id ? { ...prevTodo, task: updatedTodo.task } : prevTodo))

    toast.info('Task Updated', {
      position: "bottom-right",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Zoom,
      hideProgressBar: true

    });
  }

  useEffect(() => {
    const localSotrageTodos = JSON.parse(localStorage.getItem("todos"))

    if (localSotrageTodos && localSotrageTodos.length > 0) setTodos(localSotrageTodos)


    console.log("asdasdsd")
  }, [setTodos])

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
      <ToastContainer className="w-1/2 mb-10 text-sm ml-auto  sm:text-base md:w-[20%]" />
    </TodoContextProvider>
  )
}

export default App
