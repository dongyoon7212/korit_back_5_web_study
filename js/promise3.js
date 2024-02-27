main();

function main() {
    const promises = [
        new Promise((resolve, reject) => {
            console.log("시작1");
            setTimeout(() => {
                resolve(1);
                console.log("끝1")
            }, 3000);
        }),
        new Promise((resolve, reject) => {
            console.log("시작2");
            setTimeout(() => {
                resolve(2);
                console.log("끝2")
            }, 2000);
        }),
        new Promise((resolve, reject) => {
            console.log("시작3");
            setTimeout(() => {
                resolve(3);
                console.log("끝3")
            }, 1000);
        }),
    ];

    Promise.all(promises).then((result) => {
        console.log(result);
    });
}
