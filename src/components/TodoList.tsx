import { TodoListItem } from "./TodoListItem";
interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ul className="flex flex-col gap-2 w-full mt-2 md:w-1/3">
      <TodoListItem
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </ul>
  );
};
