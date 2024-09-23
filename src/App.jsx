import { motion } from "framer-motion"

function App() {

  return (
    <>
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
    </>
  )
}

export default App
