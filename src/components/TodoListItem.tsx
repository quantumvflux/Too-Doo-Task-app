import { motion } from "framer-motion";
import { MdDone, BsTrash, IoRemoveCircleOutline } from "react-icons/all";
interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  const todoBackgroundColor = (todo: Todo) =>
    todo.completed ? "bg-green-600" : "bg-indigo-500";

  return (
    <>
      {todos.map((todo) => (
        <motion.li
          whileHover={{ scale: 1.01 }}
          className={`${todoBackgroundColor(
            todo
          )} flex justify-between items-center shadow-lg hover:cursor-pointer hover:bg-opacity-90 transition-colors p-4 rounded-lg mx-2 text-white`}
          key={todo.id}
        >
          <div>
            <h3 className="text-xl">{todo.title}</h3>
            <h4>{todo.description}</h4>
          </div>
          <div className="flex gap-4">
            <motion.div whileTap={{ scale: 0.9 }}>
              <BsTrash
                onClick={() => deleteTodo(todo.id)}
                className="text-xl w-10 p-2 h-10 bg-gray-300 bg-opacity-0 hover:bg-opacity-50 transition-all rounded-full"
              />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              {todo.completed ? (
                <IoRemoveCircleOutline
                  onClick={() => toggleTodo(todo)}
                  className="text-xl w-10 p-2 h-10 bg-gray-300 bg-opacity-0 hover:bg-opacity-50 transition-all rounded-full"
                />
              ) : (
                <MdDone
                  onClick={() => toggleTodo(todo)}
                  className="text-xl w-10 p-2 h-10 bg-gray-300 bg-opacity-0 hover:bg-opacity-50 transition-all rounded-full"
                />
              )}
            </motion.div>
          </div>
        </motion.li>
      ))}
    </>
  );
};
