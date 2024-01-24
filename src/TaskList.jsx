// TaskList.js (Updated for Filtering)
import React from 'react';
import { useTask } from './TaskContext';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = () => {
  const { state, dispatch } = useTask();

  const handleToggle = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleRemove = (taskId) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  const filteredTasks = state.filter === 'completed'
    ? state.tasks.filter(task => task.completed)
    : state.tasks;

  return (
    <Droppable droppableId="taskList">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {filteredTasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  key={task.id}
                  className={task.completed ? 'completed' : ''}
                >
                  <span onClick={() => handleToggle(task.id)}>{task.title}</span>
                  <button onClick={() => handleRemove(task.id)}>Remove</button>
                  <span>Due Date: {task.dueDate || 'Not set'}</span>
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default TaskList;
