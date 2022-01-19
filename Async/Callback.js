const getTodos = (callback, jsondata) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText)
            callback(undefined, data);
        }
        else if (!req.readyState === 4) {
            callback('Error Found', undefined);
        }
    });

    req.open('GET', jsondata);
    req.send();
}

getTodos((error, data) => {
    console.log("call back function fired");
    error ? console.log(error) : console.log(data);
}, './data/mario.json')