class Chat {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chat');
        this.unsub;
    }

    async addChat(message) {

        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            create_at: firebase.firestore.Timestamp.fromDate(now)
        };

        const resp = await this.chats.add(chat);

        return resp;
    }

    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('create_at')
            .onSnapshot(snapshot => {
                // console.log(snapshot.docChanges());
                snapshot.docChanges().map(change => {
                    if (change.type === 'added') {
                        //update ui
                        callback(change.doc.data());
                    }
                })
            })
    }

    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room) {
        this.room = room;
        console.log('Room Update');
        this.unsub && this.unsub();
    }
}


// setTimeout(() => {
//     chatroom.updateName("Yoshi");
//     chatroom.updateRoom("gaming");
//     chatroom.getChats(data => {
//         console.log(data);
//     });
//     chatroom.addChat("Hello Gamers");
// }, 3000)