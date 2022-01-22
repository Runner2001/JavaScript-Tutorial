const chatlist = document.querySelector('.chatlist');
const message = document.querySelector('.Message');
const namechange = document.querySelector(".Name");
const update = document.querySelector('.update');
const room = document.querySelector('.chaticons');

message.addEventListener('submit', e => {
    e.preventDefault();
    const mess = message.message_add.value.trim();
    chatroom.addChat(mess)
        .then(() => console.log('add message'))
        .catch(error => console.log(error));
    message.reset()
})

namechange.addEventListener("submit", e => {
    e.preventDefault();
    const newName = namechange.namechange.value.trim();
    const Cap = newName.charAt(0).toUpperCase() + newName.slice(1);
    chatroom.updateName(Cap);
    namechange.reset();
    update.innerText = `Your Name is Change to ${Cap} .`;
    setTimeout(() => {
        update.innerText = '';
    }, 3000);
})

room.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        ui.clear();
        console.log(e.target);
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(data => {
            ui.render(data);
        })
    }
})

const username = localStorage.username ? localStorage.username : 'unknow';

const ui = new chatUi(chatlist);
const chatroom = new Chat('general', username);

chatroom.getChats(data => {
    ui.render(data);
})