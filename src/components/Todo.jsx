import { motion, AnimatePresence } from "framer-motion"
import { useTodoContext } from "../contexts/TodoContext.js"
import { useState } from "react"
import TodoEditor from "./TodoEditor.jsx"

function Todo({ todo }) {
    const { toggleCompleted, deleteTodo } = useTodoContext()
    const [isModalVisible, setIsModalVisible] = useState(false)

    // console.log(isModalVisible)

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -20
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    x: 30,
                }}
                transition={{
                    duration: .5,
                    type: "spring",
                    damping: 12
                }}

                className={`break-all whitespace-pre-wrap flex justify-between w-3/4 py-3 pl-2 gap-4 mx-auto mt-4 rounded-lg shadow-lg shadow-neutral/30 lg:w-2/5 ${todo.isCompleted ? "bg-accent" : "bg-neutral/10"}`}

                layout
            >   <div className="flex gap-2">
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)} className="cursor-pointer checkbox" />
                    <p className={`font-semibold md:text-lg ${todo.isCompleted ? "line-through" : ""}`}>{todo.task}</p>
                </div>
                <div className="flex pr-4 space-x-2 lg:space-x-5">
                    <button onClick={() => setIsModalVisible(prev => !prev)}><i className="transition-all duration-200 fa-solid fa-pen-to-square text-accent-content hover:text-amber-500 active:text-sm active:text-amber-700"></i></button>
                    <button onClick={() => deleteTodo(todo.id)}><i className="transition-all duration-200 fa-solid fa-trash-can text-accent-content hover:text-red-500 active:text-sm active:text-red-700"></i></button>
                </div>
            </motion.div>

            <AnimatePresence>
                {isModalVisible &&
                    (<TodoEditor key={todo.id} todo={todo} setIsModalVisible={setIsModalVisible} />)
                }
            </AnimatePresence>

        </>
    )
}

export default Todo