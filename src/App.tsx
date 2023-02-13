import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { TodoList } from "./components/TodoList";
import { data } from "./services/data";

export const App = () => {
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    let data = localStorage.getItem("todos");
    data ? setTodos(JSON.parse(data)) : todos;
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (selectedTodo: Todo) => {
    const newList = todos.map((todo) =>
      todo === selectedTodo ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newList);
  };

  const deleteTodo = (todoId: number) => {
    const newList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newList);
  };

  const addTodo = (title: string, description: string) => {
    const newTodoList = [
      {
        id: todos.length + 1,
        title,
        description,
        completed: false,
      },
      ...todos,
    ];
    setTodos(newTodoList);
  };

  return (
    <div className="bg-slate-200 h-screen w-screen flex flex-col  place-items-center">
      <Navbar addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ) : (
        <h2 className="font-semibold text-xl mt-4">There are no tasks yet!</h2>
      )}
    </div>
  );
};
