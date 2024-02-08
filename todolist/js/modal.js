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
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddToDoSubmit;

    todoInput.onkeydown = (e) => {
        if (!e.shiftKey && e.keyCode === 13) {
            submitButton.onclick();
        }
    };

    modal.classList.add("modal-show");
}

function handleEditToDoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "수정하기";

    let todoListJson = localStorage.getItem("todoList");
    let todoList =
        todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findTodoByTodoId = todoList.filter((todo) => todo.todoId === todoId)[0];

    todoInput.value = findTodoByTodoId.content;
    submitButton.onclick = () => handleEditToDoSubmit(todoId);

    todoInput.onkeydown = (e) => {
        if (!e.shiftKey && e.keyCode === 13) {
            submitButton.onclick();
        }
    };

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

    let todoListJson = localStorage.getItem("todoList");
    let todoList =
        todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let lastTodoId =
        todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;

    if (todoInput.value === "") {
        alert("내용을 입력하세요!");
    } else {
        let todoObject = {
            todoId: lastTodoId + 1,
            content: todoInput.value,
            date: convertDateKor(new Date()),
        };

        todoList.push(todoObject);

        localStorage.setItem("todoList", JSON.stringify(todoList));
        modal.classList.remove("modal-show");

        getTodoList();
    }
}

function handleEditToDoSubmit(todoId) {
    const modal = document.querySelector(".root-modal");

    let todoListJson = localStorage.getItem("todoList");
    let todoList =
        todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findIndex = -1;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].todoId === todoId) {
            findIndex = i;
            break;
        }
    }

    if (findIndex === -1) {
        alert("수정오류!");
        return;
    }

    todoList[findIndex].content = document.querySelector(".todo-input").value;
    todoList[findIndex].date = convertDateKor(new Date());

    if (todoList[findIndex].content === "") {
        alert("내용을 입력하세요!");
    } else {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        modal.classList.remove("modal-show");

        getTodoList();
    }
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}
