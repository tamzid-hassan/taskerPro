import { useState } from "react"
import { useTodoContext } from "../contexts/TodoContext";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';

function TodoEditor({ todo, setIsModalVisible }) {

    const [editorInputText, setEditorInputText] = useState(todo.task)
    const { updateTodo } = useTodoContext()

    const handleEditForm = (e) => {
        e.preventDefault();

        updateTodo(todo.id, { ...todo, task: editorInputText })

        setIsModalVisible(prev => !prev)
    }

    return (
        <motion.div
            initial={{
                scale: 0.9
            }}
            animate={{
                scale: 1
            }}
            transition={{
                duration: 0.5,
                ease: "circOut"
            }}
            layout
        >
            <form onSubmit={handleEditForm} className="flex flex-col items-center justify-center w-full gap-4 p-4 join">
                <input
                    maxLength="35"
                    type="text"
                    placeholder="Type to Edit..."
                    value={editorInputText}
                    onChange={(e) => setEditorInputText(e.target.value)}
                    className="w-full max-w-lg input input-bordered" />
                <div className="pr-4 space-x-2 lg:space-x-5">
                    <button type="submit" className="lg:w-32 btn btn-accent">
                        <i className="font-thin fa-regular fa-floppy-disk"></i>
                        Update
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setIsModalVisible(prev => !prev)
                    }} className="lg:w-32 btn btn-error">
                        <i className="fa-solid fa-xmark"></i>
                        Discard
                    </button>
                </div>
            </form>
        </motion.div>
    )
}

export default TodoEditor