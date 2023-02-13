interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string, description: string) => void;

type DeleteTodo = (todoId: number) => void;

type HandleShowAdd = () => void;
