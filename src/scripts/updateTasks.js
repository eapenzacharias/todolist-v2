import { getLocal, updateLocal } from './localStorage.js';
import newIndex from './updateIndex.js';

function changeStatus(done, tasks, task) {
  const local = getLocal();
  if (local) {
    tasks = local;
    tasks = newIndex(tasks);
  }
  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  if (done.checked) {
    tasks[objIndex].completed = true;
    updateLocal(tasks);
  } else {
    tasks[objIndex].completed = false;
    updateLocal(tasks);
  }
}

function editTask(editBtn, description, tasks, task) {
  const local = getLocal();
  if (local) {
    tasks = local;
    tasks = newIndex(tasks);
  }

  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  editBtn.classList.toggle('editing');
  if (editBtn.innerHTML === '✎') {
    editBtn.innerHTML = '&#10004;';
    console.log('here');
    description.contentEditable = true;
  } else {
    editBtn.innerHTML = '&#9998;';
    description.contentEditable = false;
    tasks[objIndex].description = description.innerText;
  }
  updateLocal(tasks);
}

function deleteTask(task, tasks) {
  const local = getLocal();
  if (local) {
    tasks = local;
    tasks = newIndex(tasks);
  }
  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  tasks.splice(objIndex, 1);
  newIndex(tasks);
  window.location.reload();
}

export { changeStatus, editTask, deleteTask };