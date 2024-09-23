import { motion } from "framer-motion"
import { useState } from "react"

function TodoInput() {

    const [inputText, setInputText] = useState("")

    const handleForm = (e) => {
        e.preventDefault();

    }

    return (
        <div className="w-3/4 mx-auto mt-12 lg:w-2/5">
            <form onSubmit={handleForm} className="flex justify-center w-full join">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type here"
                    className="w-full max-w-md pl-4 bg-base-100 text-base-content join-item ring-1 ring-inset ring-neutral-content focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <motion.button
                    initial={{
                        x: 0
                    }}
                    whileTap={{
                        x: 25,
                    }}
                    transition={{
                        duration: 0.2,
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