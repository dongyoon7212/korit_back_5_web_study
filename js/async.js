main();

function main() {
    p1(3, "data1").then((result) => {
        console.log(result);
    });
    setTimeout(() => {
        p2("data2").then((result) => console.log(result));
    }, 4000);
}

function p1(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), time * 1000);
    });
}

async function p2(data) {
    return data;
}
