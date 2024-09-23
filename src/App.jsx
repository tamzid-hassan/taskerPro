import { motion } from "framer-motion"
import { TodoContextProvider } from "./contexts/todoContext"


function App() {

  return (
    <TodoContextProvider>
      <h1 className='text-3xl font-bold text-secondary'>Test</h1>
      <motion.button
        whileHover={{
          rotate: "-25deg",
          scale: 1.1
        }}
        whileTap={{
          rotate: "10deg",
          scale: 0.9
        }}
        className="btn btn-primary ">Button</motion.button>
    </TodoContextProvider>
  )
}

export default App
