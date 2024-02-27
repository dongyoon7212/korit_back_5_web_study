main();

function main() {
    new Promise((resolve) => {
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(4);
            const result = "끝";
            resolve(result);
        }, 3000);
    }).then((result) => {
        console.log(`${result}then 실행`);
    });
    console.log(3);
}
