import { motion, AnimatePresence } from "framer-motion"


function Todo() {

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    y: -20
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: .5,
                    type: "spring",
                    damping: 12
                }}

                className="flex justify-between w-3/4 py-5 pl-2 mx-auto mt-4 rounded-lg shadow-lg shadow-secondary/30 bg-secondary lg:w-2/5"

                layout
            >
                <p className="font-bold text-secondary-content md:text-lg">asasd</p>
                <div className="pr-4 space-x-5">
                    <button><i className="fa-solid fa-pen-to-square text-info"></i></button>
                    <button><i className="fa-solid fa-trash-can text-error"></i></button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Todo