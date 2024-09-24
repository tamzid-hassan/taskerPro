import { useState } from "react"
import { useTodoContext } from "../contexts/TodoContext";
import { motion } from "framer-motion";

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
            layout
        >
            <form onSubmit={handleEditForm} className="flex flex-col items-center justify-center w-full gap-4 p-4 join">
                <input
                    type="text"
                    placeholder="Type to Edit..."
                    value={editorInputText}
                    onChange={(e) => setEditorInputText(e.target.value)}
                    className="w-full max-w-lg input input-bordered" />
                <div className="pr-4 space-x-5">
                    <button type="submit" className="btn btn-accent">save</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setIsModalVisible(prev => !prev)
                    }} className="btn btn-error">decline</button>
                </div>
            </form>
        </motion.div>
    )
}

export default TodoEditor