import { updateLocal } from './localStorage.js';

function newIndex(tasks) {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  updateLocal(tasks);
  return tasks;
}

export default newIndex;