const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelectorAll(".box-container");
    boxContainer[0].innerHTML += `<div class="box"></div>`;

    const boxList = document.querySelectorAll(".box");

    for (let box of boxList) {
        box.onclick = () => {
            if (
                !box.classList.contains("blue-box") &&
                !box.classList.contains("red-box")
            ) {
                box.classList.add("blue-box");
            } else if (box.classList.contains("blue-box")) {
                box.classList.remove("blue-box");
                box.classList.add("red-box");
            } else if (box.classList.contains("red-box")) {
                boxContainer[0].removeChild(box);
                boxContainer[1].appendChild(box);
            }
        };
    }
};
