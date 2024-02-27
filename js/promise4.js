// main();
// main2();

new Promise((rs, reject) => {
    main(rs);
}).then(() => {
    main2();
});

function main(rs) {
    // const promises = [
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(1);
    //         }, 3000);
    //     }),
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(2);
    //         }, 2000);
    //     }),
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(3);
    //         }, 1000);
    //     }),
    // ];

    let promises = [];

    new Promise((resolve) => {
        setTimeout(() => {
            promises.push(1);
            console.log("1 넣기");
            resolve();
        }, 3000);
    }).then(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                promises.push(2);
                console.log("2 넣기");
                resolve();
            }, 2000);
        }).then(() => {
            new Promise((resolve) => {
                setTimeout(() => {
                    promises.push(3);
                    console.log("3 넣기");
                    resolve();
                }, 1000);
            }).then(() => {
                console.log(promises);
                rs();
            });
        });
    });
    
    // for (let i = 0; i < promises.length; i++) {
        //     promises[i].then((result) => {
            //         promises[i] = result;
            //         console.log(promises);
            //     });
            // }
            
}

function main2() {
    let result = [];

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    }).then((num) => {
        result = [...result, num];
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, 2000);
        }).then((num) => {
            result = [...result, num];
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(3);
                }, 1000);
            }).then((num) => {
                result = [...result, num];
                new Promise((resolve) => {
                    resolve(result);
                }).then((result) => {
                    console.log(result);
                });
            });
        });
    });
}
