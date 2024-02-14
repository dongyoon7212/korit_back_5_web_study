// promise를 함수로 정의할때 async
async function fx1() {
    console.log("fx1 비동기 호출");
    return 10;
    // promise객체를 리턴하게 됨
    // return이 resolve호출을 함
    // return이 없어도 실행이 끝나면 끝에는 resolve가 호출됨
    // then이 정의가 되어있지않으면 실행만 되고 끝남
    // throw new Error();
    // throw는 reject를 호출함
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + "출력");
}

async function fx3() {
    let arg = 0;
    // fx1().then((result) => {
    //     arg = result;
    //     console.log(arg);
    //     fx2(arg);
    // });
    let fx1Result = await fx1();
    // await는 fx1이 실행이 다 끝나고 리턴값을 반환함
    // fx1의 비동기가 다 끝날때까지 기다림
    // 비동기를 동기로 바꿔주는게 await
    arg = fx1Result;
    fx2(arg);
}

function handleSubmitClick2() {
    // console.log(fx1());
    // fx1()
    //     .then((result) => {
    //         console.log("then 호출");
    //         console.log(result);
    //     })
    //     .catch(() => {
    //         console.log("오류 생성");
    //     });

    // console.log("동기 실행");
    fx3();
}

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        // resolve();
        // reject(); // 예외처리
        reject();
    });

    // resolve()가 호출이 되면 then이 실행이 된다.
    p1.then(() => {
        console.log("p1 then 실행");
        return 10;
    })
        .then((num) => {
            console.log(num);
        })
        .then(() => {
            console.log("세번째 then");
        })
        .catch(() => {
            console.log("오류");
        });

    // reject()가 호출이 되면 catch가 실행이 된다.
    // p1.catch(() => {
    //     console.log("오류");
    // });

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");
}
