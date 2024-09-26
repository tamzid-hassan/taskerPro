import { useState } from "react"
import { useTodoContext } from "../contexts/TodoContext";
import { motion, spring } from "framer-motion";

function TodoEditor({ todo, setIsModalVisible }) {

    const [editorInputText, setEditorInputText] = useState(todo.task)
    const { updateTodo } = useTodoContext()

    const handleEditForm = (e) => {
        e.preventDefault();

        updateTodo(todo.id, { ...todo, task: editorInputText })

        setIsModalVisible(prev => !prev)
    }

    return (
        <div className="absolute px-5 w-full max-w-[640px] max-h-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

            <motion.div
                initial={{
                    scale: 0.9
                }}
                animate={{
                    scale: 1
                }}
                transition={{
                    duration: 0.25,
                    type: "tween",

                }}
                exit={{
                    scale: .8
                }}
                layout
                className="z-50 card bg-neutral text-accent-content"
            >
                <form onSubmit={handleEditForm} className="flex flex-col items-center justify-center w-full gap-4 p-4 join">
                    <input
                        maxLength="30"
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
        </div>


    )
}

export default TodoEditor