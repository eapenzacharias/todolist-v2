import './style/style.css';

import printTasks from './scripts/printInterface.js';

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

printTasks(tasks);