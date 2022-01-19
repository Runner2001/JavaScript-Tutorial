const req = new XMLHttpRequest();

req.addEventListener('readystatechange', () => {
    if (req.readyState === 4) {
        console.log(req.responseText);
    }
});

req.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
req.send();