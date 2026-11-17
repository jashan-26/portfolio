import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Window } from '../Window';
import { todoList } from '../../data/content';
import './ToDoWindow.css';

// Cat icon for To_Do.exe titlebar
const ToDoCatIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
    <circle cx="12" cy="13" r="7.5" fill="#FFF" stroke="#27405A" strokeWidth="1.8" />
    <polygon points="5,7 8,2 11,6" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
    <polygon points="13,6 16,2 19,7" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="9.5" cy="12" r="1.2" fill="#27405A" />
    <circle cx="14.5" cy="12" r="1.2" fill="#27405A" />
  </svg>
);

export const ToDoWindow: React.FC = () => {
  const [tasks, setTasks] = useState(todoList);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  return (
    <Window
      id="win-todo"
      title="To_Do.exe"
      variant="mint"
      icon={<ToDoCatIcon />}
      className="todo-window"
    >
      <div className="todo-inner">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="todo-row"
            onClick={(e) => {
              e.preventDefault();
              toggleTask(task.id);
            }}
          >
            <div className={`todo-custom-checkbox ${task.checked ? 'is-checked' : ''}`}>
              {task.checked && <Check size={11} strokeWidth={3.5} color="#FFFFFF" />}
            </div>
            <span className={`todo-text ${task.checked ? 'todo-checked' : ''}`}>
              {task.label}
            </span>
          </label>
        ))}
      </div>
    </Window>
  );
};
