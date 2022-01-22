
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

class Admin extends User {
    constructor(username, email, title) {
        super(username, email); //look for parent class constructor 
        this.title = title; //For custom properties u need to call parent constructor and then can add;
    }
    delete(user) {
        user = userArray.filter(u => u.username !== user.username);
    }
}

const userone = new User("Runner", "runner@gmail.com");
const usertwo = new User("Mario", "mario@gmail.com");
const userthree = new Admin("Shan", "shan@gmail.com");

const userArray = [userone, usertwo, userthree];

console.log(userone.login(), usertwo.login().data().logout());
console.log(userthree.delete(usertwo));