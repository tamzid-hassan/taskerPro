import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useTodoContext } from "../contexts/TodoContext.js"
import { Bounce, toast, Zoom } from 'react-toastify';


function TodoInput() {

    const [inputText, setInputText] = useState("")
    const todoInputRef = useRef();

    const { addTodo } = useTodoContext();

    const handleInputChange = (e) => {
        if (e.target.value.length === 30) {

            todoInputRef.current.classList.add("focus:ring-error")
            todoInputRef.current.classList.remove("focus:ring-primary")

            toast.error('Max length 30 character', {
                position: "top-center",
                autoClose: 1500,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Bounce,
                hideProgressBar: true
            });
        }

        if (e.target.value.length < 30) {

            todoInputRef.current.classList.remove("focus:ring-error")
            todoInputRef.current.classList.add("focus:ring-primary")

        }


        setInputText(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (!inputText) return

        if (inputText.trim(" ").length === 0) {
            setInputText("")
            return
        }

        addTodo({ task: inputText, isCompleted: false })

        setInputText("")
    }

    return (
        <div className="w-3/4 mx-auto mt-12 lg:w-2/5">
            <form onSubmit={handleForm} className="flex justify-center w-full join">
                <input
                    ref={todoInputRef}
                    maxLength="30"
                    type="text"
                    value={inputText}
                    // onChange={(e) => setInputText(e.target.value)}
                    onChange={handleInputChange}
                    placeholder="ADD YOUR TASKS..."
                    className="w-full max-w-md pl-4 bg-base-100 text-base-content join-item ring-1 ring-inset ring-neutral-content focus:outline-none focus:ring-2"
                />

                <motion.button
                    initial={{
                        x: 0
                    }}
                    whileTap={{
                        x: 25,
                    }}
                    transition={{
                        duration: 0.125,
                        type: "spring",
                        damping: 8

                    }}
                    className="z-10 rounded-lg join-item btn btn-primary">
                    <i className="fa-solid fa-angles-right"></i>
                </motion.button>
            </form>
            <div className="flex flex-col w-full">
                <div className="divider divider-primary">Tasks</div>
            </div>
        </div>
    )
}

export default TodoInput