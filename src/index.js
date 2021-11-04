import './style/style.css';

import printTasks from './scripts/printInterface.js';
import updateTasks from './scripts/newTasks.js';
import filterBtn from './scripts/taskFilter.js';

let tasks = [];

tasks = updateTasks(tasks);
printTasks(tasks);
filterBtn();