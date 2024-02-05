// 자바스크립트 객체 형태 = { key: value, key: value }

let student = {
    name: "이동윤",
    age: 26,
};

console.log(student);
console.log(typeof student);
console.log(student.name);

class Student {
    name;
    age;

    //생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let s = new Student("삼동윤", 26);
// s.name = "이동윤";
// s.age = 26;
console.log(s);

class User {
    #username;
    password;

    set setUsername(username) {
        this.#username = username;
    }

    get username() {
        return this.#username;
    }
}

let user = new User();
user.setUsername = "dongyoon";
console.log(user.username);
