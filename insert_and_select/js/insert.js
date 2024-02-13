function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");

    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value,
    };

    console.log(data);

    const jsonData = JSON.stringify(data); // json형태로 변환

    console.log(jsonData);

    const option = {
        method: "post",
        Headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    };

    fetch("http://localhost:8080//insert_and_select/data/addition", option);

    // const dataObj = JSON.parse(jsonData); // 다시 객체 형태로 변환

    // console.log(dataObj);
}
