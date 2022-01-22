const list = document.querySelector('ul');

const addRecipes = (recipes, id) => {

    console.log(recipes);

    let html = `
        <li data-id="${id}" class="flex justify-between"> 
            <div class="flex flex-col">
                <h3 class="text-xl">${recipes.title}</h3>
                <h4 class="text-gray-500">${recipes.create_at.toDate()}</h4>
            </div>
            <button class="p-4 bg-red-600 text-white font-semibold rounded-md">Delete</button>
        </li>
    `;

    list.innerHTML += html;
}


//Get data from Firebase
// db.collection('recipes').get()
//     .then(snapshot => {
//         //data fetching
//         snapshot.docs.map(element => {
//             addRecipes(element.data(), element.id);
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     })

// Remove From UI
const deleteFromUi = id => {
    const alllist = document.querySelectorAll("li");
    alllist.forEach(item => {
        if (item.getAttribute('data-id') === id) {
            item.remove();
        }
    })
}


// Real Time Listenar
db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().map(change => {
        const doc = change.doc;
        console.log(doc);
        if (change.type == 'added') {
            addRecipes(doc.data(), doc.id)
        }
        else if (change.type == 'removed') {
            deleteFromUi(doc.id)
        }

    })
})


//Post data to Firebase
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const date = new Date();
    const recipe = {
        title: form.recipe.value,
        create_at: firebase.firestore.Timestamp.fromDate(date),
    };

    db.collection('recipes').add(recipe)
        .then(() => {
            console.log("Add");
        })
        .catch(error => {
            console.log(error);
        })

    form.recipe.value = "";
})


//Delete Item
list.addEventListener('click', e => {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection('recipes').doc(id).delete()
        .then(() => console.log("Delete"))
        .catch(error => console.log(error));
})