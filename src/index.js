import './style/style.css';

import { getElement, createElement } from './scripts/queries.js';

const tasks = [
  {
    description: 'Lorem 1 ipsum dolor sit amet.',
    completed: true,
    index: 1,
  },
  {
    description: 'Lorem 2 ipsum dolor sit amet.',
    completed: false,
    index: 2,
  },
  {
    description: 'Lorem 3 ipsum dolor sit amet.',
    completed: true,
    index: 3,
  },
  {
    description: 'Lorem 4 ipsum dolor sit amet.',
    completed: false,
    index: 4,
  },
  {
    description: 'Lorem 5 ipsum dolor sit amet.',
    completed: true,
    index: 5,
  },
  {
    description: 'Lorem 6 ipsum dolor sit amet.',
    completed: false,
    index: 6,
  },
];

function printTasks(task) {
  const li = createElement('li');
  const done = createElement('input');
  done.type = 'checkbox';
  done.checked = task.completed;
  const description = createElement('span');
  description.innerHTML = task.description;
  const menu = createElement('span');
  menu.innerHTML = '⋮';
  menu.className = 'task-options';
  li.appendChild(done);
  li.appendChild(description);
  li.appendChild(menu);
  getElement('#tasks').appendChild(li);
}

tasks.forEach((task) => printTasks(task));