async function handleSubmitClick() {
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

    // fetch("http://localhost:8080//insert_and_select/data/addition", option)
    //     .then((response) => {
    //         response.json().then((json) => {
    //             console.log(json.data);
    //             console.log("test");
    //         });
    //     })
    //     .catch((error) => {
    //         console.log("프로미스 예외처리");
    //         console.log(error);
    //     });
    // then 안에는 함수가 들어간다.
    // 위는 promise로 사용할 경우

    // async await사용할 경우
    // await을 쓸땐 try catch를 사용해야한다.
    try {
        const response = await fetch(
            "http://localhost:8080//insert_and_select/data/addition",
            option
        );

        if (!response.ok) {
            throw await response.json();
        }

        console.log(response);

        const json = await response.json();

        console.log(json);

        console.log("test");
    } catch (error) {
        // console.log("에러 처리");
        // console.log(error);
        alert(error.errorMessage);
    }

    // const dataObj = JSON.parse(jsonData); // 다시 객체 형태로 변환

    // console.log(dataObj);
}
