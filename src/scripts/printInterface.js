import { getLocal } from './localStorage.js';
import { getElement, createElement } from './queries.js';
import { changeStatus, editTask } from './updateTasks.js';

const subMenu = (menu, description, tasks, task) => {
  const editBtn = createElement('span');
  editBtn.innerHTML = '&#9998;';
  editBtn.className = 'edit-btn fadeInRight';
  const delBtn = createElement('span');
  delBtn.innerHTML = '&#10005;';
  delBtn.className = 'del-btn fadeInRight';
  editBtn.addEventListener('click', () => {
    console.log('btn clicked');
    editTask(editBtn, description, tasks, task);
  });
  menu.appendChild(editBtn);
  menu.appendChild(delBtn);
  return menu;
};

function printTask(task, tasks) {
  const li = createElement('li');
  const done = createElement('input');
  done.type = 'checkbox';
  done.checked = task.completed;
  if (task.completed) {
    li.className = 'completed';
  }
  done.addEventListener('change', () => {
    li.classList.toggle('completed');
    changeStatus(done, tasks, task);
  });
  const description = createElement('span');
  description.className = 'task-text';
  description.innerHTML = task.description;
  let menu = createElement('span');
  const menuBtn = createElement('span');
  menuBtn.innerHTML = '⋮';
  menu.appendChild(menuBtn);
  menu.className = 'task-options';
  let mTog = true;
  menuBtn.addEventListener('click', () => {
    if (mTog) {
      menu = subMenu(menu, description, tasks, task);
      mTog = false;
    } else {
      menu.innerHTML = '';
      menu.appendChild(menuBtn);
      mTog = true;
    }
  });
  li.appendChild(done);
  li.appendChild(description);
  li.appendChild(menu);
  getElement('#tasks').appendChild(li);
}

function printTasks(tasks) {
  const local = getLocal();
  if (local) {
    tasks = local;
  }
  tasks.forEach((task) => printTask(task, tasks));
}

export default printTasks;