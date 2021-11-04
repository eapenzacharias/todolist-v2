import './style/style.css';

import printTasks from './scripts/printInterface.js';
import updateTasks from './scripts/newTasks';

let tasks = [];

tasks = updateTasks(tasks);

printTasks(tasks);