const getSomethings = () => {
    return new Promise((resolve, reject) => {
        //fetch data
        resolve("data found");
        reject('error found');
    })
};

getSomethings()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })