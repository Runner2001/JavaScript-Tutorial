import { initializeApp } from 'firebase/app';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    onSnapshot,
    orderBy,
    where
} from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqXucF7WATvoFgapQ-1thy9RVeQ-cnoPA",
    authDomain: "fir-tuto-ca962.firebaseapp.com",
    projectId: "fir-tuto-ca962",
    storageBucket: "fir-tuto-ca962.appspot.com",
    messagingSenderId: "880691357060",
    appId: "1:880691357060:web:96a55d08b54646be06e9d1"
};

initializeApp(firebaseConfig);


//init services firestore database
const db = getFirestore();
const auth = getAuth();

//collection ref
const collectionRef = collection(db, 'books');


// Queries 
const queries = (collectionRef, where("author", "==", "Runner"), orderBy('title', 'asc'))

//real time collection data
onSnapshot(collectionRef, (snapshot) => {
    let books = []
    snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books);
})

//get collection data
// getDocs(collectionRef)
//     .then(snapshot => {
//         let books = []
//         snapshot.docs.forEach(doc => {
//             books.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(books);
//     })
//     .catch(error => {
//         console.log(error);
//     });


//add books
const add = document.querySelector('.add');

add.addEventListener('submit', e => {
    e.preventDefault();

    addDoc(collectionRef, {
        title: add.book.value,
        author: add.author.value
    })
        .then(res => add.reset())
        .catch(error => console.log(error))
})

//remove books
const remove = document.querySelector('.remove');

remove.addEventListener('submit', e => {
    e.preventDefault();

    const docRef = doc(db, 'books', remove.book.value);
    deleteDoc(docRef)
        .then(res => remove.reset())
})

//Signin 
const signin = document.querySelector('.signin');

signin.addEventListener('submit', e => {
    e.preventDefault();

    const email = signin.email.value;
    const password = signin.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(create => {
            console.log("User Account was created", create.user);
            signin.reset();
        })
        .catch(error => console.log(error))
})

//Logout 
const logout = document.querySelector('.logout');
logout.addEventListener('click', e => {
    signOut(auth)
        .then(() => console.log("User Logout"))
        .catch(error => console.log(error))
})

//login
const login = document.querySelector('.login');
login.addEventListener('submit', e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, login.email.value, login.password.value)
        .then(log => console.log("User Login", log.user))
        .catch(error => console.log(error))
})