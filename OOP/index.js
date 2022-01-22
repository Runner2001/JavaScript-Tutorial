//In object 
//To call many method like array.filter().map()
//need to return data for each method.

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`User ${this.username} Login`);
        return this;
    }
    logout() {
        console.log(`User ${this.username} Logout and score is ${this.score}`);
        return this;
    }
    data() {
        this.score += 1;
        return this;
    }
}

const userone = new User("Runner", "runner@gmail.com");
const usertwo = new User("Mario", "mario@gmail.com");

console.log(userone.login(), usertwo.login().data().logout());