async function getNumber(number) {
    let promise =  new Promise((resolve, reject) => {
        setTimeout(() => resolve(number), 1000);
    })
    return await promise;
}

let result = await getNumber(3);
console.log(result)