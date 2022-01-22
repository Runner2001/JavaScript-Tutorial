class chatUi {
  constructor(list) {
    this.list = list;
  }

  clear() {
    this.list.innerHTML = '';
  }

  render(data) {
    const html = `
        <li
        class="flex flex-col gap-3 my-4 text-left justify-start items-start rounded-md bg-blue-200 py-4 px-6"
      >
        <div class="flex gap-6 items-center">
          <h3 class="font-semibold text-lg">${data.username}</h3>
          <h5>${data.message}</h5>
        </div>
        <hr class="bg-gray-800 w-[90%]" />
        <h3 class="text-gray-600">${data.create_at.toDate()}</h3>
      </li>
        `;
    this.list.innerHTML += html;
  }
}