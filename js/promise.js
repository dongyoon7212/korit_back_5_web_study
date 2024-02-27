main();

let complete = [false, false, false, false];

function main() {
    const promises = [
        gugudan(0, 4, "이동윤"),
        gugudan(1, 1, "삼동윤"),
        gugudan(2, 3, "사동윤"),
        gugudan(3, 2, "오동윤"),
    ];

    Promise.all(promises)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

function gugudan(index, time, name) {
    const p = new Promise((resolve, reject) => {
        console.log(`${name}: 외워와`);

        setTimeout(() => {
            console.log(`${name}: 다 외웠어요!!`);
            complete = complete.map((value, cIndex) => {
                cIndex !== index ? value : true;
            });
            if (index === 0) {
                reject("오류");
                return;
            }
            resolve(index);
        }, time * 1000);
    });

    return p;
}
