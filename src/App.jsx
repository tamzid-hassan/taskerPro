import { TodoContextProvider } from "./contexts/todoContext"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"


function App() {

  return (
    <TodoContextProvider value>
      <Header />
      <TodoInput />
    </TodoContextProvider>
  )
}

export default App
