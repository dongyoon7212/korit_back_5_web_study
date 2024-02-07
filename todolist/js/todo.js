window.onload = () => {
    getTodoList();

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let newArr = [];
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);

    let newArr2 = arr.filter((num) => num % 2 === 0);

    console.log(newArr2);
};

function getTodoList() {
    const todoContentList = document.querySelector(".todo-content-list");

    const todoListJson = localStorage.getItem("todoList");
    const todoList =
        todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    todoContentList.innerHTML = "";

    for (let todo of todoList) {
        todoContentList.innerHTML += `
            <li class="todo-content-box">
                <div class="todo-content-header">
                    <span>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="todo-content-date">
                        ${todo.date}
                    </span>
                </div>
                <div class="todo-content-main">
                    <pre class="todo-content">${todo.content}</pre>
                </div>
                <div class="todo-content-footer">
                    <button class="todo-edit-button" onclick="handleEditToDoModalOpen(${todo.todoId})">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="todo-remove-button">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </li>
        `;
    }
}
