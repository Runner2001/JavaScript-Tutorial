//Storing a complex data
const todo = [
    { id: 1, name: 'Working' },
    { id: 2, name: 'Playing' },
    { id: 3, name: 'Sleeping' }
]

//Js data into Json data
console.log(JSON.stringify(todo));

localStorage.setItem('TODO', JSON.stringify(todo));

//call data from local Storage
const data = localStorage.getItem("TODO");

console.log(JSON.parse(data));