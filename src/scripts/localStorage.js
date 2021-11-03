function updateLocal(tasks) {
  localStorage.setItem('todolist', JSON.stringify(tasks));
}

function getLocal() {
  if (localStorage) {
    const tasks = JSON.parse(localStorage.getItem('todolist'));
    return tasks;
  }
  return -1;
}

export { updateLocal, getLocal };