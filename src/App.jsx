import React, { useState } from 'react';
import TaskList from './TaskList'; 
import AddTaskForm from './AddTaskForm'; 
import { TaskProvider } from './TaskContext';

function App() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
    <TaskProvider>
      <div className="app">
        <h1>ToDo List App</h1>
        <AddTaskForm />
        <div>
          <button onClick={() => handleFilterChange('all')}>Show All</button>
          <button onClick={() => handleFilterChange('completed')}>Show Completed</button>
        </div>
        <TaskList filter={filter} />
      </div>
    </TaskProvider>
    </>
  );
}

export default App;
