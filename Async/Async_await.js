const getdata = async () => { // async function return a promise

    const response = await fetch('./data/mario.json');
    const data = await response.json();

    return data; // This data return data but outside of async this will just promise

}

//in promise there will be resolve or reject

getdata() //async funtion return promise
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })