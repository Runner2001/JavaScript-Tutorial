//Before es6 constructor function are use for object
function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = function () {
        console.log("User Login" + this.username);
    }
}

function Admin(username, email, title) {
    User.call(this, username, email); //not like class can't use  super() class;
    this.title = title;
}

const userone = new User("Runner", "runner@gmail.com");
const usertwo = new Admin("Mario ", "mario@gmail.com", "Teacher");
console.log(userone, userone.login());