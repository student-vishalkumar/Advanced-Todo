import{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
const TodoInput = () => {
  const [task, setTask] = useState('');
  
  const [priority, setPriority] = useState('Low');

  const dispatch = useDispatch();

  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addTodo({
        task: task,
        priority: priority
      }))

      setTask('');
      setPriority('Low');
      
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-center font-semibold mb-6">Add a New Task</h2>
      <form onSubmit={handleAddTask}>
        <div className="mb-4">
          <label htmlFor="task" className="block text-gray-700 font-medium mb-2">Task:</label>
          <input 
            type="text" 
            id="task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            placeholder="Enter your task" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="priority" className="block text-gray-700 font-medium mb-2">Priority:</label>
          <select 
            id="priority" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

