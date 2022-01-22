//Set a data to local storage
localStorage.setItem("Name", "Runner");
localStorage.setItem("Age", 21);

//Ge a data from local Storage
console.log(localStorage.getItem("Name"));
console.log(localStorage.getItem("Age"));

//Remove data from local Storage
localStorage.removeItem("Name");
localStorage.removeItem("Age");

//Remove all data from local Storage
localStorage.clear();

console.log(localStorage);