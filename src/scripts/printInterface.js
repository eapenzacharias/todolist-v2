import { getLocal, updateLocal } from './localStorage.js';
import { getElement, createElement } from './queries.js';

const subMenu = () => {
  const menu = createElement('div');
  const editBtn = createElement('span');
  menu.className = 'sub-menu';
  editBtn.innerHTML = '&#9997;';
  editBtn.className = 'edit-btn';
  const delBtn = createElement('span');
  delBtn.innerHTML = '&#10005;';
  delBtn.className = 'del-btn';
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
    const objIndex = tasks.findIndex((obj) => obj.index === task.index);
    li.classList.toggle('completed');
    if (done.checked) {
      tasks[objIndex].completed = true;
      updateLocal(tasks);
    } else {
      tasks[objIndex].completed = false;
      updateLocal(tasks);
    }
  });
  const description = createElement('span');
  description.innerHTML = task.description;
  const menu = createElement('span');
  menu.innerHTML = '⋮';
  menu.className = 'task-options';
  let mTog = true;
  menu.addEventListener('click', () => {
    menu.innerHTML = '';
    if (mTog) {
      menu.appendChild(subMenu(menu));
      mTog = false;
    } else {
      menu.innerHTML = '⋮';
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