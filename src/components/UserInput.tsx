import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/all";

interface Props {
  addTodo: AddTodo;
  handleShowAdd: HandleShowAdd;
}

export const UserInput: React.FC<Props> = ({ addTodo, handleShowAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleInformation = (title: string, description: string) => {
    let condition = title === "";
    condition
      ? alert("Please add a title for the task")
      : addTodo(title, description);
    setTitle("");
    setDescription("");
    handleShowAdd();
  };
  return (
    <AnimatePresence>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-indigo-500 z-20 p-4 w-full h-full absolute "
      >
        <div className="md:w-1/3 m-auto ">
          <button className="text-white text-4xl m-0" onClick={handleShowAdd}>
            <IoCloseOutline />
          </button>
          <h2 className="text-white mb-4 text-center font-bold text-xl">
            Add new to-do
          </h2>
          <div className="flex flex-col gap-4 mb-4 ">
            <input
              type={"text"}
              placeholder={"Title..."}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="h-10 rounded-lg pl-1 font-medium text-xl focus:outline-none placeholder:ml-4"
            />
            <textarea
              placeholder={"Description..."}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="h-20 font-light pl-1 resize-none rounded-lg focus:outline-none"
            ></textarea>
          </div>
          <button
            className="text-white  bg-blue-700 p-2 w-full rounded-lg m-auto"
            onClick={(e) => {
              e.preventDefault();
              handleInformation(title, description);
            }}
          >
            Add
          </button>
        </div>
      </motion.form>
    </AnimatePresence>
  );
};
