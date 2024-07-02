let todos = [];
const form = document.querySelector('#todoForm');
function addTodo(title) {
    let newTodo = {
        id: todos.length + 1,
        title: title,
        isDone: false,
        time: new Date().toLocaleString()
    };
    todos.push(newTodo);
    displayTodos();
}

function displayTodos() {
    const todoListContainer = document.querySelector('#todoList');
    todoListContainer.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        if (todo.isDone) {
            todoItem.classList.add('done');
        }
        todoItem.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Добавлено: ${todo.time}</p>
            <button onclick="deleteTodo(${todo.id})">x</button>
        `;
        todoListContainer.appendChild(todoItem);
    });
}


function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    displayTodos();
}


form.onsubmit = (event) =>  {
    event.preventDefault();
    const todoTitleInput = document.querySelector('#todoTitle');
    const todoTitle = todoTitleInput.value.trim();
    if (todoTitle !== '') {
        addTodo(todoTitle);
        todoTitleInput.value = '';
    }
};

displayTodos();