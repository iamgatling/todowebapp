const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

// Load to-dos from local storage
function loadTodos() {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    renderTodos();
  }
}

// Save to-dos to local storage
function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const editInput = document.createElement('input');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
      todos[index].completed = !todos[index].completed;
      if (todos[index].completed) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
      renderTodos();
      updateLocalStorage(); // Update local storage
    });

    label.textContent = todo.text;
    label.addEventListener('dblclick', function () {
      li.classList.add('editing');
      editInput.classList.remove('hidden');
      editInput.focus();
    });

    editInput.type = 'text';
    editInput.value = todo.text;
    editInput.classList.add('edit-input', 'hidden');
    editInput.addEventListener('keypress', function (event) {
      if (event.keyCode === 13) {
        todos[index].text = editInput.value;
        renderTodos();
        updateLocalStorage(); // Update local storage
      }
    });

    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
      li.classList.add('editing');
      editInput.classList.remove('hidden');
      editInput.focus();
    });

    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      todos.splice(index, 1);
      renderTodos();
      updateLocalStorage(); // Update local storage
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(editInput);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    if (todo.completed) {
      li.classList.add('completed');
    }

    list.appendChild(li);
  });
}

function addTodo() {
  if (input.value.trim() !== '') {
    const todo = {
      text: input.value,
      completed: false,
    };

    todos.push(todo);

    input.value = '';

    renderTodos();
    updateLocalStorage(); // Update local storage
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  addTodo();
});

// Call loadTodos when the page loads
window.addEventListener('load', loadTodos);

// Initial render of to-dos
renderTodos();
