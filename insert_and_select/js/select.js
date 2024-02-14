async function handleSearchClick() {
    try {
        // option이 없으면 기본값이 get요청이다.
        const response = await fetch(
            "http://localhost:8080/insert_and_select/data/list"
        );
        if (!response.ok) {
            throw await response.json();
        }

        const responseData = await response.json();

        const studentList = document.querySelector(".student-list");

        studentList.innerHTML = ``;

        for (let student of responseData.data) {
            studentList.innerHTML += `
                <li>studentId: ${student.studentId} / name: ${student.name} / age: ${student.age}</li>
            `;
        }
    } catch (error) {
        console.log(error);
    }
}
