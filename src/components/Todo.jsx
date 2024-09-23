import { motion, AnimatePresence } from "framer-motion"
import { useTodoContext } from "../contexts/TodoContext.js"

function Todo({ todo }) {
    const { toggleCompleted, deleteTodo } = useTodoContext()

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

                className={`flex justify-between w-3/4 py-3 pl-2 mx-auto mt-4 rounded-lg shadow-lg shadow-neutral/30 bg-neutral/10 lg:w-2/5 ${todo.isCompleted ? "bg-accent" : ""}`}

                layout
            >   <div className="flex items-center justify-center gap-4">
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)} className="cursor-pointer checkbox" />
                    <p className={`font-bold md:text-lg ${todo.isCompleted ? "line-through" : ""}`}>{todo.task}</p>
                </div>
                <div className="pr-4 space-x-5">
                    <button><i className="transition-all duration-200 fa-solid fa-pen-to-square text-accent-content hover:text-amber-500 active:text-sm"></i></button>
                    <button onClick={() => deleteTodo(todo.id)}><i className="transition-all duration-200 fa-solid fa-trash-can text-accent-content hover:text-red-500 active:text-sm"></i></button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Todo