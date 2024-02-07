// window.onload = () => {
// const day = ["일", "월", "화", "수", "목", "금", "토"];
// let now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(day[now.getDay()]);

// let arr = new Array();

// let obj = {
//     id: 1,
//     name: "이동윤",
// };

// let obj2 = {
//     id: 2,
//     name: "이동윤",
// };

// arr.push(obj);
// arr.push(obj2);

// console.log(arr);

// console.log(JSON.stringify(arr));
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj2));

// let jsonArr = JSON.stringify(arr);

// console.log(JSON.parse(jsonArr));
// };

window.onkeyup = (e) => {
    if (e.keyCode === 27) {
        handleCancelClick();
    }
};

function handleAddToDoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelectorAll(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    submitButton[0].onclick = handleAddToDoSubmit;
    modal.classList.add("modal-show");
}

function handleEditToDoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelectorAll(".modal-button");
    title.innerHTML = "수정하기";

    let todoListJson = localStorage.getItem("todoList");
    let todoList =
        todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findTodoByTodoId = todoList.filter((todo) => todo.todoId === todoId)[0];

    todoInput.value = findTodoByTodoId.content;
    submitButton[0].onclick = handleEditToDoSubmit;

    modal.classList.add("modal-show");
}

function convertDateKor(currentDate) {
    const dayKors = ["일", "월", "화", "수", "목", "금", "토"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = dayKors[currentDate.getDay()];
    return `${year}년 ${month}월 ${date}일 (${day})`;
}

function handleAddToDoSubmit() {
    const modal = document.querySelector(".root-modal");
    const todoInput = modal.querySelector(".todo-input");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList");
    let todoList =
        todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let lastTodoId =
        todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;

    let todoObject = {
        todoId: lastTodoId + 1,
        content: todoInput.value,
        date: convertDateKor(new Date()),
    };

    todoList.push(todoObject);

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
}

function handleEditToDoSubmit() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}
