import { useState } from "react";
import { UserInput } from "./UserInput";
import { MdLibraryAdd } from "react-icons/all";

interface Props {
  addTodo: AddTodo;
}

export const Navbar: React.FC<Props> = ({ addTodo }) => {
  const [showAdd, setShowAdd] = useState(false);

  const handleShowAdd = () => setShowAdd((prevShowAdd) => !prevShowAdd);

  return (
    <>
      <nav className="bg-indigo-500 w-screen h-16 flex justify-center items-center">
        <div className="flex justify-end items-center relative w-screen md:w-1/3 m-auto">
          <h1 className="text-center left-0 right-0 absolute text-2xl text-white font-extrabold">
            TOO-DOO
          </h1>
          <button
            onClick={handleShowAdd}
            className="text-white flex justify-center items-center text-3xl w-12 h-12 z-10  bg-gray-300 bg-opacity-0 hover:bg-opacity-50 transition-all rounded-full"
          >
            <MdLibraryAdd />
          </button>
        </div>
      </nav>
      {showAdd ? (
        <UserInput addTodo={addTodo} handleShowAdd={handleShowAdd} />
      ) : null}
    </>
  );
};
