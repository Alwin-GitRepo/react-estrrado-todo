// AddTaskForm.jsx
import React, { useState } from 'react';
import { useTask } from './TaskContext'; // Update path

const AddTaskForm = () => {
  const { dispatch } = useTask();
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: new Date().getTime(),
        title: newTask,
        completed: false,
        dueDate: dueDate || null,
      };
      dispatch({ type: 'ADD_TASK', payload: task });
      setNewTask('');
      setDueDate('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due Date"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;
