import { motion, AnimatePresence } from "framer-motion"
import { useTodoContext } from "../contexts/TodoContext.js"
import { useState } from "react"
import TodoEditor from "./TodoEditor.jsx"

function Todo({ todo }) {
    const { toggleCompleted, deleteTodo, updateTodo } = useTodoContext()
    const [isModalVisible, setIsModalVisible] = useState(false)

    // console.log(isModalVisible)

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    x: 0,
                    y: -20
                }}
                animate={{
                    x: 0,
                    y: 0,
                }}
                transition={{
                    duration: .5,
                    type: "spring",
                    damping: 12
                }}

                className={`flex justify-between w-3/4 py-3 pl-2 mx-auto mt-4 rounded-lg shadow-lg shadow-neutral/30 lg:w-2/5 ${todo.isCompleted ? "bg-accent" : "bg-neutral/10"}`}

                layout
            >   <div className="flex items-center justify-center gap-4">
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)} className="cursor-pointer checkbox" />
                    <p className={`font-bold md:text-lg ${todo.isCompleted ? "line-through" : ""}`}>{todo.task}</p>
                </div>
                <div className="pr-4 space-x-5">
                    <button onClick={() => setIsModalVisible(prev => !prev)}><i className="transition-all duration-200 fa-solid fa-pen-to-square text-accent-content hover:text-amber-500 active:text-sm active:text-amber-700"></i></button>
                    <button onClick={() => deleteTodo(todo.id)}><i className="transition-all duration-200 fa-solid fa-trash-can text-accent-content hover:text-red-500 active:text-sm active:text-red-700"></i></button>
                </div>
            </motion.div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40 w-3/4 card bg-neutral text-accent-content" key={todo.id}>

                {isModalVisible &&
                    (<TodoEditor todo={todo} setIsModalVisible={setIsModalVisible} />
                    )}
            </div>
        </AnimatePresence>
    )
}

export default Todo