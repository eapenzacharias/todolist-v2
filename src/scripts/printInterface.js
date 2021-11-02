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

function printTask(task) {
  const li = createElement('li');
  const done = createElement('input');
  done.type = 'checkbox';
  done.checked = task.completed;
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

export default printTask;