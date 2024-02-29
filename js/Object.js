const menu1 = {
    path: "/test/menu",
    params: {
        page: 1,
        searchValue: "테스트",
    },
};

const result = "/test/menu?page=1&searchValue=테스트";

const result2 = menu1.path + "?";
console.log(result2);

const keys = Object.keys(menu1.params);
console.log(keys.map((key) => menu1.params[key]));
//[ 1, '테스트' ]

const entries = Object.entries(menu1.params);
console.log(entries.map(([key, value]) => key + "=" + value).join("&"));
//page=1&searchValue=테스트

const names = ["이동윤", "삼동윤", "사동윤"];
const names2 = names.join("&");
console.log(names);
console.log(names2);
