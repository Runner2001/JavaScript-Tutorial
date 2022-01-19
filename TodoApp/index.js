const addnew = document.querySelector(".add");
const list = document.querySelector(".list");
const search = document.querySelector(".search");

const todo = ["Play with Rio", "Working Of JS", "Watch Movie"];

todo.map(item => {
  const itemadd = `
    <li class="bg-violet-600 px-4 py-2">
    <div class="each flex justify-between items-center">
      <h3 class="text-md font-medium">${item}</h3>
      <i
        class="far fa-trash-alt delete text-white cursor-pointer p-4 hover:bg-violet-900 hover:text-white rounded-full"
      ></i>
    </div>
  </li>
    `;
  return list.innerHTML += itemadd;
})

const addList = (add) => {
  const item = `
    <li class="bg-violet-600 px-4 py-2">
          <div class="each flex justify-between items-center">
            <h3 class="text-md font-medium">${add}</h3>
            <i
              class="far fa-trash-alt delete text-white cursor-pointer p-4 hover:bg-violet-900 hover:text-white rounded-full"
            ></i>
          </div>
        </li>
    `
  list.innerHTML += item;
};

addnew.addEventListener("submit", e => {
  e.preventDefault();
  const addtodo = addnew.new.value.trim();
  (addtodo.length) && addList(addtodo);
  addnew.reset();
});

list.addEventListener("click", e => {

  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove()
  }

})
