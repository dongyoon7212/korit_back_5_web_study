// // spread 연산

// let array = [1, 2, 3, 4];
// array.push(5);
// array = [...array, 5, 6, ...array];

// let obj = {
//     name: "이동윤",
//     age: 26,
// };

// let obj2 = {
//     ...obj,
//     name: "삼동윤", // 동일한 키, 값 변경 가능
//     address: "사하구",
// };

// console.log(obj);
// console.log(obj2);

// 비구조 할당

// let obj = {
//     id: 1,
//     name: "이동윤",
//     age: 26,
// };

// let { id, age } = obj;

// console.log(id, age);

let dataList = [];
window.onload = () => {
    getDataList();

    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if (e.keyCode === 13) {
            const inputValue = addInput.value;

            const lastId =
                dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            const dataObj = {
                id: lastId + 1,
                content: inputValue,
            };

            fetch("http://localhost:8080/data_array/data/addition", {
                method: "post",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObj),
            });

            alert("추가 되었습니다.");

            dataList = [...dataList, dataObj];
            addInput.value = "";
            getDataList();
        }
    };
};

function contentData({ id, content }) {
    return `
                <li>
                    <span>${id}번</span>
                    <span>${content}</span>
                    <input type="text" class="edit-inputs" value="${content}" />
                    <button onclick="editData(${id})">수정</button>
                    <button onclick="removeData(${id})">삭제</button>
                </li>
            `;
}

function getDataList() {
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = "";

    for (dataObj of dataList) {
        contentList.innerHTML += contentData(dataObj);
    }
}

function removeData(id) {
    dataList = dataList.filter((dataObj) => dataObj.id !== id);

    getDataList();
}

function editData(id) {
    let findIndex = -1;

    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].id === id) {
            findIndex = i;
            break;
        }
    }

    let findObj = dataList.filter((dataObj) => dataObj.id === id)[0];

    dataList.indexOf(findObj);

    dataList[findIndex].content =
        document.querySelectorAll(".edit-inputs")[findIndex].value;

    getDataList();
}
