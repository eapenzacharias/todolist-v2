import { getLocal } from './localStorage.js';
import printTasks from './printInterface.js';
import { getElement } from './queries.js';
import newIndex from './updateIndex.js';

function taskFilter(list) {
  const local = getLocal();
  if (local) {
    list = local;
  }
  const filtered = list.filter((task) => !task.completed);
  list = newIndex(filtered);
  printTasks(list);
}

function filterBtn(list = []) {
  const local = getLocal();
  if (local) {
    list = local;
  }
  const clearBtn = getElement('#clear-btn');
  clearBtn.onclick = () => taskFilter(list);
}

export default filterBtn;