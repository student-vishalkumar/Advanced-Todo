import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todoSlice";
import { fetchWeather } from "../features/weatherSlice";

const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => {
    console.log('weather state',state.weather)
    return state.weather});

  console.log('wthdt', data);

  useEffect(() => {
    if (todos.length > 0) {
        const city = "New Delhi"
        dispatch(fetchWeather(city)); 
    }
}, [todos, dispatch]);
  

  useEffect(() => {
    const todoList = localStorage.getItem("todos");
    if (todoList) {
      const parseTodos = JSON.parse(todoList);
      console.log("parstodo", typeof parseTodos, parseTodos);

      parseTodos.forEach((todo) => {
        dispatch(addTodo(todo));
      });
    }
  }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

  const sortedTodos = [...todos].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  console.log("sortedTodos", sortedTodos);

  return (
    <div className="max-w-md mx-auto mt-5 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4 mr-10">
        Task List
      </h2>

      <ul>
        {sortedTodos.length > 0 ? (
          sortedTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-3 border-b last:border-none"
            >
              <div>
                <p className="text-lg font-medium">{todo.task}</p>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    todo.priority === "High"
                      ? "bg-red-500 text-white"
                      : todo.priority === "Medium"
                      ? "bg-yellow-500 text-black"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {todo.priority}
                </span>
              </div>
              <div>
              {loading && <p className="text-center text-gray-500">Loading weather...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}
            {data && (
                <div className="bg-blue-100 p-3 rounded-lg mb-4">
                    <h3 className="text-lg font-bold">{data.location.name} Weather</h3>
                    <p>Temperature: {data.current.temp_c}°C</p>
                    <p>Condition: {data.current.condition.text}</p>
                </div>
            )}
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
