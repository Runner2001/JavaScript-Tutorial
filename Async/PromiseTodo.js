const getTodos = (jsondata) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.addEventListener('readystatechange', () => {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.responseText)
                resolve(data);
            }
            else if (!req.readyState === 4) {
                reject('Error Found');
            }
        });

        req.open('GET', jsondata);
        req.send();
    })
}
getTodos("data/mario.json")
    .then(res => {
        console.log("Mario data", res);
        return getTodos("data/Rohn.json");

    })
    .then(res => {
        console.log("Rohn Data", res);
        return getTodos("data/Shon.json");

    })
    .then(res => {
        console.log("Rohn Data", res);
    })
    .catch(error => {
        console.log(error);
    })