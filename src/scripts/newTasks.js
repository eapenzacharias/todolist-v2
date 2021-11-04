import { getLocal, updateLocal } from './localStorage.js';
import printTask from './printInterface.js';
import { getElement } from './queries.js';

const taskInput = getElement('#task-input');

function getTask(tasks, text) {
  if (text.length === 0) {
    taskInput.placeholder = 'Please enter a valid task title';
  } else if (tasks.length === 0) {
    taskInput.value = '';
    tasks.push({
      index: 1,
      description: text,
      completed: false,
    });
  } else {
    taskInput.value = '';
    tasks.push({
      index: tasks.length + 1,
      description: text,
      completed: false,
    });
  }
  updateLocal(tasks);
  printTask(tasks[tasks.length - 1], tasks);
  taskInput.value = '';
}

function updateTasks(tasks) {
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (taskInput.value.length > 0) {
        const local = getLocal();
        if (local) {
          tasks = local;
        } else {
          tasks = [];
        }
        getTask(tasks, taskInput.value);
        taskInput.value = '';
      }
    }
  });
  return tasks;
}

export default updateTasks;